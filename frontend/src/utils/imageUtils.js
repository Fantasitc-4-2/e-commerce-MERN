// Use the same backend URL as axios.js for consistency
const BACKEND_URL = import.meta.env.VITE_API_URL || "https://e-commerce-mern-five-sage.vercel.app";

export const getImageUrl = (imagePath) => {
  // If the image path is already a full URL (e.g., from CDN), return it as is
  if (imagePath?.startsWith("http")) {
    return imagePath;
  }

  // For local uploads, prepend the backend URL
  return `${BACKEND_URL}${imagePath}`;
};
