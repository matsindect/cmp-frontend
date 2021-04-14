import React from "react";
import Header from "./features/header/header";
import Footer from "./features/footer";
import RenderRoutes from "./router";
import ROUTES from "./router/routes";

function App() {
  return (
    <div className="App">
      <Header />
      <RenderRoutes routes={ROUTES} />
      <Footer />
    </div> 
  );
}

export default App;
