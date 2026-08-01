"use client";

import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Navbar />

      <main className="login-page">
        <div className="login-box">

          <h1>Welcome Back</h1>

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button className="login-btn">
            Login
          </button>

          <p>
            Don't have an account?{" "}
            <Link href="/signup">
              Sign Up
            </Link>
          </p>

        </div>
      </main>
    </>
  );
}