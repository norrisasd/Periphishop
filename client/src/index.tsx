import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./app/store";
import reportWebVitals from "./reportWebVitals";
import theme from "./theme/theme";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import axios from "axios";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
axios.defaults.baseURL = "http://localhost:3001/api";
axios.defaults.headers.common["Authorization"] = "Sample Auth";

const persistor = persistStore(store);
root.render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <ChakraProvider theme={theme} resetCSS={true}>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
