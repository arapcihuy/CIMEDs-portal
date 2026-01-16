import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Globe, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useLanguageStore } from "@/lib/languageStore";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const { language, setLanguage, t } = useLanguageStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t("Beranda", "Home") },
    { href: "/team", label: t("Tim", "Team") },
    { href: "/products", label: t("Produk", "Products") },
    { href: "/research", label: t("Riset", "Research") },
    { href: "/publications", label: t("Publikasi", "Publications") },
    { href: "/services", label: t("Layanan", "Services") },
    { href: "/news", label: t("Berita", "News") },
    { href: "/partnership", label: t("Kerjasama", "Partnership") },
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
                {t("Pusat Riset Biomedis", "Biomedical Research Center")}
              </span>
            </div>
          </a>
        </Link>

        <div className="hidden lg:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href}>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-white/10 hover:text-primary",
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

          <div className="flex items-center gap-2 border-l pl-4 border-gray-200/20">
            <Button
              variant="ghost"
              size="sm"
              className={cn("gap-2", !isScrolled && "text-white hover:bg-white/10")}
              onClick={() => setLanguage(language === 'ID' ? 'EN' : 'ID')}
            >
              <Globe className="h-4 w-4" />
              <span>{language}</span>
            </Button>
          </div>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className={cn(!isScrolled && "text-white")}
            onClick={() => setLanguage(language === 'ID' ? 'EN' : 'ID')}
          >
            {language}
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={!isScrolled ? "text-white" : ""}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-4 mt-10">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a className={cn("text-lg font-medium", location === link.href ? "text-primary" : "text-gray-600")}>
                      {link.label}
                    </a>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
