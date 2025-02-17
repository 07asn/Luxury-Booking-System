import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Register,
  AdminDash,
  SellerDash,
  Rentals,
  PropertyDetails,
  Checkout,
  Wishlist,
  UserProfile,
  About,
  Contact,
  PageNotFound,
  BecomeOwnerProfile,
  SellerObjection,
} from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/AdminDash" element={<AdminDash />} />
      <Route path="/SellerDash" element={<SellerDash />} />
      <Route path="/Rentals" element={<Rentals />} />
      <Route path="/PropertyDetails/:id" element={<PropertyDetails />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/Wishlist" element={<Wishlist />} />
      <Route path="/UserProfile" element={<UserProfile />} />
      <Route path="/About" element={<About />} />
      <Route path="/support" element={<Contact />} />
      <Route path="/BecomeOwnerProfile" element={<BecomeOwnerProfile />} />
      <Route path="/sellerObjection" element={<SellerObjection />} />
      {/* Fallback route for unknown paths */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
