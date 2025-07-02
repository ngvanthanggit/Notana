'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleMockSignup(e: React.FormEvent) {
    e.preventDefault();
    localStorage.setItem("mock-user", JSON.stringify({ email, password }));
    alert("Account created. You can now sign in.");
    router.push("/signin");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm text-center space-y-6">
        <h1 className="text-2xl font-bold text-violet-600">Sign Up to Nortana</h1>

        <form onSubmit={handleMockSignup} className="space-y-4 text-left">
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
            Create Account
          </button>
        </form>

        <p className="text-sm text-gray-500">
          Already have an account?{" "}
          <a href="/signin" className="text-violet-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
