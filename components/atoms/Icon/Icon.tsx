import { IconProps } from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/FontAwesome';

const MyIcon = (props: IconProps) => {
  return <Icon {...props} />;
};

export { MyIcon as Icon };
