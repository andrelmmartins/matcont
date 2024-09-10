import { Classe } from '.';

export const porcentagem: Classe = {
	id: 'porcentagem',
	category: 'Senior',
	teacher: 'MATCONT CONT',
	title: 'Porcentagem',
	document: 'https://eac-music.vercel.app/matcont/AULA5 _PORCENTAGEM.pdf',
	questions: [
		{
			name: '1',
			correctLetter: 'd',
			options: ['162,50', '152,00', '2652,50', '2662,50', '2462,50'],
			question:
				'O setor de produção o funcionário do setor de acabamento estava ganhando até no mês passado R$ 2.500,00 por mês, porém neste mês eles terão um aumento de 6,5%.\n\nQuanto o auxiliar passou a receber (R$)?																																																				',
			error: 'Observe que o novo salário corresponde a soma do anterior mais a parcela correspondente ao reajuste.\nSalário atualizado = 2.500 + 162,50 = 2.662,50',
		},
	],
	background: require('../../assets/images/background1.jpeg'),
	content: [
		'A porcentagem é um conceito fundamental na contabilidade e é amplamente utilizado em diversas atividades contábeis. Aqui estão algumas maneiras de como a porcentagem está relacionada com atividades contábeis:',
		'Cálculo de Impostos: Na contabilidade, os contadores frequentemente lidam com o cálculo de impostos sobre lucros, vendas, propriedades e outros tipos de transações comerciais. As taxas de imposto são frequentemente expressas em termos de porcentagem. Os contadores utilizam essas porcentagens para calcular os valores de imposto devido com base nos valores financeiros relevantes.',
		'Análise de Margens e Lucratividade: As porcentagens são utilizadas para calcular as margens de lucro e outras métricas de rentabilidade. Por exemplo, a margem de lucro bruto é calculada como a porcentagem da receita total que permanece após a dedução dos custos dos produtos vendidos. Isso ajuda na avaliação do desempenho financeiro de uma empresa e na identificação de áreas que precisam de melhorias.',
		'Variações de Custos e Despesas: Na contabilidade de custos, as porcentagens são frequentemente utilizadas para analisar variações de custos e despesas em relação a padrões pré-estabelecidos. Por exemplo, ao calcular as variações de custo de produção, os contadores comparam os custos reais com os custos padrão expressos em termos percentuais, identificando assim áreas de ineficiência ou eficiência na produção.',
		'Análise de Fluxo de Caixa: As porcentagens são utilizadas na análise do fluxo de caixa para determinar a proporção de entradas e saídas de caixa em relação ao total de receitas ou despesas. Isso ajuda na avaliação da saúde financeira de uma empresa e na identificação de problemas de liquidez.',
		'Determinação de Descontos e Bonificações: As porcentagens são frequentemente utilizadas na contabilidade para calcular descontos comerciais, bonificações e outras formas de incentivos oferecidos a clientes ou fornecedores. Os contadores calculam esses valores com base em uma porcentagem do valor total das transações comerciais.',
		'Em resumo, a porcentagem desempenha um papel essencial em diversas atividades contábeis, desde o cálculo de impostos até a análise de rentabilidade e tomada de decisões financeiras estratégicas.',
	],
};
