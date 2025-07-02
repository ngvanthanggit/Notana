// src/hooks/useAuth.ts
import { useEffect, useState } from "react";

export function useAuth() {
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    // Simulate fetching user from localStorage
    const storedUser = localStorage.getItem("nortana-user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (name: string) => {
    const newUser = { name };
    localStorage.setItem("nortana-user", JSON.stringify(newUser));
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem("nortana-user");
    setUser(null);
  };

  return { user, login, logout };
}
