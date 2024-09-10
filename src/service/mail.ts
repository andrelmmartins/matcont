import axios from 'axios';

export const api = axios.create();

export interface EmailRecipient {
	email: string;
	name: string;
}

export interface SendMailPayload {
	from: EmailRecipient;
	to: EmailRecipient[];
	cc?: EmailRecipient[];
	subject: string;
	html: string;
}

export const sendMail = (payload: SendMailPayload) => {
	return api.post('https://api.mailersend.com/v1/email', payload, {
		headers: {
			Authorization: `Bearer mlsn.5d356c44843fbb71e7322e4e58cb819ee824128d6538916b09d158e6b9914c82`,
		},
	});
};
