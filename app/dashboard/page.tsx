"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function loadUser() {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    }

    loadUser();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold">Dashboard</h1>

      {user && (
        <div className="mt-6 bg-slate-900 p-6 rounded-2xl">
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}
