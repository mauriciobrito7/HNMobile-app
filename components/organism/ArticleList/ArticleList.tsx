import React from 'react';
import { FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import { ArticleItem } from '@/components/molecules';
import { Article } from '@/types/article';

interface ArticleListProps {
  articles: Article[];
  refreshing: boolean;
  onRefresh: () => void;
  onEndReached: () => void;
  isFetchingMore: boolean;
}

const ArticleList = ({
  articles,
  refreshing,
  onRefresh,
  onEndReached,
  isFetchingMore,
}: ArticleListProps) => {
  return (
    <FlatList
      data={articles}
      renderItem={(item)=> <ArticleItem item={item.item} onPress={() => {}} />}
      keyExtractor={(item) => item.objectId}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        isFetchingMore ? <ActivityIndicator size="large" /> : null
      }
    />
  );
};

export  { ArticleList };
