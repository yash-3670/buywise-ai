import { Logo } from "@/components/common/Logo";
import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Container className="py-20">
        <Logo />
      </Container>
    </main>
  );
}