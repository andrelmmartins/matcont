import { Text } from 'react-native';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SubmitHandler, useForm } from 'react-hook-form';
import { usePathname } from 'expo-router';

import { Classe } from '../classes';
import { EmailRecipient, sendMail } from '../service/mail';
import BottomSheet, { BottomSheetFunctions } from '../components/BottomSheet';
import Input from '../components/Input';
import { validateEmail } from '../utils/validate';
import Button from '../components/Button';
import { useNotification } from './NotificationContext';

export interface ChallengeResult {
	classe: Classe;
	score: number;
	date: string;
	answers: Record<string, string>;
}

interface Props {
	send: (result: ChallengeResult) => Promise<void>;
	sending: boolean;

	challengeData: Record<string, ChallengeResult>;
	setChallengeData: (data: Record<string, ChallengeResult>) => void;
}

const MailContext = createContext({} as Props);

const storageUser = 'matcont-user';
const storageChallenges = 'matcont-challenges';

export default function MailProvider(props: { children: React.ReactNode }) {
	const [sending, setSending] = useState(false);
	const [user, setUser] = useState<EmailRecipient>();
	const [challengeData, setChallengeData] = useState<Record<string, ChallengeResult>>({});
	const { notify } = useNotification();

	async function send(result: ChallengeResult) {
		if (user) {
			setSending(true);

			try {
				const temp = { ...challengeData };
				temp[result.classe.id] = result;
				setChallengeData(temp);

				AsyncStorage.setItem(storageChallenges, JSON.stringify(challengeData));

				await sendMail({
					to: [{ email: 'andre.lucas.medeir+professor@gmail.com', name: 'André' }],
					cc: [user],
					from: {
						email: 'matcont@trial-3vz9dlek58qlkj50.mlsender.net',
						name: 'MatCont',
					},
					html: generateEmail(result, user),
					subject: `Olá, acabo de realizar o desafio de ${result.classe.title}`,
				});

				notify({ variant: 'success', title: 'Desafio submetido!' });
			} catch (e) {
				notify({
					variant: 'warning',
					title: 'Houve um erro tentando enviar o e-mail',
				});
			} finally {
				setSending(false);
			}
		} else {
			notify({
				variant: 'warning',
				title: 'Você não informou seus dados de usuário',
			});
		}
	}

	const bottomSheetRef = useRef<BottomSheetFunctions>(null);
	const { control, handleSubmit } = useForm<EmailRecipient>();

	const onSubmit: SubmitHandler<EmailRecipient> = async (data) => {
		const trimed = { name: data.name.trim(), email: data.email.trim().toLowerCase() };

		setUser(trimed);
		await AsyncStorage.setItem(storageUser, JSON.stringify(trimed));
		bottomSheetRef.current?.close?.();
	};

	useEffect(() => {
		AsyncStorage.getItem(storageUser).then((loadedUser) => {
			if (loadedUser) setUser(JSON.parse(loadedUser));
		});

		AsyncStorage.getItem(storageChallenges).then((loadedData) => {
			if (loadedData) setChallengeData(JSON.parse(loadedData));
		});
	}, []);

	const pathname = usePathname();

	useEffect(() => {
		if (pathname === '/classe') {
			if (!user?.email) {
				bottomSheetRef.current?.open?.();
			}
		} else bottomSheetRef.current?.close?.();
	}, [pathname]);

	return (
		<MailContext.Provider
			value={{
				send,
				sending,
				challengeData,
				setChallengeData,
			}}
		>
			{props.children}

			<BottomSheet ref={bottomSheetRef}>
				<>
					<Text className="text-center font-bold text-xl">Seja bem-vindo!</Text>
					<Text className="text-center mb-4">
						Para que você possa aproveitar o nosso curso, você precisa fornecer o seu nome e seu e-mail para
						futuras comunicações.
					</Text>
					<Input
						control={control}
						name="name"
						label="Nome"
						textContentType="name"
						rules={{
							required: 'Informe seu nome',
						}}
					/>
					<Input
						className="-mt-2"
						control={control}
						name="email"
						label="E-mail"
						textContentType="emailAddress"
						keyboardType="email-address"
						rules={{
							required: 'Informe o e-mail',
							validate: (value) => validateEmail(value) || 'E-mail inválido',
						}}
					/>
					<Button label="Salvar" variant="primary" className="mt-4" onPress={handleSubmit(onSubmit)} />
				</>
			</BottomSheet>
		</MailContext.Provider>
	);
}

export const useMail = () => useContext(MailContext);

function generateEmail(result: ChallengeResult, user: EmailRecipient) {
	return mailContent
		.replaceAll('[classe-title]', result.classe.title)
		.replaceAll('[user-name]', user.name)
		.replaceAll('[user-email]', user.email)
		.replaceAll('[score]', result.score.toPrecision(2))
		.replaceAll('[score-total]', '10')
		.replaceAll('[questions]', generateQuestions(result));
}

function generateQuestions(result: ChallengeResult) {
	let html = '';

	result.classe.questions.forEach((question) => {
		let div = `<div class="bottom" style="border-top: 1px solid #ccc; padding-top: 32px; padding-bottom: 32px;"><h6 style="margin: 0; line-height: 16px; font-size: 12px; font-weight: 700; margin-bottom: 16px;">${question.question.replaceAll('\\n', '<br/>')}</h6>`;

		const letters = ['a', 'b', 'c', 'd', 'e'];

		question.options.forEach((option, i) => {
			let p = `<p style="margin: 0; font-weight: 400; font-size: 10px; line-height: 16px;">[content]</p>`;
			let strong = `<strong style="font-weight: 700; color: #2f2f2f;">[content]</strong>`;
			const correta = '<strong style="font-weight: 700; color: #2f2f2f;"> - CORRETA</strong>';

			let optionFormated = `${letters[i]}) ${option}`;

			if (result.answers[question.name] === letters[i]) p = p.replace('[content]', strong);
			if (letters[i] === question.correctLetter) optionFormated += correta;

			div += p.replace('[content]', optionFormated);
		});

		div += '</div>';
		html += div;
	});

	return html;
}

const mailContent = `
<!DOCTYPE html>
<html lang="pt-BR" style="background: #F2F2F2;">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
  </head>
  <body style="margin: 0;">
    <div class="wrapper-content" style="background: #F2F2F2; box-sizing: border-box; padding: 24px;">
      <div class="body-content" style="width: 100%; max-width: 768px; border-radius: 8px; margin: auto; overflow: hidden; background: #fbfbfb; color: #F2F2F2; font-family: 'Roboto', Roboto, sans-serif; text-align: center;">
        <div class="header" style="padding: 24px; box-sizing: border-box; background: #57B7F2;">
          <div style="background: #fff; padding: 16px; border-radius: 8px; width: fit-content; margin: auto;">
            <img src="https://eac-music.vercel.app/matcont/logo.png" style="display: block; width: 88px; height: 100px;" width="88" height="100">
          </div>
        </div>

        <div class="heading-content"></div>

        <div class="main-content" style="width: 100%; max-width: 512px; padding: 0 16px; margin: auto; box-sizing: border-box; padding-top: 40px;">
          <h3 style="margin: 0; font-size: 24px; line-height: 32px; margin-bottom: 16px; font-weight: 700; color: #0583F2;">
            [classe-title]
          </h3>

          <h6 class="text-gray" style="margin: 0; font-weight: 400; font-size: 14px; line-height: 16px; color: #565659;">
            [user-name] ([user-email]) acaba de finalizar o desafio do curso <strong style="font-weight: 700; color: #2f2f2f;">[classe-title]</strong>
          </h6>

          <h3 style="margin: 0; font-size: 24px; line-height: 32px; margin-bottom: 16px; margin-top: 16px; font-weight: 700; color: #0583F2;">
            [score]/[score-total]
          </h3>
        </div>

        <div class="footer text-gray" style="margin: 32px 16px 0; color: #565659;">
          [questions]
        </div>

      </div>
    </div>
  </body>
</html>
`;
