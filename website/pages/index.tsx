import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { LandingPage } from '../src/components/landingPage/LandingPage';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return <LandingPage />;
};

export default Home;
