import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

const MainScreen = () => {
	const router = useRouter();

	const goToDetail = () => {
		router.push('/home');
	};

	return (
		<View>
			<Text>Main Screen</Text>
			<Button title="Go to Detail" onPress={goToDetail} />
		</View>
	);
};

export default MainScreen;