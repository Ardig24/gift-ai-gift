
import React from 'react';
import Container from '@/components/ui/Container';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-foreground/70 hover:text-primary transition-colors"
  >
    {children}
  </a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 border-t border-border/40">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <span className="text-2xl font-display font-bold heading-gradient">GiftedAI</span>
            </div>
            <p className="text-foreground/70">
              Where Innovation Meets Thoughtful Gifting
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border/20 text-center text-sm text-foreground/60">
          <p>&copy; {currentYear} GiftedAI. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
