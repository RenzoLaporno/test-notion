"use client";
import { useState } from "react";
import { TextMorph } from "./core/text-morph";

export function TextMorphInput() {
  return (
    <div className="flex flex-col items-center justify-end space-y-12">
      <input
        type="text"
        className="h-9 w-full rounded-lg border border-zinc-950/10 bg-transparent p-2 text-zinc-900 placeholder-zinc-500 focus:outline-none dark:border-zinc-50/10 dark:text-white dark:placeholder-zinc-400"
        placeholder="Type your text here"
      />
    </div>
  );
}
