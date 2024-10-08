import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./redux/store.js";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {theme} from "./theme.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        </ThemeProvider>
    </StrictMode>,
)
