import { Image, Pressable, Text, View } from 'react-native';
import { Control, useController } from 'react-hook-form';
import Svg, { Path } from 'react-native-svg';

import { useDebounce } from '../hooks/useDebounce';

export interface QuestionProps {
	question: string;
	options: string[];
	control: Control<any>;
	name: string;
	error: string;
	correctLetter: string;
	canRevealAnswer: boolean;
	image?: any;
}

export default function Question(props: QuestionProps) {
	const { field, fieldState } = useController({
		name: props.name,
		control: props.control,
		rules: {
			required: `Você precisa responder esta pergunta`,
		},
	});

	const letters = ['a', 'b', 'c', 'd', 'e'];

	const canRevealAnswer = useDebounce(props.canRevealAnswer);

	return (
		<View className="flex bg-gray/5 p-4 rounded-lg" style={{ gap: 16 }}>
			{props.image ? (
				<>
					<Text className="text-lg">{props.question.split('[image]')[0].replaceAll('\\n', '\n')}</Text>
					<Image source={props.image} className="w-full h-[85px]" />
					<Text className="text-lg">{props.question.split('[image]')[1].replaceAll('\\n', '\n')}</Text>
				</>
			) : (
				<Text className="text-lg">{props.question.replaceAll('\\n', '\n')}</Text>
			)}
			<View className="flex">
				{props.options.map((option, i) => {
					const letter = letters[i];
					const marked = field.value === letter;
					return (
						<Pressable
							disabled={props.canRevealAnswer}
							key={`question-${props.name}-option-${i}`}
							onPress={() => {
								field.onChange(letter);
							}}
							className="flex flex-row items-center py-3"
							style={{ gap: 8 }}
						>
							<View className="flex items-center justify-center rounded-full h-4 w-4 border">
								{marked && <View className="bg-black h-2.5 w-2.5 rounded-full"></View>}
							</View>

							<Text className="text-[15px]">{`${letter}. ${option}`}</Text>
						</Pressable>
					);
				})}
			</View>

			{canRevealAnswer && !fieldState.error && (
				<View className="flex flex-row bg-blue-light p-2 rounded-lg" style={{ gap: 8 }}>
					<View className="bg-blue-medium flex items-center justify-center h-6 w-6 rounded-md">
						<Svg viewBox="0 0 24 24" fill="#F2F2F2" className="h-4 w-4">
							<Path
								fillRule="evenodd"
								d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
								clipRule="evenodd"
							/>
						</Svg>
					</View>
					<Text className="mt-0.5 flex-1 text-white">Sua resposta está correta!</Text>
				</View>
			)}

			{fieldState.error?.message && (
				<View className="flex flex-row bg-red-light/30 p-2 rounded-lg" style={{ gap: 8 }}>
					<View className="bg-red-light flex items-center justify-center h-6 w-6 rounded-md">
						<Svg viewBox="0 0 24 24" fill="#F2F2F2" className="h-4 w-4">
							<Path
								fillRule="evenodd"
								d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
								clipRule="evenodd"
							/>
						</Svg>
					</View>
					<Text className="mt-0.5 flex-1">{fieldState.error.message.replaceAll('\\n', '\n')}</Text>
				</View>
			)}
		</View>
	);
}
