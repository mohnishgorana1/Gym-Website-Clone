import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import banner from "../../images/login/banner.jpg";
import background from "../../images/pricing/background.jpg";

function RegisterPage() {
  return (
    <div className="w-full flex flex-col gap-8 bg-slate-200 -z-10">
      <div className="relative flex flex-col items-center z-10 sm:-top-5 ">
        <img src={banner} className="w-full h-24 sm:h-48" />
        <h1 className="text-center text-3xl absolute bottom-8 font-bold text-white">
          Register
        </h1>
      </div>

      <div className="flex items-center justify-center">
        <div className="py-8 px-10 sm:py-12 bg-black text-white w-[80%] sm:w-[35%] grid gap-8">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid items-start gap-8"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-4 py-2 text-gray-700 "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Password</label>
              <input
                type="email"
                placeholder="Password"
                className="w-full pl-4 py-2 text-gray-700 "
              />
            </div>
            <button
              type="submit"
              className="w-full px-2 py-1 text-center font-white font-medium text-lg  bg-[#ff0335ff] "
            >
              Sign Up
            </button>
          </form>
          <div>
            <p className="text-sm">
              Already have account? &nbsp;
              <Link to='/login' className="font-semibold text-red-500">Sign In</Link>
            </p>
            <p className="text-gray-100 text-xs mt-1">
              ( Make{" "}
              <span className="font-semibold text-red-500">new Account</span> or
              go to <span className="font-semibold text-red-500">Sign In</span>{" "}
              Page for Test Account )
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default RegisterPage;
