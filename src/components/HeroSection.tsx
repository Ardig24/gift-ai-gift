
import React from 'react';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import { FadeIn } from '@/components/Animations';
import { Gift, Sparkles, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const scrollToSignup = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-16 overflow-hidden md:pb-24 md:pt-36 lg:pt-40">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/3" />
      </div>

      <Container className="relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm bg-primary/10 text-primary font-medium">
            <Sparkles size={14} />
            <span>Revolutionizing digital gifting</span>
          </div>
          
          <FadeIn as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-balance">
            Gift the Future: Send AI Memberships 
            <span className="heading-gradient"> to Anyone, Instantly</span>
          </FadeIn>
          
          <FadeIn 
            delay={200} 
            className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto text-balance"
          >
            Surprise your friends with ChatGPT Plus and more—perfect for birthdays, holidays, 
            or just because. The most thoughtful digital gift for the AI era.
          </FadeIn>
          
          <FadeIn delay={400} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="group text-md px-8 py-6 hover-lift"
              onClick={scrollToSignup}
            >
              <span>Get Early Access</span>
              <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-md px-8 py-6 hover-lift"
              asChild
            >
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </FadeIn>
          
          <FadeIn delay={600} className="mt-12 relative mx-auto max-w-2xl">
            <div className={cn(
              "relative z-10 rounded-2xl shadow-2xl overflow-hidden",
              "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/20 before:to-accent/20 before:opacity-70 before:-z-10",
            )}>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 mix-blend-overlay rounded-2xl" />
              
              <div className="glass-card rounded-2xl p-8 md:p-12 flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg animate-float">
                  <Gift size={32} className="text-primary" />
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full">
                  <div className="glass-card p-4 rounded-xl flex-1 text-left animate-pulse-subtle">
                    <p className="text-sm font-medium text-foreground/70 mb-1">Monthly Membership</p>
                    <h3 className="font-semibold">ChatGPT Plus</h3>
                  </div>
                  
                  <div className="glass-card p-4 rounded-xl flex-1 text-left">
                    <p className="text-sm font-medium text-foreground/70 mb-1">Recipient</p>
                    <h3 className="font-semibold">friend@example.com</h3>
                  </div>

                  <Button className="flex-shrink-0">Send Gift</Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
