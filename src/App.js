import { BasicLayout } from "./components/Layout";
import { theme } from "./styles/theme";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <div>
                <BasicLayout />
            </div>
        </ChakraProvider>
    );
}

export default App;
