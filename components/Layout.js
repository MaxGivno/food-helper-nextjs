import Head from 'next/head';
import Header from './Header';

const Layout = (props) => (
  <React.Fragment>
    <Head>
      <link
        rel='stylesheet'
        href='https://use.fontawesome.com/releases/v5.15.1/css/all.css'
        integrity='sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp'
        crossorigin='anonymous'
      />
      <title>Cooking Helper</title>
    </Head>
    <Header />
    <div>{props.children}</div>
  </React.Fragment>
);

export default Layout;
