import React from "react";
import Header from "./features/header/header";
import Footer from "./features/footer";
import Router from "./router"
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Header />
          <Router />
          <Footer />
        </div>
      </Provider>       
    </BrowserRouter>
  );
}

export default App;
