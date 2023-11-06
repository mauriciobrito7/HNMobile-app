/* eslint-disable react/display-name */
import React, { useCallback } from 'react';
import { useRouter } from 'expo-router';

import { 
  FlatList, 
  RefreshControl, 
  ActivityIndicator, 
  Alert
} from 'react-native';
import { ArticleItem } from '@/components/molecules';
import { Divider } from '@/components/atoms';

import { Article } from '@/types/article';

interface ArticleListProps {
  articles: Article[];
  refreshing: boolean;
  onRefresh: () => void;
  onEndReached: () => void;
  isFetchingMore: boolean;
  onDeleteArticle: (id: string) => void;
}

const ArticleList = React.memo(({
  articles,
  refreshing,
  onRefresh,
  onEndReached,
  isFetchingMore,
  onDeleteArticle,
}: ArticleListProps) => {
  const router = useRouter();

  const handlePressArticle = useCallback((article:Article) => {
    const url = article.url || article.storyUrl || '';
    if (!url) {
      Alert.alert('Error', 'Invalid URL');
      return;
    }

    router.push({ pathname: 'article', params: { url } });
  },[router]);


  const handleDelete = useCallback((id: string) => {
    Alert.alert('Delete', 'Are you sure you want to delete this article?', [
      { text: 'Cancel' },
      { text: 'Delete', onPress: () => onDeleteArticle(id) },
    ]);
  },[onDeleteArticle]);

  return (
    <FlatList
      data={articles}
      renderItem={({ item }) => (
        <ArticleItem 
          item={item} 
          onPress={() => {handlePressArticle(item);}}
          onDelete={() => handleDelete(item.objectId)} 
        />
      )}
      keyExtractor={(item) => item.objectId.toString()}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        isFetchingMore ? <ActivityIndicator size="large" /> : null
      }
      ItemSeparatorComponent={Divider}
    />
  );
});

export { ArticleList };
