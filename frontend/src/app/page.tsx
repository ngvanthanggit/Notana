"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function LandingPage() {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.6 });
  const { ref: featuresRef, inView: featuresInView } = useInView({
    threshold: 0.5,
  });

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-violet-600">Nortana</div>
        <div className="flex items-center gap-4">
          <button className="text-sm text-gray-600 hover:text-violet-500 transition">
            Light/Dark
          </button>
          <a
            href="/signin"
            className="text-sm text-gray-700 hover:text-violet-600 transition"
          >
            Sign In
          </a>
          <a
            href="/signup"
            className="bg-violet-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-violet-600 active:scale-95 transition-transform shadow"
          >
            Sign Up
          </a>
        </div>
      </nav>

      {/* Scroll container for sections */}
      <main className="pt-20 pb-12 h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative snap-start h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center opacity-25 "
            aria-hidden="true"
          />

          {/* Foreground content */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1.0 }}
            className="text-5xl font-extrabold mb-6 z-10"
          >
            Task Management <span className="text-violet-600">Made Simple</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-2xl text-gray-600 text-lg mb-10 z-10"
          >
            Built for university students and startup teams. Collaborate in
            real-time, organize tasks with smart Kanban boards, and boost your
            team’s productivity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.0 }}
            className="flex gap-4 z-10"
          >
            <a
              href="/signup"
              className="bg-violet-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-violet-600 active:scale-95 transition shadow"
            >
              Get Started Free
            </a>
            <button className="border border-gray-300 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 active:scale-95 transition">
              Watch Demo
            </button>
          </motion.div>
        </section>

        {/* Features Section */}
        <section
          ref={featuresRef}
          className="relative snap-start h-screen bg-gray-50 flex flex-col items-center justify-center px-6 text-center overflow-hidden"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-[url('/background2.png')] bg-cover bg-center opacity-20"
            aria-hidden="true"
          />

          {/* Foreground content */}
          <div className="z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Everything you need to stay organized
              </h2>
              <p className="max-w-xl mx-auto text-gray-600 mb-12 text-base">
                From simple task tracking to complex project management, Nortana
                adapts to your team’s workflow.
              </p>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
              initial={{ opacity: 0 }}
              animate={featuresInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.3 }}
            >
              {[
                {
                  icon: "📋",
                  title: "Kanban Boards",
                  desc: "Visualize your workflow with drag-and-drop Kanban boards.",
                },
                {
                  icon: "👥",
                  title: "Team Collaboration",
                  desc: "Real-time collaboration with role-based permissions.",
                },
                {
                  icon: "🤖",
                  title: "AI-Powered Insights",
                  desc: "Smart prioritization and deadline prediction (coming soon).",
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
                >
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer - outside scroll container */}

      <footer className="fixed bottom-0 left-0 w-full h-12 bg-white border-t border-gray-200 text-center text-sm text-gray-500 flex items-center justify-center z-40">
        <p>© {new Date().getFullYear()} Nortana. All rights reserved.</p>
      </footer>
    </>
  );
}
