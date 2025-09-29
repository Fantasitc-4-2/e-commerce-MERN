const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const repository = require("../repository/user.repository")
const { generateOtp, sendOtpEmail } = require("../services/mailService");

exports.register = async (userData) => {
  const requiredFields = ["email", "password", "username", "phoneNumber"];
  for (const field of requiredFields) {
    if (!userData[field]) {
      throw new Error(`${field} is required`);
    }
  }

  const existingUser = await repository.getUserByEmail(userData.email);
  if (existingUser) {
    throw new Error("Email already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(userData.password, 10);

  // Generate OTP & expiry
  const otp = generateOtp();
  const otpExpires = Date.now() + 100 * 60 * 1000; // 100 minutes

  // Create user (isVerified = false until OTP confirmed)
  const newUser = await repository.createUser({
    ...userData,
    password: hashedPassword,
    otp:otp,
    otpExpires:otpExpires,
    isVerified: false
  });

  // Send OTP email
  await sendOtpEmail(newUser.email, otp);

  // Don’t return sensitive fields
  return {
    id: newUser._id,
    username: newUser.username,
    email: newUser.email,
    message: "User registered. Please check your email for the OTP."
  };
};


const createToken = (user) => {
  // keep payload small — avoid putting sensitive data
  const payload = { id: user._id.toString(), username:user.username, roles: user.roles };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || "1d" });
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Email and password required" });

    const user = await repository.getUserByEmail(email);
    if (!user) return res.status(401).json({ error: "Invalid email or password" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: "Invalid email or password" });

    if (!user.isVerified) {
      return res.status(403).json({ error: "Please verify your email before logging in" });
    }

    const token = createToken(user);

    // Option A: return token in JSON (client stores it, e.g., localStorage or memory)
    // res.json({ token, user: { id: user._id, username: user.username, email: user.email } });

    // Option B (recommended for browsers): set httpOnly cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // true on HTTPS production
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000 // 1 day in ms (match token expiry)
    });

    // respond with user info (without password)
    res.json({ message: "Login successful", user: { id: user._id, username: user.username, email: user.email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.me = async (req, res) => {
  try {
    // console.log("req.user:", req.user);
    const user = await repository.getUserById(req.user.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json({
      id: user._id,
      username: user.username,
      email: user.email,
      roles: user.roles
    });
  } catch (err) {
//   console.error("Error in /me:", err);
  res.status(500).json({ error: "Server Error"});
}
};

exports.logout = (req, res) => {
  res.clearCookie("token", { httpOnly: true, sameSite: "strict" });
  res.json({ message: "Logged out" });
};

exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ error: "Email and OTP are required" });
    }

    const user = await repository.getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.otp !== otp) {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    if (user.otpExpires < Date.now()) {
      return res.status(400).json({ error: "OTP expired" });
    }


    user.isVerified = true;
    user.otp = undefined; 
    user.otpExpires = undefined;
    await user.save();

    res.json({ message: "Email verified successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};



