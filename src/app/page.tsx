"use client";
import { fetchN, page } from "./fetchdata";
import ActionButton from "./components/actionButton";
import { TextEffect } from "./components/core/text-effect";
import { AppleStyleDock } from "./components/navbar";
import ButtonDesign from "./components/button";

const handleClick = () => {
  // Redirect to the desired URL
  fetchN();
  // window.location.href = "/input"; // Update this URL as needed
};

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
        <ButtonDesign label={"Create"} onClick={handleClick} />
      </div>
    </div>
  );
}
