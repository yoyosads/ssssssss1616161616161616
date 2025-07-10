"use client";

import { useRouter } from "next/navigation";

export default function Result() {
  // function for proceed. Close tab or navigate to blank
  function onProceed() {
    if (typeof window !== "undefined") {
      window.open('about:blank', '_self');
      window.close();
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <h1
        className="text-2xl font-bold italic text-blue-600 underline mt-[-40px] mb-8 text-center"
      >
        BITSAT 2025 Iteration - 1 Result
      </h1>
      <p className="text-red-600 mb-10 font-medium max-w-xl text-center">
        Dear Vimarsh Singh, you have successfully withdrawn yourself from the counselling process and you cannot participate in further Iteration Rounds anymore.
      </p>
      <button
        onClick={onProceed}
        className="rounded bg-red-600 px-8 py-2 font-bold text-white hover:bg-red-700 transition"
      >
        Proceed
      </button>
    </main>
  );
}
