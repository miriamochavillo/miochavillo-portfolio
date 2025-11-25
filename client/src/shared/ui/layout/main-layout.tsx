import {
	Box,
	Drawer,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Heading,
	IconButton,
	Text,
	useBreakpointValue,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import type { ReactNode } from "react";
import React from "react";
import { FaBars } from "react-icons/fa";
import { appColors } from "../theme";

type Props = {
	children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef<HTMLButtonElement>(null);

	// Determine if the drawer should be used (mobile/small screens)
	const isMobile = useBreakpointValue({ base: true, md: false });

	const menuItems = (
		<>
			<Text>About</Text>
			<Text>Works</Text>
			<Text>Contact</Text>
		</>
	);

	return (
		<Box
			height="100dvh"
			width="100dvw"
			display="flex"
			flexDirection="column"
			bg={appColors.common.dustyWhite}
		>
			<Flex p={4} justifyContent="space-between" alignItems="center">
				<Heading
					color={appColors.common.burgundy}
					fontSize="3xl"
					fontWeight={1000}
					fontStyle="italic"
					_hover={{
						cursor: "pointer",
						color: appColors.common.khaki,
						transition: "color 0.3s ease",
					}}
				>
					Miriam Ochavillo
				</Heading>

				{isMobile ? (
					<>
						<IconButton
							aria-label="Open menu"
							icon={<FaBars />}
							onClick={onOpen}
						/>
						<Drawer
							isOpen={isOpen}
							placement="right"
							onClose={onClose}
							finalFocusRef={btnRef}
						>
							<DrawerOverlay />
							<DrawerContent bg={appColors.common.pink}>
								<DrawerCloseButton />
								<DrawerHeader>Menu</DrawerHeader>
								<VStack alignItems="flex-start" p={4}>
									{menuItems}
								</VStack>
							</DrawerContent>
						</Drawer>
					</>
				) : (
					<Flex gap={4}>{menuItems}</Flex>
				)}
			</Flex>

			{/* Main Content */}
			<Box flex="1" display="flex" flexDirection="column" overflowY="auto">
				{children}
			</Box>
		</Box>
	);
};
