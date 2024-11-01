"use client";
import { fetchN } from "../fetchdata";
import ActionButton from "../components/actionButton";
import { TextEffect } from "../components/core/text-effect";
import { AppleStyleDock } from "../components/navbar";
import { TextMorphInput } from "../components/input";
import ButtonDesign from "../components/button";

// export default async function Home({params,}:{params:Promise<{slug:string}>}) {
  export default  function Home() {
  // const slug = (await params).slug
  const data = fetchN();
  console.log(data);

  // Extract the database ID if data is available
  let databaseId = null;
  // if (Array.isArray(data) && data.length > 0) {
    // databaseId = data[0].parent.id;
  // }

  console.log("Database ID:", databaseId); // Log the database ID

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
      <div className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
        <TextEffect per="char" preset="fade">
         {/* {slug} */}
         red
        </TextEffect>
      </div>
      <div className="flex items-center space-x-4">
        <TextMorphInput />
        <ButtonDesign />
    </div>
    </div>
  );
}
