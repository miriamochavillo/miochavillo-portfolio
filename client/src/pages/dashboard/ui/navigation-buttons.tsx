import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { paths } from "@shared/paths";
import { appColors } from "@shared/ui";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const NavigationButtons = () => {
	const navigate = useNavigate();
	const MotionGridItem = motion(GridItem);

	return (
		<Grid
			h="400px"
			gap={4}
			p={0}
			templateRows="repeat(2, 1fr)"
			templateColumns="repeat(5, 1fr)"
		>
			{/* PROFILE */}
			<MotionGridItem
				rowSpan={2}
				colSpan={1}
				bg={appColors.common.khaki}
				display="flex"
				justifyContent="center"
				alignItems="center"
				whileHover={{ scale: 1.01 }}
				whileTap={{ scale: 0.97 }}
				transition={{ duration: 0.2 }}
				_hover={{
					cursor: "pointer",
					bg: appColors.hover.khaki,
					transition: "background-color 0.3s ease",
				}}
				onClick={() => navigate(paths.profile)}
			>
				<Heading color={appColors.common.dustyWhite}>PROFILE</Heading>
			</MotionGridItem>

			{/* EXPERIENCE */}
			<MotionGridItem
				colSpan={2}
				bg={appColors.common.pink}
				display="flex"
				justifyContent="center"
				alignItems="center"
				whileHover={{ scale: 1.01 }}
				whileTap={{ scale: 0.97 }}
				transition={{ duration: 0.2 }}
				_hover={{
					cursor: "pointer",
					bg: appColors.hover.pink,
					transition: "background-color 0.3s ease",
				}}
				onClick={() => navigate(paths.experience)}
			>
				<Heading color={appColors.common.dustyWhite}>EXPERIENCE</Heading>
			</MotionGridItem>

			{/* EDUCATION */}
			<MotionGridItem
				colSpan={2}
				bg={appColors.common.nature}
				display="flex"
				justifyContent="center"
				alignItems="center"
				whileHover={{ scale: 1.01 }}
				whileTap={{ scale: 0.97 }}
				transition={{ duration: 0.2 }}
				_hover={{
					cursor: "pointer",
					bg: appColors.hover.nature,
					transition: "background-color 0.3s ease",
				}}
				onClick={() => navigate(paths.education)}
			>
				<Heading color={appColors.common.dustyWhite}>EDUCATION</Heading>
			</MotionGridItem>

			{/* WORKS */}
			<MotionGridItem
				colSpan={4}
				bg={appColors.common.burgundy}
				display="flex"
				justifyContent="center"
				alignItems="center"
				whileHover={{ scale: 1.01 }}
				whileTap={{ scale: 0.97 }}
				transition={{ duration: 0.2 }}
				_hover={{
					cursor: "pointer",
					bg: appColors.hover.burgundy,
					transition: "background-color 0.3s ease",
				}}
				onClick={() => navigate(paths.works)}
			>
				<Heading color={appColors.common.dustyWhite}>WORKS</Heading>
			</MotionGridItem>
		</Grid>
	);
};
