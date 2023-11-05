import { Image as RNImage, ImageProps } from 'react-native';

import styles from './Image.style';

const Image = (props:ImageProps) => {
  return <RNImage style={styles.image} {...props} />;
};

export { Image };
