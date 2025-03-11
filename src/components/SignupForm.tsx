
import React, { useState } from 'react';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FadeIn } from '@/components/Animations';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight, Check } from 'lucide-react';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Thank you for signing up!",
        description: "We'll notify you when we launch.",
      });
    }, 1500);
  };

  return (
    <section id="signup" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-70 translate-y-1/3 translate-x-1/4" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl opacity-70 -translate-y-1/3 -translate-x-1/4" />
      </div>
      
      <Container>
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Be The First
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Be the First to <span className="heading-gradient">Gift AI</span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Sign up for updates and early access to GiftedAI. Get notified when we launch 
              and unlock exclusive launch perks!
            </p>
          </FadeIn>
          
          <FadeIn
            delay={200}
            className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">You're on the list!</h3>
                <p className="text-foreground/70 mb-6">
                  Thank you for signing up. We'll notify you when we launch with special early access perks.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10">
                <div className="flex flex-col md:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 py-6 px-4 text-base"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button 
                    type="submit" 
                    className="hover-lift px-8 py-6 text-base font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Processing..."
                    ) : (
                      <>
                        <span>Join Now</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
                
                <p className="text-sm text-foreground/60 mt-4">
                  By signing up, you'll be the first to know when we launch and receive exclusive perks.
                  We respect your privacy and will never share your information.
                </p>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <span className="font-semibold text-primary">1</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Early Access</h4>
                      <p className="text-sm text-foreground/70">Be among the first to use our platform</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <span className="font-semibold text-primary">2</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Launch Discount</h4>
                      <p className="text-sm text-foreground/70">Special pricing for early subscribers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <span className="font-semibold text-primary">3</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Priority Support</h4>
                      <p className="text-sm text-foreground/70">Get help from our team faster</p>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

export default SignupForm;
