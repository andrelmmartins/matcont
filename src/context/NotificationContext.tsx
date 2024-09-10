import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

interface NotificationProps {
	variant: 'success' | 'warning';
	title: string;
}

interface Props {
	notify: (props: NotificationProps) => void;
}

const NotificationContext = createContext({} as Props);

export default function NotificationProvider(props: { children: React.ReactNode }) {
	const [notification, setNotification] = useState<NotificationProps>();

	function notify(props: NotificationProps) {
		setNotification(props);
	}

	const animation = useRef<Animatable.View>(null);

	useEffect(() => {
		if (notification) {
			animation.current?.animate({ from: { top: -height / 2 }, to: { top: 0 } });
			setTimeout(() => {
				animation.current?.animate({ from: { top: 0 }, to: { top: -height / 2 } });
			}, 5000);
		}
	}, [notification]);

	const { top } = useSafeAreaInsets();
	const { width, height } = useSafeAreaFrame();

	return (
		<NotificationContext.Provider value={{ notify }}>
			{props.children}

			{notification && (
				<Animatable.View
					ref={animation}
					duration={300}
					style={{ paddingTop: top + 16, width: width, left: 0, gap: 8 }}
					className={`pb-4 px-4 flex flex-row items-center absolute top-0  ${notification.variant === 'success' ? 'bg-blue-medium' : 'bg-red-medium'} `}
				>
					{notification.variant === 'success' && (
						<Svg viewBox="0 0 24 24" fill="#F2F2F2" className="h-6 w-6">
							<Path
								fillRule="evenodd"
								d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
								clipRule="evenodd"
							/>
						</Svg>
					)}

					{notification.variant === 'warning' && (
						<Svg viewBox="0 0 24 24" fill="#F2F2F2" className="h-6 w-6">
							<Path
								fillRule="evenodd"
								d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
								clipRule="evenodd"
							/>
						</Svg>
					)}
					<Text className="text-white font-bold">{notification.title}</Text>
				</Animatable.View>
			)}
		</NotificationContext.Provider>
	);
}

export const useNotification = () => useContext(NotificationContext);
