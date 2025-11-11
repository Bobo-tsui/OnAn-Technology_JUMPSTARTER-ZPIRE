import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_NAME } from "@/const";

interface MobileMenuProps {
  sections: { id: string; label: string }[];
}

export default function MobileMenu({ sections }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-primary" style={{fontSize: '24px'}}>{COMPANY_NAME}</h1>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="touch-manipulation"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <nav className="container pt-24 px-4">
            <ul className="space-y-4">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className="w-full text-left py-3 px-4 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors touch-manipulation"
                    style={{fontSize: '20px', fontWeight: '500', fontFamily: '"Playfair Display", Georgia, serif'}}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
