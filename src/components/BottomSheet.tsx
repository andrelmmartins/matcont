import { Keyboard, View } from 'react-native';
import React, { forwardRef, Ref, useEffect, useImperativeHandle, useRef, useState } from 'react';
import BottomSheetComponent, {
	BottomSheetBackdrop,
	BottomSheetProps,
	BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { Portal } from '@gorhom/portal';

interface Props extends BottomSheetProps {
	children: React.ReactNode;
}

export interface BottomSheetFunctions {
	open: () => void;
	close: () => void;
}

function BottomSheet(props: Props, ref: Ref<BottomSheetFunctions>) {
	const bottomSheetRef = useRef<BottomSheetComponent>(null);

	const close = () => {
		bottomSheetRef.current?.close?.();
	};

	const open = () => {
		bottomSheetRef.current?.snapToIndex?.(0);
	};

	useImperativeHandle(ref, () => ({
		open,
		close,
	}));

	const [itsOpen, setItsOpen] = useState(false);

	useEffect(() => {
		if (!itsOpen) {
			Keyboard.dismiss();
		}
	}, [itsOpen]);

	return (
		<Portal>
			<BottomSheetComponent
				ref={bottomSheetRef}
				onClose={() => {
					if (itsOpen) {
						props.onClose?.();
						setItsOpen(false);
					}
				}}
				onAnimate={(to) => {
					setItsOpen(to === -1 ? false : true);
				}}
				index={-1}
				overDragResistanceFactor={5}
				enableDynamicSizing
				enablePanDownToClose={false}
				backdropComponent={({ ...backdropProps }) => (
					<BottomSheetBackdrop
						{...backdropProps}
						disappearsOnIndex={-1}
						appearsOnIndex={0}
						opacity={0.25}
						pressBehavior="none"
					/>
				)}
				style={{
					backgroundColor: '#F2F2F2',
				}}
				{...props}
			>
				<BottomSheetScrollView keyboardShouldPersistTaps="always">
					<View className="flex items-center px-4 py-8" style={{ gap: 24 }}>
						{props.children}
						<></>
					</View>
				</BottomSheetScrollView>
			</BottomSheetComponent>
		</Portal>
	);
}

export default forwardRef(BottomSheet);
