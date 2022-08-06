import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import rootStore from "./store/rootStore";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={rootStore}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
