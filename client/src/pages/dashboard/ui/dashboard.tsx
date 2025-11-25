import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Card,
	Flex,
	Heading,
	Image,
	Text,
	VStack,
} from "@chakra-ui/react";
import { appColors, CustomDivider } from "@shared/ui";
import { motion } from "framer-motion";
import { useState } from "react";
import { NavigationButtons } from "./navigation-buttons";
import { Overview } from "./overview";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const fadeInUp = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
} as const;

export const Dashboard = () => {
	const [isExpanded, setIsExpanded] = useState(false);

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
				<MotionFlex
					direction="column"
					gap={8}
					initial="hidden"
					animate="visible"
				>
					<MotionBox
						variants={fadeInUp}
						custom={2}
						border="2px solid"
						borderColor={appColors.common.pink}
						rounded="2xl"
						justifyContent="center"
						alignItems="center"
						textAlign="center"
						color={appColors.common.dustyWhite}
						fontWeight="bold"
						fontSize="2xl"
						fontStyle="italic"
					>
						miriam imam ochavillo
					</MotionBox>

					<MotionBox variants={fadeInUp} custom={1}>
						<Image
							src="/src/app/assets/images/mountain.png"
							alt="hero"
							maxHeight="400px"
							objectFit="cover"
							w="100%"
							rounded="2xl"
						/>
					</MotionBox>

					<MotionBox
						variants={fadeInUp}
						custom={2}
						border="2px solid"
						borderColor={appColors.common.pink}
						rounded="2xl"
						justifyContent="center"
						alignItems="center"
						textAlign="center"
						color={appColors.common.dustyWhite}
						fontWeight="bold"
						fontSize="2xl"
						fontStyle="italic"
					>
						software engineering | portfolio
					</MotionBox>
				</MotionFlex>
			</Card>

			<MotionBox
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ once: true }}
			>
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
						<MotionBox
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
							viewport={{ once: true }}
						>
							<Text fontSize="18px" textAlign="center">
								Hi, I'm Miriam Ochavillo — a software engineer with a strong
								passion for building intuitive, efficient, and user-focused web
								applications.
								<br />I enjoy transforming ideas into functional products and
								solving real-world problems through clean code, thoughtful
								architecture, and continuous improvement. I’m a fast learner who
								thrives in dynamic environments, and I’m always eager to explore
								new technologies, tools, and development practices. Whether
								working independently or collaborating with a team, I bring
								curiosity, adaptability, and a commitment to producing
								high-quality work. I value open communication, shared learning,
								and helping create solutions that not only work well but also
								deliver meaningful impact. I’m always excited for new challenges
								and opportunities where I can grow, contribute, and support
								others in building something great.
							</Text>
							<Accordion
								allowToggle
								onChange={(index) => setIsExpanded(index === 0)}
							>
								<AccordionItem border="0px">
									<AccordionButton
										as={Button}
										variant="outline"
										color={appColors.hover.pink}
										border="none"
										_hover={{
											backgroundColor: "transparent",
											color: appColors.common.pink,
										}}
										w="fit-content"
										justifySelf="center"
									>
										{isExpanded ? "Read Less" : "Read More"}
									</AccordionButton>
									<AccordionPanel>
										<CustomDivider />
										<Overview />
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						</MotionBox>
					</Card>
					<Image
						src="/src/app/assets/images/purple.png"
						alt="Profile"
						maxHeight="400px"
						objectFit="cover"
						w="100%"
						rounded="2xl"
					/>
					<NavigationButtons />
				</Flex>
			</MotionBox>
		</VStack>
	);
};
