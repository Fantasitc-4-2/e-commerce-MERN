const BACKEND_URL = "https://e-commerce-mern-w1ml.onrender.com";

export const getImageUrl = (imagePath) => {
  // If the image path is already a full URL (e.g., from CDN), return it as is
  if (imagePath?.startsWith('http')) {
    return imagePath;
  }
  
  // For local uploads, prepend the backend URL
  return `${BACKEND_URL}${imagePath}`;
};