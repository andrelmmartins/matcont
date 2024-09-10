import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

interface Props extends TouchableOpacityProps {
	label: string;
	icon?: JSX.Element;
	variant?: 'primary' | 'secondary';
	loading?: boolean;
}

export default function Button({
	label,
	icon,
	variant = 'secondary',
	className = '',
	loading = false,
	children,
	...props
}: Props) {
	const centered = !icon && !children && !loading;

	return (
		<TouchableOpacity
			className={`rounded-lg p-4 flex flex-row ${variant === 'primary' ? 'bg-blue-dark' : 'bg-gray/10'} items-center ${centered ? 'justify-center' : ''} w-full ${className}`}
			activeOpacity={0.7}
			{...props}
		>
			{icon && (
				<View className={`rounded-sm p-2 flex items-center justify-center bg-gray/10 shrink-0 mr-4`}>
					{icon}
				</View>
			)}
			<Text
				className={`${variant === 'primary' ? 'text-white' : ''} font-bold text-lg ${centered ? '' : 'flex-1'}`}
			>
				{label}
			</Text>
			{loading && <ActivityIndicator size="small" color={variant === 'primary' ? '#f2f2f2' : '#0D0D0D'} />}
			{children}
		</TouchableOpacity>
	);
}
