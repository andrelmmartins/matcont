import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PortalProvider } from '@gorhom/portal';

import MailProvider from '../context/MailContext';
import NotificationProvider from '../context/NotificationContext';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
	const [fontsLoaded] = useFonts({
		Manrope: require('../../assets/fonts/Manrope.ttf'),
	});

	useEffect(() => {
		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<NotificationProvider>
				<PortalProvider>
					<MailProvider>
						<Stack
							screenOptions={{
								headerShown: false,
								animation: 'ios',
							}}
						>
							<Stack.Screen name="index" />
						</Stack>
					</MailProvider>
				</PortalProvider>
			</NotificationProvider>
		</GestureHandlerRootView>
	);
};

export default Layout;
