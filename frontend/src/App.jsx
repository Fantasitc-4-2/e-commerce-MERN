import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import EditProfile from "./compoents/profile/EditProfile";
import MyCancellations from "./compoents/profile/MyCancellations";
import AddressBook from "./compoents/profile/AddressBook";
import MyReturns from "./compoents/profile/MyReturns";
import PaymentOptions from "./compoents/profile/PaymentOptions";
import ProfileLayout from "./layouts/ProfileLayout";
import Products from "./pages/Products";
import VerifyEmail from "./pages/VerifyEmail";

// 🔹 Import Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp/:email" element={<VerifyEmail />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<EditProfile />} />
          <Route path="edit" element={<EditProfile />} />
          <Route path="cancellations" element={<MyCancellations />} />
          <Route path="address" element={<AddressBook />} />
          <Route path="returns" element={<MyReturns />} />
          <Route path="payment" element={<PaymentOptions />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      {/* 🔹 Toast container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover={true}
        theme="colored"
      />
    </>
  );
}

export default App;
