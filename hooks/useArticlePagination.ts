import { useState, useEffect, useCallback } from 'react';
import { useFetch } from '@/hooks/useFetch';
import { extractArticles } from '@/extractors/article';
import { useStoredArticles } from '@/hooks/useStoredArticles';
import { useNetConnection } from './useNetConnection';

import { APISearch } from '@/types/search';
import { Article } from '@/types/article';

const useArticlePagination = (apiUrl: string, query: string) => {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [articles, setArticles] = useState<Article[]>([]);
  const [deletedArticleIds, setDeletedArticleIds] = useState<string[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const { data, isLoading, refetch } = useFetch<APISearch>(apiUrl, {
    query,
    page,
  });

  const { storedArticles, saveArticles } = useStoredArticles('articles');
  const { isConnected } = useNetConnection();

  useEffect(() => {
    if (data && data.hits && !isLoading) {
      let newArticles = page === 0 
        ? extractArticles(data.hits) 
        : [...articles, ...extractArticles(data.hits)];

      newArticles = newArticles.
        filter(article => !deletedArticleIds.includes(article.objectId));

      const uniqueArticles = newArticles.filter((article, index, self) => {
        return self.findIndex(a => a.objectId === article.objectId) === index;
      });
      
      setArticles(uniqueArticles);
      saveArticles(uniqueArticles);
      setIsFetchingMore(false);
      setTotalPages(data.nbPages);
    }
  }, [data, page, isLoading, deletedArticleIds]);

  useEffect(() => {
    // When there's no internet connection, set articles from storage
    if (!isConnected) {
      setArticles(storedArticles);
    }
  }, [storedArticles]);

  const onRefresh = useCallback(async () => {
    setPage(0);
    setArticles([]);
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, [refetch]);

  const loadMoreArticles = useCallback(() => {
    if (!isFetchingMore && !refreshing && !isLoading && page < totalPages - 1) {
      setIsFetchingMore(true);
      setPage(prevPage => prevPage + 1);
    }
  }, [isFetchingMore, refreshing, isLoading, page, totalPages]);

  const markArticleAsDeleted = useCallback((id: string) => {
    setDeletedArticleIds(currentDeletedIds => [...currentDeletedIds, id]);
  }, []);

  return {
    articles,
    refreshing,
    onRefresh,
    loadMoreArticles,
    isFetchingMore,
    markArticleAsDeleted,
  };
};

export { useArticlePagination };
