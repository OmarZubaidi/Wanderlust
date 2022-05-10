import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Auth0Provider } from '@auth0/auth0-react';
import { Layout } from '../components/Layout';
import HomePage from './home';

const Home: NextPage = ({ domain_env, clientId_env }: any) => {
  const router = useRouter();

  // TODO search by email if no user is found
  // TODO post request (user)

  return <HomePage />;
};

export const getStaticProps = () => {
  return {
    props: {
      domain_env: process.env.DOMAIN,
      clientId_env: process.env.CLIENT_ID,
    },
  };
};

export default Home;
