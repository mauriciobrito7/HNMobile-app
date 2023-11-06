import { Stack } from 'expo-router';

const Layout = () => {
  return <Stack initialRouteName="home">
    <Stack.Screen name="home" />
    <Stack.Screen name="article" />
  </Stack>;
};

export default Layout;
