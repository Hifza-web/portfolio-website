import { Link } from "react-router-dom";
function SignUp() {
  return (
    <section className="min-h-screen bg-[linear-gradient(180deg,#081B29_0%,#0B2238_40%,#112E42_75%,#081B29_100%)]">
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-md rounded-2xl bg-[#112E42] p-8 shadow-xl">
          <h2 className="mb-8 text-center text-4xl font-bold text-white">
            Sign Up
          </h2>
          {/* {Name} */}
          <div className="mb-4">
            <label className="mb-2 block text-white">Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-[#00ABF0]/30 bg-transparent p-4 text-white outline-none transition duration-300 placeholder:text-gray-400 focus:border-[#00ABF0]"
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label className="mb-2 block text-white">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-[#00ABF0]/30 bg-transparent p-4 text-white outline-none placeholder:text-gray-400 focus:border-[#00ABF0]"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="mb-2 block text-white">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-[#00ABF0]/30 bg-transparent p-4 text-white outline-none placeholder:text-gray-400 focus:border-[#00ABF0]"
            />
          </div> 
          {/* {confirm Password} */}
          <div className="mb-6">
  <label className="mb-2 block text-white">
    Confirm Password
  </label>

  <input
    type="password"
    placeholder="Confirm your password"
    className="w-full rounded-lg border border-[#00ABF0]/30 bg-transparent p-4 text-white outline-none transition duration-300 placeholder:text-gray-400 focus:border-[#00ABF0]"
  />
</div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#00ABF0] py-4 text-lg font-semibold text-[#081B29] transition duration-300 hover:bg-[#0095d4] hover:shadow-[0_0_20px_#00ABF0]"
          >
            Sign Up
          </button>

          {/* Sign Up */}
          <p className="mt-6 text-center text-gray-300">
            Already have an account?{" "}
            <Link
  to="/login"
  className="cursor-pointer font-semibold text-[#00ABF0] hover:underline"
>
  Login
</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
