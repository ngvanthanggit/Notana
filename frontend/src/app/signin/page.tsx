'use client';

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleMockLogin(e: React.FormEvent) {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("mock-user") || "{}");

    if (storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("mock-session", JSON.stringify({ email }));
      router.push("/projects"); // or your dashboard
    } else {
      alert("Invalid email or password.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm text-center space-y-6">
        <h1 className="text-2xl font-bold text-violet-600">Sign In to Nortana</h1>

        {/* Email/Password Form */}
        <form onSubmit={handleMockLogin} className="space-y-4 text-left">
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-violet-500 text-white py-2 rounded hover:bg-violet-600 transition"
          >
            Sign in with Email
          </button>
        </form>

        <div className="relative my-4">
          <hr className="border-t" />
          <span className="absolute left-1/2 top-[-0.6rem] -translate-x-1/2 bg-white px-2 text-sm text-gray-400">
            or continue with
          </span>
        </div>

        {/* OAuth Buttons */}
        <button
          onClick={() => signIn("google")}
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
        >
          Sign in with Google
        </button>

        <button
          onClick={() => signIn("github")}
          className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition"
        >
          Sign in with GitHub
        </button>

        <p className="text-sm text-gray-500">
          Don’t have an account?{" "}
          <a href="/signup" className="text-violet-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
