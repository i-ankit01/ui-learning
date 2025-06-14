import { cn } from "@/lib/utils";
import { HeroSection } from "@/components/HeroSection";
import { NavbarDemo } from "@/components/NavbarDemo";
import Socials from "@/components/Socials";
import CursorLight from "@/components/CursorLight";
export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div className="fixed flex h-[50rem]  w-full items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      </div>
      <NavbarDemo />
      <Socials />
      <div></div>
    </main>
  );
}
