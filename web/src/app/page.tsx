import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-12 bg-linear-to-br from-orange-50 via-white to-violet-50 dark:from-orange-950/20 dark:via-background dark:to-violet-950/20">
      <h1 className="text-7xl font-bold tracking-tight text-foreground drop-shadow-[0_0_25px_rgba(245,158,11,0.4)] sm:text-8xl md:text-9xl">
        Polymobilier
      </h1>
      <Button size="lg" asChild>
        <a href="/login">Se connecter</a>
      </Button>
    </div>
  );
}
