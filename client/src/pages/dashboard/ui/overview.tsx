import {
	Box,
	Flex,
	Grid,
	GridItem,
	Heading,
	HStack,
	Icon,
	Image,
	ListItem,
	Text,
	UnorderedList,
	VStack,
} from "@chakra-ui/react";
import { educationData, profileInfo, skills } from "@shared/lib";
import { appColors, CustomDivider } from "@shared/ui";
import { FaEnvelope, FaGithub, FaMap, FaPhone } from "react-icons/fa";

const groupSkillsByType = (skillsArray: typeof skills) => {
	return skillsArray.reduce(
		(acc, curr) => {
			if (!acc[curr.skillType]) {
				acc[curr.skillType] = [];
			}
			acc[curr.skillType]?.push(curr.skill);
			acc[curr.skillType] = acc[curr.skillType] ?? [];
			return acc;
		},
		{} as Record<string, string[]>,
	);
};

export const Overview = () => {
	const skillsByType = groupSkillsByType(skills);

	return (
		<Flex
			direction="column"
			gap={4}
			bg={appColors.common.dustyWhite}
			w="100%"
			alignSelf="center"
			justifySelf="center"
			alignItems="center"
			justifyContent="center"
		>
			{/* Profile Header */}
			<HStack w="100%" gap={4} h="100%" alignItems="stretch">
				<Image
					src={profileInfo.avatar}
					alt="profile"
					flex={1}
					objectFit="cover"
					maxW="450px"
					rounded="2xl"
				/>
				<VStack gap={4} alignItems="flex-start" rounded="2xl">
					<Flex direction="column" gap={4}>
						<Heading fontStyle="italic" color={appColors.common.burgundy}>
							{profileInfo.name}
						</Heading>
						<Text color={appColors.common.khaki}>{profileInfo.title}</Text>
						<Box>
							<Flex alignItems="center" gap={2}>
								<Icon as={FaEnvelope} color={appColors.common.khaki} />
								<Text>{profileInfo.email}</Text>
							</Flex>
							<Flex alignItems="center" gap={2}>
								<Icon as={FaPhone} color={appColors.common.khaki} />
								<Text>{profileInfo.phone}</Text>
							</Flex>
							<Flex alignItems="center" gap={2}>
								<Icon as={FaMap} color={appColors.common.khaki} />
								<Text>{profileInfo.location}</Text>
							</Flex>
							<Flex alignItems="center" gap={2}>
								<Icon as={FaGithub} color={appColors.common.khaki} />
								<Text>{profileInfo.github}</Text>
							</Flex>
						</Box>
					</Flex>
					<CustomDivider borderColor={appColors.common.nature} />
					<Flex
						direction="column"
						gap={4}
						p={4}
						rounded="xl"
						h="100%"
						border="2px solid"
						borderColor={appColors.common.pink}
					>
						<Heading fontStyle="italic" color={appColors.common.khaki}>
							About Me
						</Heading>
						<CustomDivider />
						<Text color={appColors.common.burgundy}>{profileInfo.aboutMe}</Text>
					</Flex>
				</VStack>
			</HStack>

			<CustomDivider />

			<Grid
				templateColumns={{ base: "1fr", md: "1fr 2fr" }} // 1 column on mobile, 2 on medium+
				gap={4}
				w="100%"
			>
				<GridItem>
					<Flex
						direction="column"
						gap={4}
						p={4}
						alignItems="flex-start"
						bg={appColors.common.khaki}
						rounded="xl"
						height="100%"
					>
						<Heading fontStyle="italic" color={appColors.common.dustyWhite}>
							Education
						</Heading>
						<CustomDivider />
						{educationData.map((item) => (
							<Box key={item.school} color={appColors.common.dustyWhite}>
								<Text
									fontWeight="bold"
									color={appColors.common.pink}
									fontSize="lg"
								>
									{item.school}
								</Text>
								<Text fontStyle="italic">{item.level}</Text>
								<Text>{item.details.join(" | ")}</Text>
							</Box>
						))}
					</Flex>
				</GridItem>
				<GridItem>
					<Flex
						direction="column"
						gap={4}
						bg={appColors.common.pink}
						p={4}
						rounded="xl"
					>
						<Heading fontStyle="italic" color={appColors.common.burgundy}>
							Technical Skills
						</Heading>
						<CustomDivider borderColor={appColors.common.khaki} />

						<Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={4}>
							{Object.entries(skillsByType).map(([type, skillsList]) => (
								<Box
									key={type}
									rounded="2xl"
									bg={appColors.common.burgundy}
									p={4}
									color={appColors.common.dustyWhite}
									fontWeight="bold"
									flex={1}
								>
									<Text fontSize="lg" fontStyle="italic">
										{type}
									</Text>
									<Box display="flex">
										<UnorderedList
											color={appColors.common.dustyWhite}
											spacing={1}
										>
											{skillsList.map((skill) => (
												<ListItem key={skill}>{skill}</ListItem>
											))}
										</UnorderedList>
									</Box>
								</Box>
							))}
						</Box>
					</Flex>
				</GridItem>
			</Grid>
		</Flex>
	);
};
