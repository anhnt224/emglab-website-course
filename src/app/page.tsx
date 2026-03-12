"use client";

import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const products = ["Táo", "chuối", "Cam"];

  return (
    <div className="h-screen w-full bg-white dark:bg-black">
      <ThemeToggle />
      <ul className="list-disc">
        {products.map((p) => (
          <li className="text-3xl font-bold text-red-700" key={p}>
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
