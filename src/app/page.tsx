"use client";
import { page } from "./fetchdata";

export default function Home() {
  return <button onClick={page}>Activate API</button>;
}
