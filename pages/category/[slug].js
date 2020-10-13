import { useRouter } from 'next/router';
import axios from 'axios';
import useSWR from 'swr';

import Layout from '../../components/Layout';
import PageSection from '../../components/PageSection';

const axiosWithBaseUrl = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v2/9973533',
  responseType: 'json',
});

function Category() {
  const router = useRouter();
  const { slug } = router.query;

  const fetcher = (url) => axiosWithBaseUrl(url).then((r) => r.data.meals);

  const { data, error } = useSWR(`/filter.php?c=${slug}`, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  const category = data;

  return (
    <Layout>
      <PageSection title={slug} meals={category} />
    </Layout>
  );
}

export default Category;
