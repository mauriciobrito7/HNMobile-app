import { useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';

const useNetConnection = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { isConnected };
};

export { useNetConnection };
