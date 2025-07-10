// src/hooks/useAuth.ts
import { useEffect, useState } from "react";

export function useAuth() {
  const [user, setUser] = useState<{ email: string; password: string; name: string } | null>(null);

  useEffect(() => {
    // Simulate fetching user from localStorage
    const storedUser = localStorage.getItem("mock-user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (email: string, password: string, name: string) => {
    const newUser = { email, password, name };
    localStorage.setItem("mock-user", JSON.stringify(newUser));
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem("mock-user");
    setUser(null);
  };

  return { user, login, logout };
}
