import { DashboardContainer } from "@pages/dashboard";
import { paths } from "@shared/paths";
import { MainLayout } from "@shared/ui";
import { Outlet, type RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
	{
		ErrorBoundary: () => null,
		children: [
			{
				element: (
					<MainLayout>
						<Outlet />
					</MainLayout>
				),
				children: [
					{
						element: <DashboardContainer />,
						path: paths.home,
					},
				],
			},
		],
	},
];
