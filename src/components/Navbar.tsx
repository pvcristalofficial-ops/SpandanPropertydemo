import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Building2, Briefcase, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: Building2 },
    { name: "Services", path: "/services", icon: Briefcase },
    { name: "Properties", path: "/properties", icon: Building2 },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
         {/* Logo */}
          {/* <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <Building2 className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">Spandan Property</span>
              <span className="text-xs text-muted-foreground">Trusted Real Estate Partner</span>
            </div>
          </Link>*/}
        <Link to="/" className="flex items-center space-x-3 group">
  <div className="w-12 h-12 rounded-lg overflow-hidden">
    <img 
      src="/public/logo.png" 
      alt="Spandan Property Logo" 
      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
    />
  </div>

  <div className="flex flex-col">
    <span className="text-xl font-bold text-primary">Spandan Property</span>
    <span className="text-xs text-muted-foreground">Trusted Real Estate Partner</span>
  </div>
</Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-all ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-foreground hover:bg-secondary hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="ml-4 bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent">
              <Link to="/contact">Book Free Visit</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
            <Button asChild className="w-full bg-gradient-to-r from-accent to-accent/90">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Book Free Visit
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
