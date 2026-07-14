import { Sparkles } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SearchBox } from "@/components/search/search-box";

export function Hero() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <div className="mb-6 flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            <Sparkles className="h-4 w-4" />
            AI Powered Shopping Assistant
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
            Buy Smarter.
            <br />
            Save More.
            <br />
            Decide Better.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            Compare products, summarize thousands of reviews,
            track prices and make confident buying decisions using AI.
          </p>

          <div className="mt-12 w-full">
            <SearchBox />
          </div>
        </div>
      </Container>
    </section>
  );
}