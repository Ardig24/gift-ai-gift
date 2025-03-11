
import React from 'react';
import Container from '@/components/ui/Container';
import { FadeIn, StaggeredChildren } from '@/components/Animations';
import { Package, Mail, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    id: 1,
    title: 'Choose an AI membership',
    description: 'Select from popular options like ChatGPT Plus, Claude Pro, and more.',
    icon: Bot,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    id: 2,
    title: 'Enter their email or get a gift code',
    description: 'Send directly to their inbox or get a unique code to share yourself.',
    icon: Mail,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 3,
    title: 'They enjoy instant access',
    description: 'Recipients get immediate access to cutting-edge AI capabilities.',
    icon: Package,
    color: 'from-purple-500 to-pink-500',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <FadeIn as="span" className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
            Simple Process
          </FadeIn>
          <FadeIn as="h2" className="text-3xl md:text-4xl font-display font-bold mb-6">
            Simple Gifting in <span className="heading-gradient">3 Steps</span>
          </FadeIn>
          <FadeIn className="max-w-2xl mx-auto text-foreground/70 text-lg">
            Our streamlined process makes gifting AI memberships as easy as sending an email.
            No technical knowledge required.
          </FadeIn>
        </div>

        <StaggeredChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="glass-card hover-lift rounded-xl p-6 lg:p-8 text-center md:text-left relative"
            >
              <div className={cn(
                "w-16 h-16 rounded-xl mb-6 flex items-center justify-center mx-auto md:mx-0",
                "bg-gradient-to-br shadow-lg",
                step.color
              )}>
                <step.icon size={28} className="text-white" />
              </div>
              
              <div className="absolute -right-3 -top-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                {step.id}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-foreground/70">{step.description}</p>
            </div>
          ))}
        </StaggeredChildren>
        
        <div className="mt-16 glass-card rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
          
          <FadeIn className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-lg">
              <h3 className="text-2xl font-bold mb-3">Ready to try it out?</h3>
              <p className="text-foreground/70">
                Join our early access program and be among the first to gift the power of AI to your friends and loved ones.
              </p>
            </div>
            
            <a 
              href="#signup" 
              className="px-6 py-3 inline-flex items-center font-medium bg-primary text-white rounded-lg hover-lift transition-all"
            >
              Get Started
            </a>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
