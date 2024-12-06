import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserLayout } from "./layout/publicLayout/UserLayout";
import { Home } from "./pages/home/Home";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";
import { PrivateLayout } from "./layout/dashboardLayout/PrivateLayout";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { User } from "./pages/admin/users/User";
import { Category } from "./pages/admin/category/Category";
import { Products } from "./pages/admin/products/Products";
import { ProductsCreate } from "./pages/admin/products/ProductsCreate";
import { UserDash } from "./pages/userDashboard/UserDash";

function App() {
  const auth = useSelector((state) => state.auth);

  // Debugging: Log the auth state to verify role data
  console.log(auth); 

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Layout */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="products/:productId" element={<ProductDetails />} />
        </Route>

        {/* Private Layout */}
        <Route
          path="/dashboard"
          element={
            auth && auth.role === "ADMIN" ? (
              <PrivateLayout />
            ) : (
              <Navigate to="/user-dashboard" replace />
            )
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="users" element={<User />} />
          <Route path="category" element={<Category />} />
          <Route path="products" element={<Products />} />
          <Route path="createProducts" element={<ProductsCreate/> } />




          {/* Add other dashboard-specific routes here */}
        </Route>
        <Route path="/user-dashboard" element={<UserDash />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
