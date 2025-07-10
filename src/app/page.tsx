"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/result");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md rounded-lg border p-8 shadow-md bg-white"
      >
        <h1
          className="text-2xl font-bold text-red-600 mb-8 text-center"
          style={{ textDecoration: "underline", textDecorationColor: "#2563eb" }}
        >
          BITSAT COUNSELLING ITERATION - 1 SEAT ALLOTMENT
        </h1>
        <div className="mb-6">
          <label htmlFor="login-id" className="mb-2 block text-gray-700 font-medium">
            Login ID
          </label>
          <input
            id="login-id"
            value={loginId}
            onChange={e => setLoginId(e.target.value)}
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="mb-2 block text-gray-700 font-medium">
            Password
          </label>
          <input
            id="password"
            value={password}
            type="password"
            onChange={e => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full rounded bg-green-600 px-4 py-2 font-bold text-white hover:bg-green-700 transition"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
