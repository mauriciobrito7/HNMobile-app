import { useArticlePagination } from '@/hooks/useArticlePagination';

import { ArticleList } from '@/components/organism';

import { config } from '@/config';

const MainScreen = () => {
  const apiURL = `${config.API_URL}search_by_date`;
  const { 
    articles, 
    isFetchingMore, 
    loadMoreArticles, 
    refreshing, 
    onRefresh 
  } = useArticlePagination(apiURL, 'mobile');

  return (
    <ArticleList
      articles={articles}
      isFetchingMore={isFetchingMore}
      refreshing={refreshing}
      onRefresh={onRefresh}
      onEndReached={loadMoreArticles}
    />
  );
};

export default MainScreen;
