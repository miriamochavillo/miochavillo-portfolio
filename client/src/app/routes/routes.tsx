import { paths } from "@shared/paths";
import type { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
	{
		ErrorBoundary: () => null,
		children: [
			{
				element: "Home",
				path: paths.home,
			},
		],
	},
];
