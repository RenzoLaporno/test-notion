import { fetchN, page } from "@/app/fetchdata";

import { TextEffect } from "@/app/components/core/text-effect";
import { AppleStyleDock } from "@/app/components/navbar";
import { TextMorphInput } from "@/app/components/input";
import ButtonDesign from "@/app/components/button";

export default async function Home({
  params,
}: {
  params: Promise<{ input: string }>;
}) {
  // export default function Home() {
  const slug = (await params).input;
  const data = fetchN();
  console.log(fetchN());

  // Extract the database ID if data is available
  // if (Array.isArray(data) && data.length > 0) {
  // databaseId = data[0].parent.id;
  // }


  const handleClick = () => {
    page();
  };
  
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
          {slug}
        </TextEffect>
      </div>
      <div className="flex items-center space-x-4">
        <TextMorphInput />
        <ButtonDesign label={"Sent"} />
      </div>
      <div className="pt-3">
        {" "}
        <ButtonDesign label={"Edit"} />
      </div>
    </div>
  );
}
