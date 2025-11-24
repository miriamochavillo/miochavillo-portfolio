import { Box, Card, SimpleGrid, Text } from "@chakra-ui/react";

export const Dashboard = () => {
	return (
		<Card bg="#66021f" p={6}>
			<SimpleGrid columns={2} gap={20}>
				<Box
					display="flex"
					flexDirection="column"
					gap={0}
					gridColumn="span 1"
					alignItems="end"
					justifyContent="center"
					height="calc(100vh - 80px)"
				>
					<Text
						color="white"
						fontSize="150px"
						fontWeight="bold"
						fontFamily="serif"
						fontStyle="italic"
					>
						Portfolio
					</Text>
					<Text color="white" fontSize="20px" fontFamily="Helvetica Neue">
						Miriam Ochavillo | Software Engineer
					</Text>
				</Box>
				<Box
					display="flex"
					bg="white"
					p={4}
					borderRadius="md"
					gridColumn="span 1"
					width="400px"
					height="500px"
					alignItems="center"
					justifyContent="center"
					alignSelf="center"
				/>
			</SimpleGrid>
		</Card>
	);
};
