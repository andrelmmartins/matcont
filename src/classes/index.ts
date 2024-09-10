import { QuestionProps } from '../components/Question';
import { dizima } from './dizima';
import { expressoes } from './expressoes';
import { numerosDecimais } from './numerosDecimais';
import { porcentagem } from './porcentagem';
import { razoes } from './razoes';

export interface Classe {
	id: string;
	title: string;
	content: string[];
	document: string;
	questions: Omit<QuestionProps, 'control' | 'canRevealAnswer'>[];
	category: 'Junior' | 'Pleno' | 'Senior';
	teacher: string;
	background: any;
}

export const classes: Classe[] = [razoes, dizima, expressoes, numerosDecimais, porcentagem];
