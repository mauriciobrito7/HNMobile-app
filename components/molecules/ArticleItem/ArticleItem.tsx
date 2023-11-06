import { TouchableOpacity, Text } from '@/components/atoms';

import { Article } from '@/types/article';
import styles from './ArticleItem.style';

interface  ArticleProps {
  item: Article;
  onPress: () => void;
}

const ArticleItem = ({ item, onPress }: ArticleProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{item.title || item.storyTitle}</Text>
      <Text style={styles.date}>Date: {item.createdAt}</Text>
    </TouchableOpacity>
  );
};

export { ArticleItem };
