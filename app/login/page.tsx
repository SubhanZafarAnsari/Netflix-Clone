"use client";
import { useCallback, useState } from "react";
import Input from "@/components/Input";

function page() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [varient, setVarient] = useState("login");
  const toggleVarient = useCallback(() => {
    setVarient((currentVarient) =>
      currentVarient === "login" ? "register" : "login"
    );
  }, []);

  return (
    // Setting up the background
    <div className="relative h-full w-full bg-[url('./images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      {/* giving an opacity */}
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        {/* Setting up a simple navigation bar to display logo */}
        <nav className="px-12 py-5">
          {/* Netflix logo in the navbar */}
          <img
            src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
            alt="Logo"
            className="h-12"
          />
        </nav>
        {/* The sign in box */}
        <div className=" flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-centre mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className=" text-white text-4xl mb-8 font-semibold">
              {varient === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {/* User Name Input */}
              {varient === "register" && (
                <Input
                  Label="User Name"
                  onChange={(ev: any) => {
                    setUserName(ev.target.value);
                  }}
                  id="userName"
                  type="userName"
                  value={userName}
                ></Input>
              )}
              {/* E-mail input */}
              <Input
                Label="E-mail"
                onChange={(ev: any) => {
                  setEmail(ev.target.value);
                }}
                id="email"
                type="email"
                value={email}
              ></Input>
              {/* Password Input */}
              <Input
                Label="Password"
                onChange={(ev: any) => {
                  setPassword(ev.target.value);
                }}
                id="password"
                type="password"
                value={password}
              ></Input>
              <button className="bg-red-600 py-3 text-white rounded-md w-full hover:bg-red-700 transition">
                {varient === 'login'? 'Sign in': 'Sign up'}
              </button>
              <p className="text-neutral-500 mt-8">
                {varient==='login' ? "First time usning Netflix?" : "Already have an account"}
                <span
                  onClick={toggleVarient}
                  className="text-white ml-1 hover:underline cursor-pointer"
                >
                  {varient === "login"? 'Create an account': 'Login to existing account'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
