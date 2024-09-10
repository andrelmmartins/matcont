import { Classe } from '.';

export const dizima: Classe = {
	id: 'dizima',
	category: 'Junior',
	teacher: 'MATCONT CONT',
	title: 'Dízima periódica',
	document: 'https://eac-music.vercel.app/matcont/AULA2_DIZIMA.pdf',
	questions: [
		{
			name: '1',
			correctLetter: 'a',
			options: [
				'103 em cada 330.',
				'104 em cada 333.',
				'104 em cada 3 333.',
				'139 em cada 330.',
				'1 039 em cada 3 330.',
			],
			question:
				'O assistente de marketing da empresa cliente cadastrou o perfil da empresa numa rede social da internet que exibe o índice de popularidade do usuário. Esse índice é a razão entre o número de admiradores do usuário e o número de pessoas que visitam o perfil da empresa na rede. Ao acessar o perfil hoje, o assistente descobriu que o índice de popularidade é 0,3121212...\n\nO índice revela que as quantidades relativas de admiradores da empresa e pessoas que visitam seu perfil são:',
			error: 'Para encontrar as quantidades relativas de admiradores e pessoas que visitaram o perfil da empresa, precisamos conhecer a fração geratriz da dízima periódica composta indicada.',
		},
	],
	background: require('../../assets/images/background1.jpeg'),
	content: [
		'Um exemplo de como o conceito de dízima periódica pode se relacionar com uma atividade da contabilidade é na análise de números decimais que representam valores monetários.',
		'Na contabilidade, lidamos frequentemente com números decimais que representam quantias de dinheiro. Em certas situações, especialmente ao lidar com cálculos complexos ou divisões que não resultam em números inteiros, podemos nos deparar com números decimais que se repetem infinitamente, formando uma dízima periódica.',
		'Por exemplo, ao calcular a depreciação de um ativo ao longo do tempo, podem surgir números decimais repetitivos. Se esses números decimais se repetirem em um padrão previsível, é importante reconhecer essa repetição para garantir precisão nos cálculos e relatórios financeiros.',
		'Assim, embora a dízima periódica não seja diretamente aplicada em todas as tarefas contábeis, sua compreensão pode ser útil em situações específicas onde a precisão numérica é essencial para análises financeiras detalhadas.',
	],
};
