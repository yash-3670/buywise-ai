import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="flex h-[80vh] items-center justify-center">
        <h1 className="text-6xl font-bold">
          BuyWise AI
        </h1>
      </section>
    </main>
  );
}