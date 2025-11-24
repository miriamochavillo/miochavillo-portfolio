import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};
export const MainLayout = ({ children }: Props) => {
	return (
		<Box
			height="100dvh"
			width="100dvw"
			position="fixed"
			top="0"
			left="0"
			display="flex"
			flexDirection="column"
			bg="#FFE9EC"
		>
			{/* Main Content (Fills remaining space) */}
			<Box
				flex="1"
				display="flex"
				flexDirection="column"
				padding={4}
				overflowY="auto"
			>
				{children}
			</Box>
		</Box>
	);
};
