import axios from 'axios';

import Layout from '../components/Layout';
import PageSection from '../components/PageSection';

const axiosWithBaseUrl = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v2/9973533',
  responseType: 'json',
});

function Categories(props) {
  return (
    <Layout>
      <PageSection title={'Categories'} meals={props.categories} />
    </Layout>
  );
}

Categories.getInitialProps = async function () {
  const latest = await axiosWithBaseUrl.get('/categories.php');
  const categories = await latest.data.categories;

  return {
    categories: categories,
  };
};

export default Categories;
