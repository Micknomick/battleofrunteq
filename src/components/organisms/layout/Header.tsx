import Link from "next/link";

//components
import { Nav } from "./Nav";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";

export const Header = () => {
  return(
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Mick<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex item-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Here me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
