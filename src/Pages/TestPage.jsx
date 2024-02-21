import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

import { BsPersonCircle } from "react-icons/bs";
function TestPage() {
  const user = null
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    avatar: "",
  });

  const [previewImage, setPreviewImage] = useState("");
  const handleInputs = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: [e.target.value],
    });
  };

  function getImage(e) {
    e.preventDefault();

    // getting image
    const uploadedImage = e.target.files[0];

    if (uploadedImage) {
      setRegisterData({
        ...registerData,
        avatar: uploadedImage,
      });
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadedImage);
      fileReader.addEventListener("load", function () {
        setPreviewImage(this.result);
      });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      username,
      email,
      password,
      confirmPassword,
      phone,
      address,
      avatar,
    } = registerData;

    if (
      !firstName ||
      !lastName ||
      !username ||
      !email ||
      !password ||
      !confirmPassword ||
      !phone ||
      !address ||
      !avatar
    ) {
      toast.error("All Fields are Required");
      return;
    }

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("avatar", avatar);

    console.log("FORMDATA: ", formData);

    // const response = await dispatch(registerUserAsync(formData));
    // if (response?.payload?.success === true) {
    //   navigate("/");
    // }
    setRegisterData({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      address: "",
      avatar: "",
    });
  };
  return (
    <div>
      {" "}
      <nav className="w-full grid py-5 px-10 bg-[#131921ff]">
        <nav className="grid sm:grid-cols-12 justify-between items-center text-white">
          <div id="sidebar" className="col-span-2 sm:col-span-4 ">
            <GiHamburgerMenu
              className="col-span-3 text-2xl sm:text-3xl hover:scale-125 sm:hover:scale-110 duration-200 ease-linear "
              onClick={toggleSidebar}
            />
          </div>
          <div
            id="logo"
            className=" col-span-4 grid items-center justify-center"
          >
            <Link
              to={"/"}
              className="px-5 py-1 rounded-xl text-white font-bold text-xl shadow-sm shadow-gray-200 max-w-fit"
            >
              Fashion Hub
            </Link>
          </div>
          <div
            id="cart_auth"
            className="col-span-2 sm:col-span-4 flex items-center justify-end gap-8"
          >
            {!user ? (
              <Link
                to="/register"
                className="hidden sm:flex font-semibold px-4 py-1 border border-white hover:bg-white hover:text-[#131921ff] ease-in-out duration-200"
              >
                Register
              </Link>
            ) : (
              <div className="hidden sm:flex font-semibold px-4 py-1 border border-white hover:bg-white hover:text-[#131921ff] ease-in-out duration-200">
                {user.profile.firstName} {user.profile.lastName}
              </div>
            )}

            {user && (
              <Link
                to="/"
                onClick={() => dispatch(logoutUserAsync())}
                className="hidden sm:flex font-semibold px-4 py-1 border border-white hover:bg-white hover:text-[#131921ff] ease-in-out duration-200"
              >
                Logout
              </Link>
            )}

            <Link className="flex items-center gap-1 px-4 py-1 border border-transparent hover:border hover:border-white ease-in-out duration-200">
              <span className="hidden sm:flex">Cart </span>{" "}
              <FaShoppingCart className="text-2xl" />
            </Link>
          </div>
        </nav>

        {/* sidebar */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
            isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={toggleSidebar}
        ></div>
        {/* sidebar-content */}
        <div
          className={`fixed inset-y-0 left-0 w-[80%] sm:w-64 bg-gray-300 transform transition-transform ease-in-out duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="h-full flex flex-col px-4 py-8 gap-8 justify-between">
            <div>
              <Link
                to="/products/men"
                className="block py-2 px-4 hover:bg-slate-900 hover:text-white"
                onClick={toggleSidebar}
              >
                MEN
              </Link>
              <Link
                to="products/women"
                className="block py-2 px-4 hover:bg-slate-900 hover:text-white"
                onClick={toggleSidebar}
              >
                WOMEN
              </Link>
            </div>
            <div className="grid gap-4">
              {!user ? (
                <Link
                  to="/register"
                  className="flex items-center justify-between font-semibold px-4 py-1 border border-[#131921ff] hover:bg-[#131921ff] hover:text-white ease-in-out duration-200"
                >
                  Register
                </Link>
              ) : (
                <div className="flex items-center justify-center font-semibold px-4 py-1 border border-[#131921ff] hover:bg-[#131921ff] hover:text-white ease-in-out duration-200">
                  {user.profile.firstName} {user.profile.lastName}
                </div>
              )}

              {user && (
                <Link
                  to="/"
                  onClick={() => dispatch(logoutUserAsync())}
                  className="flex font-semibold px-4 py-1 border border-white hover:bg-white hover:text-[#131921ff] ease-in-out duration-200"
                >
                  Logout
                </Link>
              )}

              <Link
                to="/cart"
                onClick={toggleSidebar}
                className="flex items-center justify-between gap-1 px-4 py-1 border border-[#131921ff] hover:bg-[#131921ff] hover:text-white ease-in-out duration-200"
              >
                <span className="">Cart</span>{" "}
                <FaShoppingCart className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="w-full bg-gray-200 flex flex-col items-center justify-center gap-8">
        <h1 className="mt-8 py-1 text-center font-bold text-slate-950 text-3xl">
          Register
        </h1>
        <div className="mb-8 w-[90%] sm:w-[70%] md:w-[60%] lg:w-[40%]  text-center px-5 py-8 bg-gray-300 grid shadow-gray-800  shadow-2xl">
          <form
            noValidate
            onSubmit={handleSubmit}
            className="w-full grid gap-5"
          >
            <div className="place-self-center mb-8">
              <label htmlFor="image_uploads" className="cursor-pointer">
                {previewImage ? (
                  <img
                    className="w-24 h-24 rounded-full m-auto"
                    src={previewImage}
                  />
                ) : (
                  <BsPersonCircle className="w-24 h-24 text-gray-900 rounded-full m-auto" />
                )}
              </label>
              <input
                className="hidden"
                type="file"
                name="image_uploads"
                id="image_uploads"
                accept=".jpg, .jpeg, .png, .svg"
                onChange={getImage}
              />
            </div>
            <div className="flex sm:items-center justify-between w-full">
              <label
                htmlFor="firstName"
                className="place-self-start text-sm sm:text-lg font-semibold tracking-wider "
              >
                FirstName
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                onChange={handleInputs}
                value={registerData.firstName}
                className="text-center py-1 border border-gray-500 text-gray-900 sm:w-[60%]"
              />
            </div>
            <div className="flex sm:items-center justify-between w-full">
              <label
                htmlFor="lastName"
                className="place-self-start text-sm sm:text-lg font-semibold tracking-wider "
              >
                LastName
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                onChange={handleInputs}
                value={registerData.lastName}
                className="text-center py-1 border border-gray-500 text-gray-900 sm:w-[60%]"
              />
            </div>{" "}
            <div className="flex sm:items-center justify-between w-full">
              <label
                htmlFor="username"
                className="place-self-start text-sm sm:text-lg font-semibold tracking-wider "
              >
                UserName
              </label>
              <input
                type="text"
                name="username"
                placeholder="Enter Username"
                onChange={handleInputs}
                value={registerData.username}
                className="text-center py-1 border border-gray-500 text-gray-900 sm:w-[60%]"
              />
            </div>{" "}
            <div className="flex sm:items-center justify-between w-full">
              <label
                htmlFor="email"
                className="place-self-start text-sm sm:text-lg font-semibold tracking-wider "
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                onChange={handleInputs}
                value={registerData.email}
                className="text-center py-1 border border-gray-500 text-gray-900 sm:w-[60%]"
              />
            </div>
            <div className="flex sm:items-center justify-between w-full">
              <label
                htmlFor="password"
                className="place-self-start text-sm sm:text-lg font-semibold tracking-wider "
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={handleInputs}
                value={registerData.password}
                className="text-center py-1 border border-gray-500 text-gray-900 sm:w-[60%]"
              />
            </div>{" "}
            <div className="flex sm:items-center justify-between w-full">
              <label
                htmlFor="confirmPassword"
                className="place-self-start text-sm sm:text-lg font-semibold tracking-wider "
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleInputs}
                value={registerData.confirmPassword}
                className="text-center py-1 border border-gray-500 text-gray-900 sm:w-[60%]"
              />
            </div>{" "}
            <div className="flex sm:items-center justify-between w-full">
              <label
                htmlFor="phone"
                className="place-self-start text-sm sm:text-lg font-semibold tracking-wider "
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                pattern="[0-9]{10}"
                maxLength="10"
                placeholder="Enter 10 digits Phone No."
                onChange={handleInputs}
                value={registerData.phone}
                className="text-center py-1 border border-gray-500 text-gray-900 sm:w-[60%]"
              />
            </div>{" "}
            <div className="flex sm:items-center justify-between w-full">
              <label
                htmlFor="address"
                className="place-self-start text-sm sm:text-lg font-semibold tracking-wider "
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                placeholder="Enter Permanent address"
                onChange={handleInputs}
                value={registerData.address}
                className="text-center py-1 border border-gray-500 text-gray-900 sm:w-[60%]"
              />
            </div>
            <button
              type="submit"
              className="tracking-widest justify-self-center mt-5 px-10 py-2 font-semibold 
                sm:font-bold text-white sm:text-xl text-lg border bg-gray-900
                hover:bg-gray-200 hover:border hover:border-gray-900 hover:text-gray-950 duration-200 ease-linear"
            >
              Register
            </button>
          </form>
          <h1 className="font-semibold mt-5">
            Already have an Account?&nbsp;
            <span className="text-blue-700 font-semibold hover:underline">
              <Link to="/login">Sign in</Link>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default TestPage;
