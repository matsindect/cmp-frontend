import React from "react";
import Header from "./app/features/header/header";
import Footer from "./app/features/footer";
import Router from "./app/configs/router"

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
