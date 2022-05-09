import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { LandingPage } from '../components/landingPage/LandingPage';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import HomePage from './home';
import { Auth0Provider } from '@auth0/auth0-react';
import { Layout } from '../components/Layout';

const Home: NextPage = ({ domain_env, clientId_env }: any) => {
  const router = useRouter();

  // search by email if no user is found
  // post request (user)
  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }
  // useEffect(() => {
  //   if (false) {
  //     router.push('/dashboard');
  //   } else {
  //     router.push('/home');
  //   }
  // }, [user]);

  return (
    <Auth0Provider
      domain={domain_env}
      clientId={clientId_env}
      redirectUri={'http://localhost:3000'}
    >
      <Layout>
        <HomePage />
      </Layout>
    </Auth0Provider>
  );
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
