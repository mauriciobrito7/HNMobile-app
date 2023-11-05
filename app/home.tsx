import { useRouter } from 'expo-router';
import { useFetch } from '@/hooks/useFetch';

import { View, Text, Button } from 'react-native';

import { APISearch } from '@/types/search';
import { extractHits } from '@/extractors/hit';
import { Hit } from '@/types/hit';
import { config } from '../config';

const MainScreen = () => {
  const router = useRouter();
  const { data, isLoading } = useFetch<APISearch>(`${config.API_URL}search_by_date`, {
    query: 'mobile',
  });

  const { hits: apiHits } = data;

  const articles = apiHits && extractHits(apiHits);

  const goToDetail = () => {
    router.push('/home');
  };

  if(isLoading) {
    return <Text>loading...</Text>;
  }

  return (
    <View>
      <Text>Main Screen</Text>
      <Text>Articles</Text>
      {articles && articles.map((article: Hit) => (
        <Text key={article.objectId}>{article.title}</Text>
      ))}
      <Button title="Go to Detail" onPress={goToDetail} />
    </View>
  );
};

export default MainScreen;
