import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
interface PageWrapperProps {
  children: ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  withContainer?: boolean;
  sectionSpacing?: boolean;
}

export default function PageWrapper({
  children,
  className,
  sectionSpacing = true,
}: PageWrapperProps) {
  return (
    <div
      className={cn(
        'min-h-screen w-full',
        sectionSpacing && 'py-8 sm:py-12 lg:py-16',
        className
      )}
    >
      {children}
    </div>
  );
}
