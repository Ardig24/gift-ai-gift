
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-display font-bold heading-gradient">GiftedAI</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#why-gift-ai" className="text-foreground/80 hover:text-primary transition-colors">
              Why GiftedAI
            </a>
            <a href="#signup" className="text-foreground/80 hover:text-primary transition-colors">
              Get Early Access
            </a>
            <Button size="sm" className="ml-4 hover-lift">
              Sign Up
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="p-2 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            'md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg transition-all duration-300 overflow-hidden',
            isOpen ? 'max-h-[300px] border-b border-slate-200' : 'max-h-0'
          )}
        >
          <div className="px-6 py-4 space-y-4">
            <a
              href="#how-it-works"
              className="block py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#why-gift-ai"
              className="block py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Why GiftedAI
            </a>
            <a
              href="#signup"
              className="block py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get Early Access
            </a>
            <Button className="w-full hover-lift" onClick={() => setIsOpen(false)}>
              Sign Up
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
