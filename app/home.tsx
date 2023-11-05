import useFetch from '@/hooks/useFetch';

import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

const MainScreen = () => {
  const router = useRouter();
  const { data, isLoading } = useFetch(`${process.env.EXPO_PUBLIC_API_URL}search_by_date`, {
    query: 'mobile',
  });

  console.log('data', data);

  const goToDetail = () => {
    router.push('/home');
  };

  if(isLoading) {
    return <Text>loading...</Text>;
  }

  return (
    <View>
      <Text>Main Screen</Text>
      <Button title="Go to Detail" onPress={goToDetail} />
    </View>
  );
};

export default MainScreen;