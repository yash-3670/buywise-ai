import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/common/Logo";

const navigation = [
  {
    name: "Search",
    href: "/search",
  },
  {
    name: "Compare",
    href: "/compare",
  },
  {
    name: "Deals",
    href: "/deals",
  },
  {
    name: "Decision Helper",
    href: "/decision",
  },
];

export function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-950">
      <Container>
        <div className="flex h-20 items-center justify-between">

          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="ghost">
              Login
            </Button>

            <Button>
              Get Started
            </Button>
          </div>

        </div>
      </Container>
    </header>
  );
}