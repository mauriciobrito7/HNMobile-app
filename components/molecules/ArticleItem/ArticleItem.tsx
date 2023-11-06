import { SwipeButton, Text } from '@/components/atoms';
import { RectButton, Swipeable } from 'react-native-gesture-handler';

import { Article } from '@/types/article';
import { Animated } from 'react-native';

import styles from './ArticleItem.style';

interface ArticleProps {
  item: Article;
  onPress: () => void;
  onDelete: () => void;
}

const ArticleItem = ({ item, onPress, onDelete }: ArticleProps) => {
  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<string | number>,
    dragX: Animated.AnimatedInterpolation<string | number>
  ) => {
    
    return (
      <SwipeButton 
        onPress={onDelete} 
        dragX={dragX} 
        progress={progress}
        direction="right"
        style={styles.deleteButton}
        textStyle={styles.deleteButtonText}
      >
        Delete
      </SwipeButton>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <RectButton onPress={onPress} style={styles.container}>
        <Text style={styles.title}>{item.title || item.storyTitle}</Text>
        <Text style={styles.date}>Date: {item.createdAt}</Text>
      </RectButton>
    </Swipeable>
  );
};

export { ArticleItem };
