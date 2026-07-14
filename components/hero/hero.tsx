import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Container } from "@/components/ui/Container";

const examples = [
  "Best laptop under ₹80,000",
  "Compare iPhone 16 vs Galaxy S26",
  "Paste Amazon product URL",
  "Should I buy now or wait?",
];

export function Hero() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="mb-6 flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            <Sparkles className="h-4 w-4" />
            AI Powered Shopping Assistant
          </div>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl">
            Buy Smarter.
            <br />
            Save More.
            <br />
            Decide Better.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            Compare products, summarize thousands of reviews,
            track prices and make confident buying decisions
            using AI.
          </p>

          <div className="mt-12 flex w-full max-w-3xl gap-3">
            <Input
              placeholder="Ask anything or paste a product link..."
              className="h-14 rounded-xl border-slate-700 bg-slate-900 text-lg"
            />

            <Button className="h-14 rounded-xl px-8">
              Analyze
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {examples.map((example) => (
              <button
                key={example}
                className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-blue-500 hover:text-white"
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}