"use client";
import { page } from "./fetchdata";
import ActionButton from "./components/actionButton";
import { TextEffect } from "./components/core/text-effect";
import { AppleStyleDock } from "./components/navbar";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url('/background.jpg')`, // Update with your image filename
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header>
        <AppleStyleDock />
      </header>
      <div className="mb-4 text-4xl font-bold">
        <TextEffect per="char" preset="fade">
          Notion Test API
        </TextEffect>
      </div>
      <div>
        <ActionButton />
      </div>
    </div>
   
  );
}
