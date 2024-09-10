import { Control, RegisterOptions, useController } from 'react-hook-form';
import { Text, TextInput, TextInputProps, View } from 'react-native';

interface Props extends TextInputProps {
	name: string;
	control: Control<any>;
	label: string;
	error?: string;
	rules?: RegisterOptions;
	className?: string;
}

export default function Input({ label, error, control, name, rules, className, ...props }: Props) {
	const { field, fieldState } = useController({ control, name, rules });

	return (
		<View className={`w-full flex ${className}`} style={{ gap: 4 }}>
			<View className="relative">
				<Text className="absolute top-2 left-2 text-xs text-gray/50">{label}</Text>
				<TextInput
					className="bg-gray/10 px-2 pt-4 h-14 rounded-lg text-black"
					placeholderTextColor="#565659"
					value={field.value}
					onChangeText={field.onChange}
					{...props}
				/>
			</View>
			{fieldState.error?.message && <Text className="text-xs text-red-medium">{fieldState.error.message}</Text>}
		</View>
	);
}
