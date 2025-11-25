import {
	Box,
	Card,
	Flex,
	Grid,
	GridItem,
	Heading,
	Image,
	Text,
	VStack,
} from "@chakra-ui/react";
import { paths } from "@shared/paths";
import { appColors } from "@shared/ui";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
	const navigate = useNavigate();
	return (
		<VStack alignItems="stretch" gap={0}>
			<Card
				bg={appColors.common.burgundy}
				height="calc(100vh - 64px)"
				borderRadius="0"
				shadow="none"
				p={4}
				display="flex"
				justifyContent="center"
			>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					<Flex direction="column" gap={8}>
						<Box
							border="2px solid"
							borderColor={appColors.common.pink}
							rounded="2xl"
							h="100px"
						/>
						<Image
							src="/src/app/assets/images/purple.png"
							alt="Profile"
							height="500px"
							objectFit="cover"
							w="100%"
							rounded="2xl"
						/>
						<Box
							border="2px solid"
							borderColor={appColors.common.pink}
							rounded="2xl"
							h="100px"
						/>
					</Flex>
				</motion.div>
			</Card>
			<Flex direction="column" gap={4} p={4} w="100%">
				<Card
					bg={appColors.common.dustyWhite}
					shadow="none"
					border="2px solid"
					borderColor={appColors.common.burgundy}
					p={4}
					gap={4}
					rounded="2xl"
				>
					<Heading
						fontStyle="italic"
						alignSelf="center"
						color={appColors.common.khaki}
					>
						Introduction
					</Heading>
					<Text fontSize="18px" textAlign="center">
						Hi, I'm Miriam Ochavillo — a software engineer with a strong passion
						for building intuitive, efficient, and user-focused web
						applications.
						<br /> I enjoy transforming ideas into functional products and
						solving real-world problems through clean code, thoughtful
						architecture, and continuous improvement. I’m a fast learner who
						thrives in dynamic environments, and I’m always eager to explore new
						technologies, tools, and development practices. Whether working
						independently or collaborating with a team, I bring curiosity,
						adaptability, and a commitment to producing high-quality work. I
						value open communication, shared learning, and helping create
						solutions that not only work well but also deliver meaningful
						impact. I’m always excited for new challenges and opportunities
						where I can grow, contribute, and support others in building
						something great.
					</Text>
				</Card>
				<Grid
					h="400px"
					templateRows="repeat(2, 1fr)"
					templateColumns="repeat(5, 1fr)"
					gap={4}
					p={0}
				>
					<GridItem
						rowSpan={2}
						colSpan={1}
						bg={appColors.common.khaki}
						_hover={{ bg: appColors.hover.khaki, cursor: "pointer" }}
						transition="background-color 0.3s ease"
						display="flex"
						justifyContent="center"
						alignItems="center"
					>
						<Heading
							color={appColors.common.dustyWhite}
							onClick={() => navigate(paths.profile)}
						>
							PROFILE
						</Heading>
					</GridItem>
					<GridItem
						colSpan={2}
						bg={appColors.common.pink}
						_hover={{ bg: appColors.hover.pink, cursor: "pointer" }}
						transition="background-color 0.3s ease"
						display="flex"
						justifyContent="center"
						alignItems="center"
					>
						<Heading
							color={appColors.common.dustyWhite}
							onClick={() => navigate(paths.experience)}
						>
							EXPERIENCE
						</Heading>
					</GridItem>
					<GridItem
						colSpan={2}
						bg={appColors.common.nature}
						_hover={{ bg: appColors.hover.nature, cursor: "pointer" }}
						transition="background-color 0.3s ease"
						display="flex"
						justifyContent="center"
						alignItems="center"
					>
						<Heading
							color={appColors.common.dustyWhite}
							onClick={() => navigate(paths.education)}
						>
							EDUCATION
						</Heading>
					</GridItem>
					<GridItem
						colSpan={4}
						bg={appColors.common.burgundy}
						_hover={{ bg: appColors.hover.burgundy, cursor: "pointer" }}
						transition="background-color 0.3s ease"
						display="flex"
						justifyContent="center"
						alignItems="center"
					>
						<Heading
							color={appColors.common.dustyWhite}
							onClick={() => navigate(paths.works)}
						>
							WORKS
						</Heading>
					</GridItem>
				</Grid>
			</Flex>
			<Box bg={appColors.common.pink} h="500px" />
		</VStack>
	);
};
