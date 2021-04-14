import React from "react";
import Header from "./features/header/header";
import Home from "./app/homePage";
import Footer from "./features/footer";
import Router from "./router"

function App() {
  return (
    <div className="App">
      <Header />
      <Router  />
      <Footer />
    </div>
  );
}

export default App;
