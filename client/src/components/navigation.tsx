import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Bird } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Solution", href: "#solution" },
    { name: "Features", href: "#features" },
    { name: "Industries", href: "#industries" },
    { name: "Pricing", href: "#pricing" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Bird className="text-rooster-red h-8 w-8 mr-2" />
              <span className="text-xl font-bold text-gray-900">
                Rooster Print & Mail
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-600 hover:text-rooster-red px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("#demo")}
                className="bg-rooster-red hover:bg-rooster-red-dark"
              >
                Request Demo
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-gray-600 hover:text-rooster-red px-3 py-2 text-sm font-medium transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                  <Button
                    onClick={() => scrollToSection("#demo")}
                    className="bg-rooster-red hover:bg-rooster-red-dark mt-4"
                  >
                    Request Demo
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
