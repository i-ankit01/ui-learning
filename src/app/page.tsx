
import { HeroSection } from "@/components/HeroSection";
import { NavbarDemo } from "@/components/NavbarDemo";
import Socials from "@/components/Socials";

export default function Home() {
  return (
     <main className="min-h-screen bg-black">
        <NavbarDemo/>
        <Socials/>
        <div></div>
     </main>
  );
}
