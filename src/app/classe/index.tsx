import React from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Svg, Path } from 'react-native-svg';

import { Classe } from '@/src/classes';
import Button from '@/src/components/Button';
import Header from '@/src/components/Header';
import { useMail } from '@/src/context/MailContext';

export default function ClasseIntro() {
	const { top, bottom } = useSafeAreaInsets();
	const { classe: stringifiedClasse } = useLocalSearchParams();
	const { challengeData } = useMail();

	if (typeof stringifiedClasse !== 'string') return <></>;

	const classe = JSON.parse(stringifiedClasse) as Classe;

	return (
		<View className="flex items-center bg-white h-full" style={{ gap: 32 }}>
			<ScrollView className="px-6 w-full" contentContainerStyle={{ flexGrow: 1, paddingTop: top + 32 }}>
				<Header back />

				<View className="flex mt-4" style={{ gap: 16, paddingBottom: bottom + 32 }}>
					<Text className="text-3xl font-bold text-blue-dark text-center mb-4">{classe.title}</Text>

					{classe.content.map((text, i) => (
						<Text className="text-lg text-justify" key={`text-content-${i}`}>
							{text}
						</Text>
					))}

					<Button
						onPress={() => {
							router.push({ pathname: '/classe/manual', params: { classe: JSON.stringify(classe) } });
						}}
						label="Material"
						className="mt-8"
						icon={
							<Svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#0D0D0D" className="w-6 h-6">
								<Path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
								/>
							</Svg>
						}
					/>

					<Button
						onPress={() => {
							router.push({ pathname: '/classe/desafio', params: { classe: JSON.stringify(classe) } });
						}}
						label="Desafio"
						icon={
							<Svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#0D0D0D" className="w-6 h-6">
								<Path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
								/>
							</Svg>
						}
					>
						{challengeData[classe.id] ? (
							<Text
								className={`${challengeData[classe.id].score < 7 ? 'text-red-medium' : 'text-blue-dark'} font-bold text-lg`}
							>
								Nota: {challengeData[classe.id].score.toPrecision(2)}
							</Text>
						) : (
							<Svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#0D0D0D" className="w-4 h-4">
								<Path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
							</Svg>
						)}
					</Button>
				</View>
			</ScrollView>
		</View>
	);
}
