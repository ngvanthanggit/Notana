'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateAccountPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const router = useRouter();

  function handleCreateAccount(e: React.FormEvent) {
    e.preventDefault();
    // Handle account creation here (e.g., save to local storage, backend call, etc.)
    alert('Account created successfully!');
    router.push('/signin');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FBFD] px-4">
      <div className="w-full max-w-md bg-white shadow rounded-lg p-8 space-y-6">
        <h1 className="text-2xl font-bold text-center text-violet-600">Nortana</h1>
        <p className="text-center text-lg font-semibold text-gray-900">Create your account</p>
        <p className="text-center text-sm text-gray-500">
          Or{' '}
          <a href="/signin" className="text-violet-600 hover:underline font-medium">
            sign in to existing account
          </a>
        </p>

        <form onSubmit={handleCreateAccount} className="space-y-4">
          <div className="text-left">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full name
            </label>
            <input
              id="fullName"
              type="text"
              required
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div className="text-left">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              I am a...
            </label>
            <select
              id="role"
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              <option value="" disabled>Select your role</option>
              <option value="leader">Leader</option>
              <option value="member">Member</option>
            </select>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <label className="flex items-center gap-2 text-gray-700">
              <input type="checkbox" className="rounded border-gray-300" />
              I agree to the{' '}
              <a href="#" className="text-violet-600 hover:underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-violet-600 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-violet-600 text-white py-2 rounded hover:bg-violet-700 transition"
          >
            Create account
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
