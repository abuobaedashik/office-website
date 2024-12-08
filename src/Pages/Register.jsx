import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import googleLogo from '../assets/googleicon.png'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Authcontext } from "../Components/Provider/Authprovider";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
const { createUser, setuser ,googleSignIn,updateUserProfile } = useContext(Authcontext);
    const [show,setshow] =useState(false)
    // const location = useLocation();
    const [err, seterr] = useState("");
    const navigate = useNavigate();
    const handleSubmit =(event)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const user ={name,email,photo,password}
        console.log(user);
        seterr('')

        if (password.length <6) {
          seterr("password langth should be 6")
          toast.error(`${err}`, {
            position: "top-center"
          });
          // console.log(err);
            return;
          } 


          
      const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
      if (!regex.test(password)) {
        seterr("At Least one UpperCase, one LowerCase and should be six characters long");
        toast.error(`${err}`, {
          position: "top-center"
        });
        // console.log(err);
        return;
      }


        createUser(email, password)
        .then((result) => {
          const user = result.user;
          setuser(user);
          console.log(user);
         
          updateUserProfile({displayName:name,
            photoURL:photo})
          .then(()=>{
            navigate('/')
          }).catch((error)=>{
            //   console.log(error.message);
          })
        })
        .catch((error) => {
  
          const errorMessage = error.message;
          seterr(error.message);
          toast.error(`${errorMessage}`, {
            position: "top-center"
          });
            
        });   
    }

    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then((result)=>{
          console.log(result.user);
          Navigate('/')
        })
    } 
    return (
    <div>
      <button className="text-lg bg-[#f28a1d] mt-3 ml-5 rounded-sm px-3 text-[#ffffff] font-medium ">
        <Link to="/">Back To Home </Link>
      </button>
      <div className="min-h-screen flex items-center justify-center">
        <div className="card bg-[#ffffff] shadow-lg hover:shadow-2xl rounded-lg my-10  w-full max-w-lg shrink-0 p-8">
          <h1 className="text-xl font-bold text-center">
            Register your account
          </h1>
          <form onSubmit={handleSubmit} className="card-body mb-0 pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input rounded-md bg-[#F3F3F3] input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input rounded-md bg-[#F3F3F3] input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                className="input rounded-md bg-[#F3F3F3] input-bordered"
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
                className="input rounded-md bg-[#F3F3F3] input-bordered"
                required
              />
              <div
                onClick={() => setshow(!show)}
                className="text-[#1313138c] absolute top-[52px] right-4"
              >
                {show ? <IoMdEye></IoMdEye> : <IoMdEyeOff></IoMdEyeOff>}
              </div>
            </div>
            {err && <label className="label text-xs text-red-500">{err}</label>}
            <div className="form-control mt-3">
              <button className="btn btn-accent bg-[#616EF1] rounded-md text-[#ffffff]">
                Register
              </button>
            </div>
          </form>
          <div className="text-base font-semibold mx-8 text-center mt-4 mb-2">
            Social Login
          </div>
          <button
            onClick={handleGoogleSignIn}
            className="shadow-md hover:shadow-xl border mb-3 border-[#13131312] justify-center py-2 mx-8 flex items-center gap-3  text-lg rounded-md "
          >
            <img src={googleLogo} className="w-6 h-6" alt="" />
            <p className="text-base">Sign In With Google</p>
          </button>
          <div className="text-sm ml-8 mt-3 font-normal text-[#706F6F]">
            Already You Have an Account ?
            <Link to="/login" className="text-sm font-normal text-[#FF8C47]">
              Login
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Register;
