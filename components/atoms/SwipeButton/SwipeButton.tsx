import React from 'react';
import { Animated, TextStyle, ViewStyle } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './SwipeButton.style';

interface SwipeButtonProps {
  onPress: () => void;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  dragX: Animated.AnimatedInterpolation<number | string>;
  progress?: Animated.AnimatedInterpolation<number | string>;
  children: React.ReactNode;
  direction: 'left' | 'right';
}

const SwipeButton = ({ 
  onPress, 
  style,
  textStyle,
  dragX,
  progress,
  children, 
  direction 
}: SwipeButtonProps) => {
  const opacityStyle: Animated.WithAnimatedValue<ViewStyle> = {
    opacity: progress ? progress : 1,
  };

  const trans = dragX.interpolate({
    inputRange: direction === 'left' ? [-100, 0] : [0, 100],
    outputRange: [1, 0],
  });

  const transformStyle: Animated.WithAnimatedValue<ViewStyle> = {
    transform: [{ translateX: trans }],
  };

  return (
    <Animated.View style={[transformStyle, opacityStyle]}>
      <RectButton onPress={onPress} style={[styles.button, style]}>
        <Animated.Text style={[styles.text, textStyle]}>
          {children}
        </Animated.Text>
      </RectButton>
    </Animated.View>
  );
};

export { SwipeButton };
