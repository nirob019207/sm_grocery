import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../store/api/auth/authApiSlice";

function Register({toggleModal,switchToLogin}) {
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  // const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData).unwrap(); // Try to register the user
      navigate("/login"); // Navigate after successful registration
    } catch (error) {
      console.error("Registration failed:", error); // Log the error for debugging
      alert("Registration failed. Please try again."); // Notify the user
    }
  };
  

  return (
    <div className="flex items-center justify-center md:w-1/4 bg-gray-100">
      <div className="w-full bg-white shadow-lg rounded-lg p-6 relative">
        <div className="absolute top-4 right-2">
          <RxCross2 onClick={toggleModal} className="text-2xl z-50" />
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>
       
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Full Name
            </label>
            <input
              id="email"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Enter your Full Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
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
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
         
              name="password"
              value={formData.password}
              onChange={handleChange}              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
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
              className="w-full bg-orange-400 text-white py-2 rounded-lg shadow-md hover:bg-orange-500 transition duration-300"
            >
              Register
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="mt-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Switch to Login */}
        <div className="mt-4 text-center">
          <span className="text-gray-700">Already have an account? </span>
          <button
            onClick={switchToLogin}
            className="text-orange-400 hover:underline font-medium"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
