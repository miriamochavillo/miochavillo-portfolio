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
					{
						element: "Profile",
						path: paths.profile,
					},
					{
						element: "Experience",
						path: paths.experience,
					},
					{
						element: "Education",
						path: paths.education,
					},
					{
						element: "Works",
						path: paths.works,
					},
				],
			},
		],
	},
];
