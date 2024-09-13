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

export const sendMail = (payload: SendMailPayload, apiKey: string) => {
	return api.post('https://api.mailersend.com/v1/email', payload, {
		headers: {
			Authorization: `Bearer ${apiKey}`,
		},
	});
};
