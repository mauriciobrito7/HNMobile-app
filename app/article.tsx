import { useLocalSearchParams } from 'expo-router';

import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Text } from '@/components/atoms';
import { WebView } from 'react-native-webview';
import { useState } from 'react';

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
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator
          size="large"
          style={styles.loader}
          color="#000000"
        />
      )}
      <WebView source={{ uri: url }} onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)} />
    </View>
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
