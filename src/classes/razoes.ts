import { Classe } from '.';

export const razoes: Classe = {
	id: 'razoes',
	category: 'Junior',
	teacher: 'MATCONT CONT',
	title: 'Razões, proporções e regra de três',
	document: 'https://eac-music.vercel.app/matcont/AULA4_RAZOES.pdf',
	questions: [
		{
			name: '1',
			correctLetter: 'b',
			options: ['2/3', '3/4', '4/3', '3/2', '4/5'],
			question:
				'O salário atual do funcionário administrativo da empresa cliente é R$ 4.500,00. Para reter o funcionário a empresa está estudando a possibilidade de ofertar um aumento no salário, cujo salário é R$ 6.000,00.\n\nQuerendo entender a proporção do aumento sugerido, qual a razão de um salário para outro?',
			error: 'A razão deve ser apresentada preferencialmente na forma irredutível. Assim, devemos simplificar a fração 4500 / 6000, dividindo o numerador e o denominador pelo maior divisor comum, que e 1.500. Logo, a razão de um salário para outro e igual a 3/4.',
		},
		{
			name: '2',
			correctLetter: 'a',
			options: ['80/1', '40/1', '3/4', '4/1', '10/2'],
			question:
				'Todo mês é verificado com o setor de transporte o acompanhamento da utilização dos veículos e encaminha para o setor contábil as informações para ser analisado os custos no setor.\n\nA empresa caminhou uma planilha com os dados do percurso do único veículo que percorreu 480 km em 6 horas. Qual a razão entre a distância percorrida (Km) e o tempo gasto (h)?',
			error: 'A razão pedida e a razão entre a distância percorrida e o tempo gasto, que resultou em 80/1.',
		},
		{
			name: '3',
			correctLetter: 'e',
			options: ['62.000', '63.000', '64.000', '65.000', '66.000'],
			question:
				'Um investidor aplicou seu dinheiro em dois investimentos distintos: A e B. Essas aplicações estão na razão de 8 para 3, e a maior delas excede a menor em R$ 30.000,00.\n\nDetermine o montante aplicado.',
			error: 'As grandezas envolvidas neste problema são os capitais, em real, aplicados nos investimentos A e B. Além disso, o enunciado informa que esses capitais estão na razão de 8 para 3 e que o maior excede o outro em R$ 30.000,00. Assim o valor aplicado é de R$ 66.000,00.',
		},
		{
			name: '4',
			correctLetter: 'd',
			options: ['12 L', '10 L', '8 L', '6 L', '4 L'],
			question:
				'Para analisar o custo de uma pintura numa pequena obra no escritório, foi solicitado que fizesse o levantamento do material necessário para um ambiente de 15m². Sabendo que em outra reforma foi utilizado 14 litros de tinta para pintar uma parede de 35 m².\n\nQuantos litros são para pintar uma parede de 15 m²?',
			error: 'Para resolver a questão se relacionou o quantitativo de litros e a metragem da parede que já havia sido pintada, fazendo a correlação entre as razões encontra-se o valor 6L para uma parede de 15m².',
		},
	],
	background: require('../../assets/images/background1.jpeg'),
	content: [
		'As razões, proporções e regras de três são conceitos matemáticos fundamentais que também são aplicados na contabilidade de diversas maneiras. Aqui estão algumas maneiras de como esses conceitos se relacionam com atividades contábeis:',
		'Análise de Liquidez: Na contabilidade, a análise de liquidez é crucial para avaliar a capacidade de uma empresa de pagar suas obrigações de curto prazo. Razões financeiras, como a razão corrente e a razão rápida, são calculadas usando os conceitos de razões e proporções. Por exemplo, a razão corrente é calculada dividindo-se os ativos circulantes pelo passivo circulante, enquanto a razão rápida é calculada subtraindo-se o estoque do ativo circulante e dividindo pelo passivo circulante.',
		'Determinação de Preços e Margens: Ao definir preços de venda e calcular margens de lucro, os contadores podem usar regras de três para determinar o markup necessário para alcançar uma margem de lucro desejada. Por exemplo, se uma empresa deseja uma margem de lucro de 30% sobre o custo de um produto, a regra de três pode ser usada para calcular o preço de venda necessário.',
		'Rateio de Custos Indiretos: Na contabilidade de custos, os custos indiretos muitas vezes precisam ser rateados entre diferentes produtos ou departamentos. As proporções são frequentemente usadas para distribuir esses custos de maneira equitativa com base em métricas relevantes, como horas de trabalho, consumo de matéria-prima, entre outros.',
		'Análise de Rentabilidade por Produto ou Cliente: Ao analisar a rentabilidade de diferentes produtos ou clientes, os contadores podem usar razões e proporções para comparar os custos associados a cada um com as receitas geradas. Isso ajuda na identificação de produtos ou clientes mais lucrativos e na tomada de decisões estratégicas.',
		'João: "Entendi, Sra. Ana. Vou começar a trabalhar nessas tarefas imediatamente."',
		'Projeções Financeiras e Orçamentárias: Durante o processo de planejamento financeiro, as proporções e regras de três são frequentemente usadas para projetar receitas, despesas e fluxos de caixa futuros. Isso permite que as empresas estimem suas necessidades de financiamento, identifiquem áreas de melhoria e estabeleçam metas realistas.',
		'Esses são apenas alguns exemplos de como razões, proporções e regras de três são aplicadas na contabilidade para ajudar na análise financeira, tomada de decisões e planejamento estratégico.',
	],
};
