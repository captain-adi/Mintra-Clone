import { useForm } from "react-hook-form";
import axios from "../../api/apiConfige";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = async (data) => {
    try {
      const res = await axios.post("/auth/login", data);
      console.log(res.data.data.user);
      setUser(res.data.data.user);
      toast.success(res.data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-500 mt-2 text-sm">
            Login to your account to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onsubmit)} className="space-y-6">
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Enter Email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-3 border rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Enter Password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-3 border rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
            <div className="text-right mt-2">
              <a
                href="/forgot-password"
                className="text-blue-500 text-sm hover:underline"
              >
                Forgot Password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 text-lg rounded-xl font-semibold hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 text-sm mt-8">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
