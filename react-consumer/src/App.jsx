import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

window.cta.get("./Header").then((module) => {
  const Header = module().default;

  new Header({
      target: document.getElementById("header")
  })
});

window.cta.get("./CTA").then((module) => {
    const CTA = module().default;

    new CTA({
        target: document.getElementById("cta")
    })
})

const App = () => (
  <>
    <div id="header"/>
      <div id="cta"/>
    <div>Hi there, I'm React from Webpack 5.</div>
    <button onClick={() => window.addToCart(false)}>Add to Cart React!</button>
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));
