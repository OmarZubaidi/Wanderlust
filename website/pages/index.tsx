import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { LandingPage } from '../components/landingPage/LandingPage';
import styles from '../styles/Home.module.css';
import { logged } from '../mockAuth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (logged) router.push('/dashboard');
  }, [logged]);

  return <LandingPage />;
  // TODO logged logic to redirect to /dashboard/map/:tripId or /dashboard
};

export default Home;
