import { useDesktopCheck } from "@/hooks/use-desktop-check";

export function DesktopOnly({ children }: { children: React.ReactNode }) {
  const isDesktop = useDesktopCheck();

  if (!isDesktop) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center px-8 max-w-md">
          <h1 className="text-3xl font-bold mb-4">Desktop Only</h1>
          <p className="text-lg text-muted-foreground">
            This site is only available on desktop. Please open it on a device with a screen width of at least 1050px.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

