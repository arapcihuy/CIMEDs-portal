import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Globe, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/team", label: "Tim Peneliti" },
    { href: "/products", label: "Produk" },
    { href: "/research", label: "Penelitian" },
    { href: "/publications", label: "Publikasi" },
    { href: "/services", label: "Layanan Lab" },
    { href: "/news", label: "Berita" },
    { href: "/partnership", label: "Kerjasama" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-gray-200 shadow-sm py-2"
          : "bg-transparent border-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
              C
            </div>
            <div className="flex flex-col">
              <span className={cn("font-bold text-lg leading-none transition-colors", isScrolled ? "text-primary" : "text-white")}>
                CIMEDs UGM
              </span>
              <span className={cn("text-xs font-medium tracking-wider", isScrolled ? "text-gray-600" : "text-gray-200")}>
                Pusat Riset Biomedis
              </span>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href}>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-white/10 hover:text-primary data-[active]:bg-white/20",
                        location === link.href && "text-primary font-semibold",
                        !isScrolled && "text-white hover:text-white"
                      )}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2 border-l pl-6 border-gray-200/20">
            <Button
              variant="ghost"
              size="icon"
              className={cn("rounded-full", !isScrolled && "text-white hover:bg-white/10")}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={cn("gap-2", !isScrolled && "text-white hover:bg-white/10")}
            >
              <Globe className="h-4 w-4" />
              <span>EN</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={!isScrolled ? "text-white" : ""}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary",
                        location === link.href ? "text-primary" : "text-gray-600"
                      )}
                    >
                      {link.label}
                    </a>
                  </Link>
                ))}
                <div className="h-px bg-gray-100 my-2" />
                <Button variant="outline" className="justify-start gap-2">
                  <Globe className="h-4 w-4" /> Switch to English
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
