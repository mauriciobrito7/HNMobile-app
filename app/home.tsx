import { useArticlePagination } from '@/hooks/useArticlePagination';

import { ArticleList } from '@/components/organism';

import { config } from '@/config';
import { useStoredArticles } from '@/hooks/useStoredArticles';
import { useNetConnection } from '@/hooks/useNetConnection';

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
  console.log('currentArticles', currentArticles);


  return (
    <ArticleList
      articles={currentArticles}
      isFetchingMore={isFetchingMore}
      refreshing={refreshing}
      onRefresh={onRefresh}
      onEndReached={loadMoreArticles}
      onDeleteArticle={markArticleAsDeleted}
    />
  );
};

export default MainScreen;
