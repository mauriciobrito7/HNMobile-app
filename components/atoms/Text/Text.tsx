import { Text as RNText, TextProps, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  text: {
    // Define default styles for text here
    fontSize: 16,
    color: '#333',
  },
});

export { Text };
