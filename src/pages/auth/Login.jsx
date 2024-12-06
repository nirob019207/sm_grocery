import { jwtDecode } from "jwt-decode";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useLoginMutation } from "../../store/api/auth/authApiSlice";
import { useDispatch } from "react-redux";
import {setUser} from '../../store/api/auth/authSlice'


const Login = ({ toggleModal, switchToRegister }) => {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch=useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login(formData).unwrap();
      console.log(userData.data.token); 
  
     
      const decodedToken = jwtDecode(userData.data.token); 
      console.log("Decoded Token:", decodedToken);
  
      // Extract the role
      const userRole = decodedToken.role; 
      console.log("User Role:", userRole);
  
   
      dispatch(setUser({
        token: userData.data.token,
        role: userRole,
      }));
  
      localStorage.setItem("auth", JSON.stringify({
        token: userData.data.token,
        role: userRole, 
      }));
  
      // Navigate to dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid email or password");
    }
  };
  
  return (
    <div className="flex items-center justify-center md:w-1/4 bg-gray-100">
      <div className="w-full bg-white shadow-lg rounded-lg p-6 relative">
        {/* Close Icon */}
        <div className="absolute top-4 right-2">
          <RxCross2 onClick={toggleModal} className="text-2xl z-50" />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        {/* Error Message */}
        {error && (
          <div className="mb-4 text-red-500 text-sm text-center">{error}</div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              autoComplete="current-password"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-orange-400"
              />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-orange-400 hover:underline text-sm"
            >
              Forgot Password?
            </button>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 rounded-lg shadow-md transition duration-300 ${
                isLoading
                  ? "bg-orange-300 cursor-not-allowed"
                  : "bg-orange-400 hover:bg-orange-500 text-white"
              }`}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="mt-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Register Link */}
        <div className="mt-4 text-center">
          <span className="text-gray-700">Don't have an account? </span>
          <button
            onClick={switchToRegister}
            className="text-orange-400 hover:underline font-medium"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
