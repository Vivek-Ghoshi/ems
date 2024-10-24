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
      <div className="w-screen h-screen flex items-center bg-zinc-700 justify-center">
        <div className="w-[27%] h-[40%] border-2 border-zinc-500 rounded-md">
          <h2 className="font-extrabold text-2xl text-white ml-28 mt-2">
            Login page
          </h2>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col"
          >
            <input
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              className="mx-4 mt-8 rounded-full p-2 outline-none border-2 border-emerald-300 bg-transparent text-white"
              type="email"
              name="email"
              placeholder="Type your email..."
            />
            <input
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              className="mx-4 mt-2  rounded-full p-2 border-2 outline-none border-emerald-300 bg-transparent text-white"
              type="password"
              name="password"
              placeholder="Type your password..."
            />
            <button className="bg-emerald-600 w-32 mt-5 p-2 font-bold mx-28 text-white rounded-full">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
