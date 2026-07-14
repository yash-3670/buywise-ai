import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
        <ShoppingBag size={20} />
      </div>

      <div>
        <h1 className="text-xl font-bold tracking-tight text-white">
          BuyWise AI
        </h1>

        <p className="text-xs text-slate-400">
          Buy Smarter
        </p>
      </div>
    </Link>
  );
}