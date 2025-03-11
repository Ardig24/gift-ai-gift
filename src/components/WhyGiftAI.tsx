
import React from 'react';
import Container from '@/components/ui/Container';
import { FadeIn, StaggeredChildren } from '@/components/Animations';
import { Sparkles, Zap, Brain } from 'lucide-react';

const features = [
  {
    title: 'Unique & Modern',
    description: 'Stand out with a gift they won't forget — the cutting edge of technology at their fingertips.',
    icon: Sparkles,
    delay: 0,
  },
  {
    title: 'Instant Delivery',
    description: 'No shipping delays or wrapping hassle. Send via email or digital code in seconds, anywhere in the world.',
    icon: Zap,
    delay: 100,
  },
  {
    title: 'Future-Proof',
    description: 'Gift that keeps giving—unlock creativity, productivity, and future skills with advanced AI tools.',
    icon: Brain,
    delay: 200,
  },
];

const WhyGiftAI = () => {
  return (
    <section id="why-gift-ai" className="py-24 lg:py-32 bg-secondary/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      
      <Container>
        <div className="text-center mb-16">
          <FadeIn as="span" className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Benefits
          </FadeIn>
          <FadeIn as="h2" className="text-3xl md:text-4xl font-display font-bold mb-6">
            Why <span className="heading-gradient">Gift AI?</span>
          </FadeIn>
          <FadeIn className="max-w-2xl mx-auto text-foreground/70 text-lg">
            AI is transforming the way we work and create. A premium AI membership is the perfect
            gift for the forward-thinking people in your life.
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {features.map((feature, index) => (
            <FadeIn
              key={feature.title}
              delay={feature.delay}
              className="glass-card rounded-xl p-8 hover-lift"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="glass-card rounded-2xl p-8 lg:p-12 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
              <Sparkles size={36} className="text-white" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-3">The perfect gift for any occasion</h3>
              <p className="text-foreground/70 mb-6 max-w-2xl">
                Whether it's a birthday, holiday, graduation, or just because — an AI membership is a
                thoughtful gift that provides lasting value and shows you care about their growth and interests.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Birthdays</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Holidays</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Graduations</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Work Appreciation</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Special Occasions</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default WhyGiftAI;
