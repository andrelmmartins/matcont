import { Image, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Intro() {
	const { top, bottom } = useSafeAreaInsets();

	return (
		<View
			className="flex items-center bg-[#FFFFFF]"
			style={{ gap: 32, paddingTop: top + 32, paddingBottom: bottom + 32 }}
		>
			<ScrollView className="px-6">
				<Image
					source={require('../../assets/images/logo.png')}
					className="w-[88px] h-[100px] mb-8 self-center"
				/>
				<Image source={require('../../assets/images/intro.jpeg')} className="w-full object-cover rounded-2xl" />
				<View className="flex mt-8" style={{ gap: 16 }}>
					<Text className="text-lg text-justify">
						O sol brilha pelas janelas do escritório de contabilidade, inundando o espaço com uma luz
						acolhedora. O som dos teclados clicando e telefones tocando ecoa suavemente no ambiente. É
						segunda-feira de manhã e um novo estagiário está prestes a começar sua jornada no mundo da
						contabilidade.
					</Text>
					<Text className="text-lg text-justify">
						O estagiário, João, nervoso e empolgado, entra no escritório com seu terno bem passado e uma
						pasta cheia de expectativas. Ele é recebido por Renato, o secretário, que lhe dá um aperto de
						mão e indica a sala do chefe.
					</Text>
					<Text className="text-lg text-justify">
						A Sra. Ana, que é a proprietária do escritório, recebe o João, de forma calorosa e amigável.
						Sra. Ana: “Olá João seja bem vindo! Estou feliz em tê-lo aqui como parte de nossa equipe. Espero
						que sua experiência de estágio seja enriquecedora e que você aprenda muito conosco."
					</Text>
					<Text className="text-lg text-justify">
						João: "Obrigado, Sra. Ana! Estou animado para começar e aprender o máximo possível."
					</Text>
					<Text className="text-lg text-justify">
						Sra. Ana: "Ótimo! Antes de mais nada, deixe-me explicar algumas das suas responsabilidades aqui
						no escritório. Você estará auxiliando nossos contadores em uma variedade de tarefas, desde da
						coleta de dados para preparação de declarações fiscais e balanços."
					</Text>
					<Text className="text-lg text-justify">
						João: "Entendi, Sra. Ana. Vou começar a trabalhar nessas tarefas imediatamente."
					</Text>
					<Text className="text-lg text-justify">
						Sra. Ana: "Ótimo! Se precisar de alguma orientação ou tiver dúvidas, não hesite em me procurar
						ou falar com os contadores. Estamos aqui para ajudá-lo."
					</Text>
					<Text className="text-lg text-justify">
						Com isso, João sai da sala do chefe, determinado a começar seu estágio com o pé direito. Ele
						sabe que há muito trabalho pela frente, mas está pronto para enfrentar os desafios e aprender o
						máximo possível durante sua experiência no escritório de contabilidade.
					</Text>
				</View>
			</ScrollView>
		</View>
	);
}
