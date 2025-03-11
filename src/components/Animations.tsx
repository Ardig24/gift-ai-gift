
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  threshold?: number;
  duration?: number;
  as?: React.ElementType;
}

export const FadeIn = ({
  children,
  className,
  direction = 'up',
  delay = 0,
  threshold = 0.1,
  duration = 700,
  as: Component = 'div',
}: FadeInProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100');
              if (direction === 'up') entry.target.classList.add('translate-y-0');
              if (direction === 'down') entry.target.classList.add('translate-y-0');
              if (direction === 'left') entry.target.classList.add('translate-x-0');
              if (direction === 'right') entry.target.classList.add('translate-x-0');
              if (direction === 'none') entry.target.classList.add('scale-100');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, direction, threshold]);

  return (
    <Component
      ref={ref}
      className={cn(
        'opacity-0 transition-all',
        {
          'translate-y-4': direction === 'up',
          '-translate-y-4': direction === 'down',
          '-translate-x-4': direction === 'left',
          'translate-x-4': direction === 'right',
          'scale-95': direction === 'none',
        },
        className
      )}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </Component>
  );
};

interface StaggeredChildrenProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  as?: React.ElementType;
}

export const StaggeredChildren = ({
  children,
  className,
  staggerDelay = 100,
  as: Component = 'div',
}: StaggeredChildrenProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const childElements = Array.from(entry.target.children);
            childElements.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-fade-in');
              }, index * staggerDelay);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [staggerDelay]);

  return (
    <Component ref={ref} className={className}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement, {
            className: cn('opacity-0', (child as React.ReactElement).props.className),
          });
        }
        return child;
      })}
    </Component>
  );
};
