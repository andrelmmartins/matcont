import { Classe } from '.';

export const numerosDecimais: Classe = {
	id: 'numerosDecimais',
	category: 'Pleno',
	teacher: 'MATCONT CONT',
	title: 'Números decimais',
	document: 'https://eac-music.vercel.app/matcont/AULA3 _NUMEROSDECIMAIS.pdf',
	questions: [
		{
			name: '1',
			correctLetter: 'e',
			options: ['R$ 4.550,00', 'R$ 4.250,00', 'R$ 4.000,00', 'R$ 3.850,50', 'R$ 3.850,00'],
			question:
				'Foi solicitado para o estagiário destacar um dado sobre o funcionário de uma empresa cliente, o salário mensal de um funcionário que trabalha na produção é de R$ 3.500,00. Além disso, ele recebe um bônus trimestral equivalente a 10% de seu salário mensal.\n\nDetermine o valor total que o funcionário receberá em um trimestre, considerando apenas o salário mensal e o bônus trimestral.',
			error: 'Para resolver a questão, os alunos precisarão calcular o valor do bônus trimestral (10% do salário mensal) e adicionar esse valor ao salário mensal. Isso envolve operações com números decimais, pois o bônus será uma fração do salário mensal.',
		},
	],
	background: require('../../assets/images/background1.jpeg'),
	content: [
		'Os números decimais são frequentemente utilizados na contabilidade para representar valores monetários de transações financeiras, demonstrações contábeis e relatórios financeiros. Aqui estão algumas maneiras pelas quais os números decimais estão diretamente relacionados a atividades contábeis:s',
		'Registro de Transações Financeiras: Ao registrar transações, como vendas, compras, despesas e receitas, os contadores lidam com valores em formato decimal. Por exemplo, ao registrar uma venda de um produto por R$ 500,00, esse valor seria representado como 500,00 em formato decimal.',
		'Cálculo de Balanços e Demonstrativos Financeiros: Ao preparar balanços patrimoniais, demonstrações de resultados e outros relatórios financeiros, os contadores realizam cálculos que envolvem números decimais. Por exemplo, ao calcular o lucro líquido de uma empresa, os contadores subtraem as despesas das receitas, que frequentemente resultam em números decimais.',
		'Cálculos de Impostos e Taxas: Na contabilidade, é comum lidar com cálculos de impostos, taxas e tarifas que envolvem números decimais. Por exemplo, ao calcular o imposto de renda de uma empresa, os contadores podem aplicar uma taxa decimal sobre o lucro tributável.',
		'Análise de Rentabilidade e Eficiência: Os contadores usam números decimais para calcular e analisar índices financeiros, como a margem de lucro, o retorno sobre o investimento (ROI) e a taxa de retorno. Esses cálculos ajudam na avaliação da rentabilidade e eficiência operacional de uma empresa.',
		'Orçamento e Previsão Financeira: Durante o processo de orçamento e previsão financeira, os contadores trabalham com números decimais para estimar receitas, despesas e fluxos de caixa futuros. Essas projeções são essenciais para o planejamento financeiro estratégico das organizações.',
		'Em resumo, os números decimais são uma parte fundamental da contabilidade, sendo usados em diversas atividades, desde o registro de transações até a análise financeira e o planejamento estratégico.',
	],
};
