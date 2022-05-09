import React from 'react';
import { LandingPage } from '../components/landingPage/LandingPage';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './dashboard';

const HomePage = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) return <h1>Loading...</h1>;
  if (user) return <Dashboard />;
  return <LandingPage />;
};

export default HomePage;
