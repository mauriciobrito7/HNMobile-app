import { 
  FlatList, 
  RefreshControl, 
  ActivityIndicator, 
  Alert 
} from 'react-native';
import { ArticleItem } from '@/components/molecules';
import { Article } from '@/types/article';

interface ArticleListProps {
  articles: Article[];
  refreshing: boolean;
  onRefresh: () => void;
  onEndReached: () => void;
  isFetchingMore: boolean;
  onDeleteArticle: (id: string) => void;
}

const ArticleList = ({
  articles,
  refreshing,
  onRefresh,
  onEndReached,
  isFetchingMore,
  onDeleteArticle,
}: ArticleListProps) => {

  const handleDelete = (id: string) => {
    Alert.alert('Delete', 'Are you sure you want to delete this article?', [
      { text: 'Cancel' },
      { text: 'Delete', onPress: () => onDeleteArticle(id) },
    ]);
  };

  return (
    <FlatList
      data={articles}
      renderItem={({ item }) => (
        <ArticleItem 
          item={item} 
          onPress={() => {}}
          onDelete={() => handleDelete(item.objectId)} 
        />
      )}
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

export { ArticleList };
