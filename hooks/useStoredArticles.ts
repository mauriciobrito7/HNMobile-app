import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Article } from '@/types/article';

const useStoredArticles = (key: string) => {
  const [storedArticles, setStoredArticles] = useState<Article[]>([]);

  const saveArticles = async (articles: Article[]) => {
    try {
      const jsonValue = JSON.stringify(articles);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
      console.error('Failed to save articles:', e);
    }
  };

  const loadArticles = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      console.error('Failed to load articles:', e);
      return [];
    }
  };

  useEffect(() => {
    const initialize = async () => {
      const loadedArticles = await loadArticles();
      setStoredArticles(loadedArticles);
    };

    initialize();
  }, []);

  return { storedArticles, saveArticles };
};

export { useStoredArticles };
