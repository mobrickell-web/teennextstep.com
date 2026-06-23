import { ReactNode, Suspense } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageWrapper from './PageWrapper';
import BackToTopButton from './BackToTopButton';

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
    <div className="flex min-h-screen w-full flex-col">
      {showNavbar && (
        <>
          <Suspense
            fallback={
              <>
                <div
                  className="fixed inset-x-0 top-0 z-50 h-[var(--site-navbar-height)] border-b border-white/10 bg-primary"
                  aria-hidden
                />
                <div className="site-navbar-spacer" aria-hidden />
              </>
            }
          >
            <Navbar />
          </Suspense>
          <div className="site-navbar-spacer" aria-hidden />
        </>
      )}

      <main className="flex-1 w-full overflow-x-hidden">
        {fullWidth ? (
          <div className="w-full">{children}</div>
        ) : (
          <PageWrapper containerSize={containerSize}>{children}</PageWrapper>
        )}
      </main>

      {showFooter && <Footer />}

      <Suspense fallback={null}>
        <BackToTopButton />
      </Suspense>
    </div>
  );
}
