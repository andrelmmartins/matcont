import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Svg, Path } from 'react-native-svg';
import { useForm } from 'react-hook-form';

import Question from '@/src/components/Question';
import { Classe } from '@/src/classes';
import BottomSheet, { BottomSheetFunctions } from '@/src/components/BottomSheet';
import { ChallengeResult, useMail } from '@/src/context/MailContext';
import Button from '@/src/components/Button';
import Header from '@/src/components/Header';

export default function Challenge() {
	const { top, bottom } = useSafeAreaInsets();
	const { classe: stringifiedClasse } = useLocalSearchParams();
	if (typeof stringifiedClasse !== 'string') return <></>;

	const classe = JSON.parse(stringifiedClasse) as Classe;
	const { control, handleSubmit, setError } = useForm();

	const confirmation = useRef<BottomSheetFunctions>(null);
	const [canRevealAnswer, setCanRevealAnswer] = useState(false);
	const [score, setScore] = useState<number>();

	const [loading, setLoading] = useState(false);

	const { send, sending } = useMail();

	const getChallengeScore = (answers: Record<string, string>) => {
		const eachQuestionHasScore = 10 / classe.questions.length;
		let score = 0;

		const answerSheet = Object.fromEntries(
			classe.questions.map((question) => [
				question.name,
				{ correct: question.correctLetter, error: question.error },
			]),
		);

		Object.entries(answers).forEach(([question, selected]) => {
			if (answerSheet[question].correct === selected) score += eachQuestionHasScore;
			else setError(question, { message: answerSheet[question].error });
		});

		return score;
	};

	const onSubmit = async (answers: Record<string, string>) => {
		if (!canRevealAnswer) {
			confirmation.current?.open?.();
		} else {
			setLoading(true);

			const scoreTemp = getChallengeScore(answers);
			setScore(scoreTemp);

			const challengeResult: ChallengeResult = {
				classe,
				score: scoreTemp,
				date: new Date().toISOString(),
				answers,
			};

			await send(challengeResult);

			setLoading(false);
		}
	};

	useEffect(() => {
		if (canRevealAnswer) {
			handleSubmit(onSubmit)();
		}
	}, [canRevealAnswer]);

	return (
		<>
			<View className="flex items-center bg-white h-full" style={{ gap: 32 }}>
				<ScrollView className="px-6 w-full" contentContainerStyle={{ flexGrow: 1, paddingTop: top + 32 }}>
					<Header back />

					<View className="flex mt-4" style={{ gap: 16, paddingBottom: bottom + 32 }}>
						<Text className="text-3xl font-bold text-blue-dark text-center mb-4">{classe.title}</Text>

						{score && (
							<View className="bg-blue-dark flex flex-row items-center justify-between p-4 rounded-lg">
								<Text className="text-white font-bold text-xl">Nota:</Text>
								<Text className="text-white font-bold text-xl">{score.toPrecision(2)}/10</Text>
							</View>
						)}

						{classe.questions.map((question, i) => (
							<Question
								{...question}
								control={control}
								canRevealAnswer={canRevealAnswer}
								key={`question-${i}`}
							/>
						))}

						<Button
							label="Submeter desafio"
							icon={
								<Svg
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="#F2F2F2"
									className="w-6 h-6"
								>
									<Path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
									/>
								</Svg>
							}
							variant="primary"
							style={{ opacity: canRevealAnswer ? 0.3 : 1 }}
							disabled={canRevealAnswer}
							onPress={handleSubmit(onSubmit)}
							className="mt-8"
							loading={loading || sending}
						/>
					</View>
				</ScrollView>
			</View>
			<BottomSheet ref={confirmation}>
				<Text className="text-center font-bold text-xl">Tem certeza?</Text>
				<Text className="text-center text-lg">
					Você está prestes a submeter o desafio <Text className="font-bold">{classe.title}</Text>
				</Text>
				<Button
					label="Confirmar"
					variant="primary"
					className="mt-4"
					onPress={() => {
						setCanRevealAnswer(true);
						confirmation.current?.close?.();
					}}
				/>
				<Button label="Cancelar" className="-mt-2" onPress={confirmation.current?.close} />
			</BottomSheet>
		</>
	);
}
