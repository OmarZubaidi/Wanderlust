import React from 'react';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';
import { LandingPageHeader } from './LandingPageHeader';
import { LandingPageSections } from './LandingPageSections';

export const LandingPage: React.FC = () => {
  return (
    <main>
      <LandingPageHeader />
      <LandingPageSections />
    </main>
  );
};
