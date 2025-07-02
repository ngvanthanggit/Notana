// src/app/projects/[projectId]/dashboard/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/signin");
    }
  }, [user]);

  if (!user) return null; // or a loading spinner

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Project Dashboard</h1>
      {/* Task board goes here */}
    </div>
  );
}
