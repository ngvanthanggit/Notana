'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  function handleMockLogin(e: React.FormEvent) {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('mock-user') || '{}');

    if (storedUser.email === email && storedUser.password === password) {
      localStorage.setItem('mock-session', JSON.stringify({ email }));
      router.push('/projects');
    } else {
      alert('Invalid email or password.');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FBFD] px-4">
      <div className="w-full max-w-md bg-white shadow rounded-lg p-8 space-y-6">
        <h1 className="text-2xl font-bold text-center text-violet-600">Nortana</h1>
        <p className="text-center text-lg font-semibold text-gray-900">Sign in to your account</p>
        <p className="text-center text-sm text-gray-500">
          Or{' '}
          <a href="/signup" className="text-violet-600 hover:underline font-medium">
            create a new account
          </a>
        </p>

        <form onSubmit={handleMockLogin} className="space-y-4">
          <div className="text-left">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div className="text-left">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-700">
              <input type="checkbox" className="rounded border-gray-300" />
              Remember me
            </label>
            <a href="#" className="text-violet-600 hover:underline">
              Forgot your password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-violet-600 text-white py-2 rounded hover:bg-violet-700 transition"
          >
            Sign in
          </button>
        </form>

        <a
          href="/"
          className="text-sm text-violet-600 hover:underline inline-flex items-center justify-center"
        >
          ← Back to home
        </a>
      </div>
    </div>
  );
}
