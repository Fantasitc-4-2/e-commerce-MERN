# 🛍️ MERN E-Commerce Platform

A full-featured e-commerce platform built with the MERN (MongoDB, Express.js, React, Node.js) stack. This project implements essential e-commerce functionalities with a focus on security, performance, and user experience.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Features

### User Management
- 🔐 Secure authentication with JWT
- 📧 Email verification system
- 👤 User profile management
- 📍 Multiple delivery address management

### Shopping Experience
- 🛒 Cart management
- ❤️ Wishlist functionality
- ⭐ Product reviews and ratings
- 🔍 Advanced product search and filtering
- 📂 Category-based navigation

### Payment and Orders
- 💳 Secure payment processing with Stripe
- 📦 Order tracking
- 📋 Order history
- 🔄 Real-time order status updates

### Admin Features
- 📊 Product management
- 🗂️ Category management
- 📈 Order management
- 👥 User management

## 🚀 Tech Stack

### Frontend
- React.js
- Redux Toolkit for state management
- Tailwind CSS for styling
- Axios for API requests
- React Router for navigation

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- JWT for authentication
- Stripe for payments
- SendGrid for emails
- Cloudinary for image management

### DevOps
- Vercel for deployment
- Environment variables management
- Content Security Policy (CSP) implementation
- CORS security configuration

## 📝 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB
- npm or yarn
- Git

## 🛠️ Installation and Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Fantasitc-4-2/e-commerce-MERN.git
   cd e-commerce-MERN
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   DB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_KEY=your_cloudinary_key
   CLOUD_SECRET=your_cloudinary_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   SENDGRID_API_KEY=your_sendgrid_api_key
   FROM_EMAIL=your_sender_email
   FRONTEND_URL=http://localhost:5173
   ```

3. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   ```

   Create a `.env` file in the frontend directory:
   ```env
   VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
   VITE_API_BASE_URL=http://localhost:5000
   ```

4. **Start the Application**
   
   Backend:
   ```bash
   cd backend
   npm run dev
   ```

   Frontend:
   ```bash
   cd frontend
   npm run dev
   ```

## 🌐 API Documentation

Detailed API documentation is available in [API_DOCUMENTATION.md](./API_DOCUMENTATION.md).

## 🔒 Security Features

- JWT-based authentication
- Secure password hashing
- CORS protection
- Content Security Policy
- XSS protection
- CSRF protection
- Rate limiting
- Secure cookie configuration

## 📱 Environment Support

- 💻 Modern browsers
- 📱 Responsive design
- 🌐 Cross-platform compatibility

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- Frontend Developer: Abdalkareem Negm, Nour Hamdi, Kholoud Sabry
- Backend Developer: Mohammed Khaled, Fady Ashraf, Zeyad Mohammed

## 🌟 Live Demo

Visit our live demo: [E-Commerce Platform](https://e-commerce-mern-beige.vercel.app/)

## 📞 Support

For support, email [abdalkareemnegm@gmail.com].

## 🙏 Acknowledgments

- [Stripe](https://stripe.com/) for payment processing
- [Cloudinary](https://cloudinary.com/) for image management
- [SendGrid](https://sendgrid.com/) for email services
- [Vercel](https://vercel.com/) for hosting

---

⭐️ Star us on GitHub — it helps!

