import { Classe } from '.';

export const expressoes: Classe = {
	id: 'expressoes',
	category: 'Junior',
	teacher: 'MATCONT CONT',
	title: 'Expressões numéricas',
	document: 'https://eac-music.vercel.app/matcont/AULA1_EXPRESSOES.pdf',
	questions: [
		{
			name: '1',
			correctLetter: 'b',
			options: ['4.290,00', '710,00', '960,00', '1.250,00', '560,00'],
			question:
				'Ao chegar na loja de Sr. Paulo, para tomar nota da movimentação financeira do seu comercio, foi coletar os dados de uma comprar na tesouraria percebeu que na data 25 de outubro a empresa adquiriu os seguintes itens:\n\nQuadro 03[image]Na movimentação financeira foi visto que o Sr. Paulo pagou com um cheque no valor de R$ 5.000, sabendo que ficará um crédito no fornecedor. Por tanto qual o valor do crédito?',
			error: 'Ao contabilizar o quantitativo de cada tipo de material e multiplica-los pelos seus devidos valores unitários, chegou-se o valor de cada tipo de mercadoria e somando todos resultou em R$ 4.290,00 (quatro mil e duzentos e noventa reais) e por fim subtraindo pelo valor do cheque em R$ 5.000,00 (cinco mil reais) chagou-se ao total de um crédito de R$ 710,00 (setecentos e dez reais).',
			image: require('../../assets/images/quadro3.png'),
		},
	],
	background: require('../../assets/images/background1.jpeg'),
	content: [
		'Uma atividade da contabilidade que está intimamente relacionada com expressões numéricas é o cálculo de demonstrações financeiras. Expressões numéricas são usadas rotineiramente na contabilidade para calcular valores como receitas, despesas, lucros, impostos, contabilizar material de compra, venda e entre outros.',
		'Por exemplo, ao preparar um balanço patrimonial, os contadores precisam calcular ativos, passivos e patrimônio líquido, utilizando expressões numéricas para somar valores de contas individuais e subtrair um do outro para chegar aos totais corretos. Da mesma forma, ao calcular o lucro líquido de uma empresa, são realizadas várias operações matemáticas, como subtração das despesas das receitas, contabilização compra e vendas, chegando aos resultados.',
		'As expressões numéricas são essenciais para a contabilidade, pois ajudam os contadores a interpretar e analisar dados financeiros de uma empresa, fornecendo informações valiosas para a tomada de decisões gerenciais e para relatórios financeiros precisos.',
	],
};
