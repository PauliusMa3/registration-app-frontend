import ReservationsCalendar from "./components/reservationsCalendar/reservationsCalendar";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Form from "./components/Form/Form";
import Tabs from "./components/Tabs/Tabs";
import { AppContainer, TabTilesContainer } from "./App.styles";

const GlobalStyle = createGlobalStyle`
    html {
      font-size: 62.5%;
    }

    html, body {
        padding: 0;
        margin: 0;
    }

    *, *::before, *::after {
      box-sizing: border-box;
    }

    h1,h2,h3, h4, p, body {
      margin: 0;
      font-size: 1.6rem;
    }

    h3 {
      font-weight: normal;
    }

    button {
      border: none;
    }
`;

const theme = {
    colors: {
        colorPrimary400: "#4880f3",
        colorError: "#fd0e0e",
        colorSecondary100: "#fff",
        colorSecondary200: "#e5e5e5",
        colorSecondary300: "#e0e0e0",
        colorSecondary800: "#0E0E0E"
    }
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <AppContainer>
                <Tabs>
                    <TabTilesContainer>
                        <Tabs.Tab label='registration'>
                            <h3>Appointment registration</h3>
                        </Tabs.Tab>
                        <Tabs.Tab label='calendar'>
                            Appointment calendar
                        </Tabs.Tab>
                    </TabTilesContainer>

                    <Tabs.Panel label='registration'>
                        <Form />
                    </Tabs.Panel>
                    <Tabs.Panel label={"calendar"}>
                        <ReservationsCalendar />
                    </Tabs.Panel>
                </Tabs>
            </AppContainer>
        </ThemeProvider>
    );
}

export default App;
