import { router } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { classes } from '../classes';
import Header from '../components/Header';

export default function Intro() {
	const { top, bottom } = useSafeAreaInsets();

	return (
		<>
			<View className="flex items-center bg-white h-full" style={{ gap: 32 }}>
				<ScrollView className="px-6 w-full" contentContainerStyle={{ flexGrow: 1, paddingTop: top + 32 }}>
					<View className="flex" style={{ gap: 16, paddingBottom: bottom + 32 }}>
						<Header />
						<Image
							source={require('../../assets/images/intro.jpeg')}
							className="w-full object-cover rounded-2xl my-4"
						/>
						<Text className="text-lg text-justify">
							O sol brilha pelas janelas do escritório de contabilidade, inundando o espaço com uma luz
							acolhedora. O som dos teclados clicando e telefones tocando ecoa suavemente no ambiente. É
							segunda-feira de manhã e um novo estagiário está prestes a começar sua jornada no mundo da
							contabilidade.
						</Text>
						<Text className="text-lg text-justify">
							O estagiário, João, nervoso e empolgado, entra no escritório com seu terno bem passado e uma
							pasta cheia de expectativas. Ele é recebido por Renato, o secretário, que lhe dá um aperto
							de mão e indica a sala do chefe.
						</Text>
						<Text className="text-lg text-justify">
							A Sra. Ana, que é a proprietária do escritório, recebe o João, de forma calorosa e amigável.
							Sra. Ana: “Olá João seja bem vindo! Estou feliz em tê-lo aqui como parte de nossa equipe.
							Espero que sua experiência de estágio seja enriquecedora e que você aprenda muito conosco."
						</Text>
						<Text className="text-lg text-justify">
							João: "Obrigado, Sra. Ana! Estou animado para começar e aprender o máximo possível."
						</Text>
						<Text className="text-lg text-justify">
							Sra. Ana: "Ótimo! Antes de mais nada, deixe-me explicar algumas das suas responsabilidades
							aqui no escritório. Você estará auxiliando nossos contadores em uma variedade de tarefas,
							desde da coleta de dados para preparação de declarações fiscais e balanços."
						</Text>
						<Text className="text-lg text-justify">
							João: "Entendi, Sra. Ana. Vou começar a trabalhar nessas tarefas imediatamente."
						</Text>
						<Text className="text-lg text-justify">
							Sra. Ana: "Ótimo! Se precisar de alguma orientação ou tiver dúvidas, não hesite em me
							procurar ou falar com os contadores. Estamos aqui para ajudá-lo."
						</Text>
						<Text className="text-lg text-justify">
							Com isso, João sai da sala do chefe, determinado a começar seu estágio com o pé direito. Ele
							sabe que há muito trabalho pela frente, mas está pronto para enfrentar os desafios e
							aprender o máximo possível durante sua experiência no escritório de contabilidade.
						</Text>

						<Text className="text-3xl font-bold text-blue-dark">Cursos disponíveis</Text>

						<View className="flex" style={{ gap: 16 }}>
							{classes.map((classe, i) => {
								return (
									<Pressable
										key={`classe-${i}`}
										onPress={() => {
											router.push({
												pathname: '/classe',
												params: { classe: JSON.stringify(classe) },
											});
										}}
										className="rounded-lg p-4 bg-gray/10"
									>
										<Image
											resizeMode="cover"
											className="h-[200px] w-full rounded-sm"
											source={classe.background}
										/>
										<Text className="text-2xl text-blue-dark font-bold my-2">{classe.title}</Text>
										<Text>Categoria: {classe.category}</Text>
										<Text className="italic">Professor: {classe.teacher}</Text>
									</Pressable>
								);
							})}
						</View>
					</View>
				</ScrollView>
			</View>
		</>
	);
}
