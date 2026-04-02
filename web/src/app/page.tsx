import { Button } from "@/components/ui/button";
import { withAuth, getSignInUrl, signOut } from "@workos-inc/authkit-nextjs";

export default async function Home() {
  const { user } = await withAuth();

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-12 bg-linear-to-br from-orange-50 via-white to-violet-50 dark:from-orange-950/20 dark:via-background dark:to-violet-950/20">
      <h1 className="text-7xl font-bold tracking-tight text-foreground drop-shadow-[0_0_25px_rgba(245,158,11,0.4)] sm:text-8xl md:text-9xl">
        Polymobilier
      </h1>

      {user ? (
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg text-muted-foreground">
            Bienvenue, {user.firstName || user.email}
          </p>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button size="lg" variant="outline" type="submit">
              Se deconnecter
            </Button>
          </form>
        </div>
      ) : (
        <Button size="lg" asChild>
          <a href={await getSignInUrl()}>Se connecter</a>
        </Button>
      )}
    </div>
  );
}
