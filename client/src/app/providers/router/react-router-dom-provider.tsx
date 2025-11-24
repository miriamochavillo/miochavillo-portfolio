import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "@app/routes/routes";

const router = createBrowserRouter(routes);

export const ReactRouterDomProvider = () => {
	return <RouterProvider router={router} />;
};
