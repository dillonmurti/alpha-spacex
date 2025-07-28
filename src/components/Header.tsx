import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigationItems = [
    { name: "The Program", hasDropdown: true, url: "https://alpha.school/the-program/" },
    { name: "Admission", hasDropdown: false, url: "https://alpha.school/admission/" },
    { name: "Locations", hasDropdown: true, url: "https://alpha.school/locations/" },
    { name: "Events", hasDropdown: false, url: "https://alpha.school/programs-events/" },
    { name: "Resources", hasDropdown: true, url: "https://alpha.school/faq/" },
    { name: "Insights", hasDropdown: true, url: "https://alpha.school/blog/" },
  ];

  return (
    <header className="w-full absolute top-0 left-0 z-50 px-6 py-4">
      {/* Translucent Blue Overlay */}
      <div className="absolute inset-0 bg-[#0000ef] bg-opacity-50"></div>
      
      <div className="relative flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src="/lovable-uploads/33c6a67e-59a0-4b24-b828-812135b12661.png"
              alt="Alpha Plain White Logo"
              className="h-10 w-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <div key={item.name} className="relative group">
              <a href={item.url} className="flex items-center gap-1 text-white hover:text-white transition-colors duration-200 text-sm font-medium">
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown className="w-4 h-4 text-white group-hover:text-white transition-colors duration-200" />
                )}
              </a>
            </div>
          ))}
        </nav>

        {/* Desktop Learn More Button */}
        <div className="hidden md:flex flex-shrink-0">
          <Button asChild variant="outline" className="rounded-full border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-200">
            <a href="https://alpha.school/learn-more/">Learn More</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="outline"
            size="sm"
            className="border-white text-white bg-transparent hover:bg-white hover:text-black p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0000ef] bg-opacity-95 border-t border-white/20">
          <nav className="px-6 py-4 space-y-4">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <a 
                  href={item.url} 
                  className="flex items-center gap-1 text-white hover:text-white/80 transition-colors duration-200 text-sm font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 text-white" />
                  )}
                </a>
              </div>
            ))}
            <div className="pt-4 border-t border-white/20">
              <Button asChild variant="outline" className="w-full rounded-full border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-200">
                <a href="https://alpha.school/learn-more/" onClick={() => setIsMobileMenuOpen(false)}>Learn More</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;