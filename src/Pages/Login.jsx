import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleLogo from "../assets/googleicon.png";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Authcontext } from "../Components/Provider/Authprovider";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

const Login = () => {
  const { SignInUser, setuser, googleSignIn } = useContext(Authcontext);
  const [err, seterr] = useState("");
  const [show, setshow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    seterr('')

    SignInUser(email, password)
    .then((result) => {
      const user = result.user;
      setuser(user);
      Swal.fire({
        title: "Login Successful",
        text: "user login",
        icon: "Success"
      });
      navigate(location?.state ? location?.state : "/");
    })


    .catch((error) => {
        seterr(error.message);
        seterr(error.message);
        toast.success(`${error.message}`, {
          position: "top-center",
        });
      });
  };

  const handleGoogleSignIn =()=>{
    googleSignIn()
    .then((result)=>{
      // console.log(result.user);
      navigate(location?.state ? location?.state : "/");
    })
    .catch((error)=>{
     const errorMessage = error.message;
    //  console.log(errorMessage);
    })
  }
  return (
    <div>
      <button className="text-lg bg-[#f28a1d] mt-3 ml-5 rounded-sm px-3 text-[#ffffff] font-medium ">
        <Link to="/">Back To Home </Link>
      </button>
      <div className="min-h-screen flex items-center justify-center">
        <div className="card bg-[#ffffff] shadow-lg hover:shadow-2xl rounded-lg my-10 w-full max-w-lg shrink-0 p-8">
          <h1 className="text-xl font-bold text-center">Login Your Account</h1>
          <form onSubmit={handleLogIn} className="card-body mb-0 pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input rounded-md bg-[#F3F3F3] border-none"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type={show ? "text" : "password"}
                placeholder="password"
                className="input rounded-md bg-[#F3F3F3] border-none "
                required
              />
              <div
                onClick={() => setshow(!show)}
                className="text-[#1313138c] absolute top-[52px] right-4"
              >
                {show ? <IoMdEye></IoMdEye> : <IoMdEyeOff></IoMdEyeOff>}
              </div>
              {err && (
                  <label className="label text-xs text-red-500">{err}</label>
                )}
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-accent bg-[#616EF1] text-[#ffffff] rounded-md">
                Login
              </button>
            </div>
          </form>
          <div className="text-base font-semibold mx-8 text-center mt-4 mb-2">
            Social Login
          </div>

          {/* google sign in  */}
       
          <button onClick={handleGoogleSignIn}  className="shadow-md hover:shadow-xl border border-[#13131312] justify-center py-2 mb-3 mx-8 flex items-center gap-3  text-lg rounded-md ">
            <img src={googleLogo} className="w-6 h-6" alt="" />
            <p className="text-base">Sign In With Google</p>
          </button>
          <div className="text-sm ml-8 mt-3 font-normal text-[#706F6F]">
            Dont Have an Account ?{" "}
            <Link to="/register" className="text-sm font-normal text-[#FF8C47]">
              Register
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
