import { Text as RNText, TextProps } from 'react-native';

import styles from './Text.style';

interface Props extends TextProps {
  children: React.ReactNode;
}

const Text: React.FC<Props> = ({ style, children, ...rest }: Props) => {
  return (
    <RNText style={[styles.text, style]} {...rest}>
      {children}
    </RNText>
  );
};

export { Text };
