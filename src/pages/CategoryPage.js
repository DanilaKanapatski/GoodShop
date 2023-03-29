import { Box, Grid } from "@mui/material";
import { ItemsList, ItemsMenu } from "../components";
import { useParams } from "react-router";

const CategoryPage = () => {
	const { categoryType } = useParams();

	console.log(categoryType);

	return (
		<Grid
			item
			display="grid"
			gridTemplateColumns="repeat(12, 1fr)"
			sm={12}
			pt={2}
			maxHeight={400}
		>
			<Box gridColumn="span 2">
				<ItemsMenu />
			</Box>
			<Box gridColumn="span 10" pr={2} pl={2}>
				<ItemsList />
			</Box>
		</Grid>
	);
};

export default CategoryPage;