import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout';

type Props = {
  children?: React.ReactNode;
};

const AppNotLogged: React.FC<Props> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

const AppLogged: React.FC<Props> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
