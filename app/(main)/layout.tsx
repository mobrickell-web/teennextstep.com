import { ReactNode } from 'react';
import MainLayout from '@/components/layout/MainLayout';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <MainLayout
      showNavbar={true}
      showFooter={true}
      containerSize="lg"
      fullWidth={true}
    >
      {children}
    </MainLayout>
  );
}