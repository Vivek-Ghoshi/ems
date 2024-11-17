import React, { useState } from "react";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    setemail("");
    setpassword("");
  };
  return (
    <>
    <div className="w-screen h-screen flex items-center bg-[#1c1c1c]  justify-center">
      <div className="w-[400px] p-8 backdrop-blur-sm bg-[#1c1c1c] rounded-2xl shadow-2xl border border-white/20 hover:border-white/40 transition-all duration-300">
        <h2 className="font-extrabold text-3xl text-white text-center mb-8">
         Login 
        </h2>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col gap-4"
        >
          <div className="relative">
            <input
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              className="w-full px-6 py-3 rounded-lg bg-zinc-800/50 text-white border border-zinc-700 outline-none focus:border-white transition-all duration-300"
              type="email"
              name="email"
              placeholder="Type your email..."
            />
          </div>
          <div className="relative">
            <input
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              className="w-full px-6 py-3 rounded-lg bg-zinc-800/50 text-white border border-zinc-700 outline-none focus:border-white transition-all duration-300"
              type="password"
              name="password"
              placeholder="Type your password..."
            />
          </div>
          <button className="w-full mt-4 py-3 px-6 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-all duration-300 transform hover:scale-[1.02]">
            Login
          </button>
        </form>
      </div>
    </div>
  </>
  );
};

export default Login;





   
  

