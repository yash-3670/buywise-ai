"use client";

import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const suggestions = [
  "Best laptop under ₹80,000",
  "Compare iPhone 16 vs Galaxy S26",
  "Paste Amazon product URL",
  "Should I buy now or wait?",
];

export function SearchBox() {
  return (
    <div className="mx-auto w-full max-w-4xl rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl backdrop-blur">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />

        <Input
          placeholder="Ask anything or paste a product link..."
          className="h-14 border-0 bg-transparent pl-12 text-lg shadow-none focus-visible:ring-0"
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {suggestions.map((item) => (
          <button
            key={item}
            className="rounded-full border border-slate-700 px-3 py-1.5 text-sm text-slate-300 transition hover:border-blue-500 hover:text-white"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-slate-500">
          Supports Amazon, Flipkart & natural language queries.
        </p>

        <Button size="lg">
          Analyze Product
        </Button>
      </div>
    </div>
  );
}