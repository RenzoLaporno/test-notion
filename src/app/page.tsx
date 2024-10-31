"use client";

import React, { useEffect, useState } from "react";
import { fetchN, page } from "./fetchdata";

export default function Home() {
  // const [red, setRed] = useState(null);

  // useEffect(() => {
  //   Page().then(setRed).catch(console.error);
  // }, []);

  // const fetchData = async () => {
  //   const data = await page(); // Await the promise
  //   const districtCodes = data.districts.map(
  //     (district: { district_code: any; }) => district.district_code
  //   );

  //   console.log(districtCodes);
  // };
  // fetchData();

  // fetchN();

  return <button onClick={page}>Activate API</button>;
}
