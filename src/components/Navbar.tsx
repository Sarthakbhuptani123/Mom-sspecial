import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";
import { lunchMenu, dinnerMenu } from "@/data/menuData";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const location = useLocation();

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = days[new Date().getDay()];
  const todaysLunch = lunchMenu.find((m) => m.day === today);
  const todaysDinner = dinnerMenu.find((m) => m.day === today);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-primary text-primary-foreground text-center text-sm font-medium py-2 px-4 relative z-[60]"
          >
            <span>
              🎉 Today's Special: <strong>{todaysLunch?.sabji}</strong> (Lunch) & <strong>{todaysDinner?.sabji}</strong> (Dinner)
            </span>
            <button
              onClick={() => setShowBanner(false)}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <XCircle className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !showBanner
          ? "top-0"
          : showBanner ? "top-[36px]" : "top-0"
          } ${isScrolled || isOpen
            ? "bg-background shadow-md"
            : "bg-transparent"
          }`}
        style={{
          marginTop: showBanner && !isScrolled ? 0 : 0
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl">🍱</span>
              <span className="text-xl md:text-2xl font-bold text-primary">
                Mom's Special
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground/80"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <ModeToggle />
              <Button variant="outline" size="sm" asChild>
                <a href="tel:+917436059291">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <ModeToggle />
              <button
                className="p-2 text-foreground"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <div className="flex flex-col gap-4 py-6 px-2 bg-background/95 backdrop-blur-sm rounded-b-2xl shadow-xl border-t border-border/50">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium py-2 px-4 rounded-lg transition-colors hover:bg-accent ${location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-foreground/80"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border mt-2">
                <Button variant="whatsapp" className="w-full justify-center" asChild>
                  <a
                    href="https://wa.me/917436059291?text=Hello,%20I%20am%20interested%20in%20your%20tiffin%20service.%0AArea:%0AMeal%20type:"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-2">💬</span> WhatsApp Us
                  </a>
                </Button>
                <Button variant="default" className="w-full justify-center bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <a href="tel:+917436059291">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
