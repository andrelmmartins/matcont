import { router } from 'expo-router';
import { Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Svg, { Path } from 'react-native-svg';

interface Props {
	back?: boolean;
}

export default function Header(props: Props) {
	return (
		<View className="flex flex-row justify-between items-center w-full">
			<View className="h-12 w-12">
				{props.back && (
					<TouchableOpacity
						className="bg-gray/10 h-12 w-12 rounded-sm flex items-center justify-center"
						onPress={router.back}
					>
						<Svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#0D0D0D" className="h-4 w-4">
							<Path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
						</Svg>
					</TouchableOpacity>
				)}
			</View>
			<View className="bg-[#FFF] p-4 rounded-lg">
				<Image source={require('../../assets/images/logo.png')} className="w-[88px] h-[100px]" />
			</View>
			<View className="h-12 w-12"></View>
		</View>
	);
}
