import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Dimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Pdf from 'react-native-pdf';

import { Classe } from '@/src/classes';
import Header from '@/src/components/Header';

export default function Manual() {
	const { top, bottom } = useSafeAreaInsets();
	const { classe: stringifiedClasse } = useLocalSearchParams();

	if (typeof stringifiedClasse !== 'string') return <></>;

	const classe = JSON.parse(stringifiedClasse) as Classe;

	return (
		<View
			className="flex items-center bg-[#F2F2F2] h-full w-full"
			style={{ gap: 32, paddingTop: top + 32, paddingBottom: bottom + 32 }}
		>
			<Header back />
			<Pdf
				trustAllCerts={false}
				source={{
					uri: classe.document,
					cache: true,
				}}
				style={{
					flex: 1,
					width: Dimensions.get('window').width,
					height: Dimensions.get('window').height,
				}}
			/>
		</View>
	);
}
