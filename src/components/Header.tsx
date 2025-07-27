import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navigationItems = [
    { name: "The Program", hasDropdown: true },
    { name: "Admission", hasDropdown: false },
    { name: "Locations", hasDropdown: true },
    { name: "Events", hasDropdown: false },
    { name: "Resources", hasDropdown: true },
    { name: "Insights", hasDropdown: true },
  ];

  return (
    <header className="w-full bg-background px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/lovable-uploads/33c6a67e-59a0-4b24-b828-812135b12661.png"
            alt="Alpha Plain White Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <div key={item.name} className="relative group">
              <button className="flex items-center gap-1 text-white hover:text-white transition-colors duration-200 text-sm font-medium">
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown className="w-4 h-4 text-white group-hover:text-white transition-colors duration-200" />
                )}
              </button>
            </div>
          ))}
        </nav>

        {/* Learn More Button */}
        <div className="flex-shrink-0">
          <Button variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-black transition-all duration-200">
            Learn More
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;