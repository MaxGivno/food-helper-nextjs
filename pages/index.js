import axios from 'axios';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';

const axiosWithBaseUrl = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v2/9973533',
  responseType: 'json',
});

function Index(props) {
  return (
    <Layout>
      <Hero />
      <PageSection title={'Recently added'} meals={props.latestMeals} />
      <PageSection title={'Random selection'} meals={props.randomMeals} />
    </Layout>
  );
}

Index.getInitialProps = async function () {
  const latest = await axiosWithBaseUrl.get('/latest.php');
  const random = await axiosWithBaseUrl.get('/randomselection.php');
  const latestMeals = await latest.data.meals;
  const randomMeals = await random.data.meals;
  return {
    latestMeals: latestMeals,
    randomMeals: randomMeals,
  };
};

export default Index;
