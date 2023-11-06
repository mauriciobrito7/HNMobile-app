import { useArticlePagination } from '@/hooks/useArticlePagination';
import { useStoredArticles } from '@/hooks/useStoredArticles';
import { useNetConnection } from '@/hooks/useNetConnection';

import { ArticleList } from '@/components/organism';
import { SafeAreaView } from 'react-native';
import { Stack,  } from 'expo-router';


import { config } from '@/config';
import colors from '@/theme/color';

const MainScreen = () => {
  const apiURL = `${config.API_URL}search_by_date`;
  const { 
    articles, 
    isFetchingMore, 
    loadMoreArticles, 
    refreshing, 
    onRefresh,
    markArticleAsDeleted
  } = useArticlePagination(apiURL, 'mobile');
  const { storedArticles } = useStoredArticles('articles');
  const { isConnected } = useNetConnection();
  const currentArticles = isConnected ? articles : storedArticles;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: colors.primary },
          headerShadowVisible: false,
          headerTitle: 'HN Articles',
          headerTitleStyle: { color: colors.white },
        }}

      />
      <ArticleList
        articles={currentArticles}
        isFetchingMore={isFetchingMore}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReached={loadMoreArticles}
        onDeleteArticle={markArticleAsDeleted}
      />
    </SafeAreaView>
  );
};

export default MainScreen;
