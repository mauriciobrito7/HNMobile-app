import { Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

import { 
  View,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView 
} from 'react-native';
import { Text } from '@/components/atoms';
import { WebView } from 'react-native-webview';

import colors from '@/theme/color';

const ArticleScreen = () => {
  const [loading, setLoading] = useState(true);
  const params = useLocalSearchParams();
  const url = typeof params.url === 'string' ? params.url : '';


  if (!url) {
    return (
      <View style={styles.container}>
        <Text>No valid URL provided.</Text>
      </View>
    );
  }
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: colors.primary },
          headerShadowVisible: false,
          headerTitle: 'HN Article - Web View',
          headerTitleStyle: { color: colors.white },
          headerTintColor: colors.white
        }}

      />
      <View style={styles.container}>
        {loading && (
          <ActivityIndicator
            size="large"
            style={styles.loader}
            color={colors.black}
          />
        )}
        <WebView source={{ uri: url }} onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1
  },
});

export default ArticleScreen;
