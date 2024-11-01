"use client";
import { useState } from "react"; // Import useState
import { TextMorph } from "./core/text-morph";
import { page } from "../fetchdata";

export default function Home() {
  const [clicked, setClicked] = useState(false); // State to track button click
  const text = clicked ? "Sent!" : "Send"; // Button text

  const handleClick = () => {
    setClicked(!clicked); // Toggle clicked state
    page();
  };

  return (
    <button
      onClick={handleClick}
      className={`flex h-10 w-[120px] flex-shrink-0 items-center justify-center rounded-full px-4 text-base font-medium shadow-sm transition-colors ${
        clicked
          ? "bg-green-500 text-white"
          : "bg-black text-zinc-50 hover:bg-zinc-800"
      } dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200`}
    >
      <TextMorph>{text}</TextMorph>
    </button>
  );
}
