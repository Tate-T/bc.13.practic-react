import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import App from "./App";
import TransactionsProvider from "./context/TransactionsProvider";
import CategoriesProvider from "./context/CategoriesProvider";
import {store} from "./redux/store"
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
   <BrowserRouter>
      <TransactionsProvider>
        <CategoriesProvider>
          <App />
        </CategoriesProvider>
      </TransactionsProvider>
    </BrowserRouter>
   </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
