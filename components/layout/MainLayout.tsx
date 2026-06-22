import { ReactNode, Suspense } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageWrapper from './PageWrapper';

interface MainLayoutProps {
  children: ReactNode;
  showNavbar?: boolean;
  showFooter?: boolean;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  fullWidth?: boolean;
}

/**
 * MainLayout - Complete layout wrapper with Navbar and Footer
 * Use this for all main pages
 */
export default function MainLayout({
  children,
  showNavbar = true,
  showFooter = true,
  containerSize = 'lg',
  fullWidth = false,
}: MainLayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      {showNavbar && (
        <Suspense fallback={<div className="h-16 shrink-0 bg-primary border-b border-white/10 lg:h-[4.5rem]" />}>
          <Navbar />
        </Suspense>
      )}

      <main className={`flex-1 w-full`}>
        {fullWidth ? (
          <div className="w-full">{children}</div>
        ) : (
          <PageWrapper containerSize={containerSize}>{children}</PageWrapper>
        )}
      </main>

      {showFooter && <Footer />}
    </div>
  );
}
