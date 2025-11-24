import { ChakraUIProvider } from "./chakra-ui/chakra-ui-provider";
import { JotaiProvider } from "./jotai/joitai-provider";
import { ReactRouterDomProvider } from "./router/react-router-dom-provider";

export const Providers = () => {
	return (
		<JotaiProvider>
			<ChakraUIProvider>
				<ReactRouterDomProvider />
			</ChakraUIProvider>
		</JotaiProvider>
	);
};
