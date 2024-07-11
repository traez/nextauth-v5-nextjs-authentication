"use client";
import { useState } from "react";
import { doCredentialLogin } from "@/utils/actions";

const CredentialsLogin = () => {
  const [error, setError] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);

      const response = await doCredentialLogin(formData);

      if (response && response.error) {
        console.error(response.error);
        setError(response.error.message);
      } else {
        console.log("Login successful");
        setError("");
      }
    } catch (e) {
      console.error(e);
      setError("Check your Credentials");
    }
  }

  return (
    <>
      <div className="text-xl text-red-500">{error}</div>
      <form
        className="my-5 flex flex-col items-center border p-3 border-gray-200 rounded-md"
        onSubmit={onSubmit}
      >
        <div className="my-2">
          <label htmlFor="email">Email Address</label>
          <input
            className="border mx-2 border-gray-500 rounded"
            type="email"
            name="email"
            id="email"
          />
        </div>

        <div className="my-2">
          <label htmlFor="password">Password</label>
          <input
            className="border mx-2 border-gray-500 rounded"
            type="password"
            name="password"
            id="password"
          />
        </div>

        <button
          type="submit"
          className="bg-orange-300 p-1 m-1 text-lg rounded-md flex flex-row justify-center items-center w-44 hover:text-white"
        >
          Credentials Login
        </button>
      </form>
    </>
  );
};

export default CredentialsLogin;
