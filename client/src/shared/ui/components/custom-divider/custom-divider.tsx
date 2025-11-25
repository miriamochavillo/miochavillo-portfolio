import { Divider } from "@chakra-ui/react";
import { appColors } from "@shared/ui/theme";

type Props = {
	borderColor?: string;
};

export const CustomDivider = ({
	borderColor = appColors.common.pink,
}: Props) => {
	return (
		<Divider
			orientation="horizontal"
			borderColor={borderColor}
			borderWidth="2px"
			rounded="2xl"
			mb={4}
		/>
	);
};
