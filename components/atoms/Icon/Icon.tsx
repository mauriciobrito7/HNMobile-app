import Icon from 'react-native-vector-icons/FontAwesome';

import { IconProps } from 'react-native-vector-icons/Icon';

const MyIcon = (props: IconProps) => {
  return <Icon {...props} />;
};

export { MyIcon as Icon };
