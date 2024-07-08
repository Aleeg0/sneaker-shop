import React from 'react';
import Header from "./Components/Header";
import "./index.css"
import SneakerCard from "./Components/SneakerCard";

function App() {
    return (
      <div className="wrapper">
          <Header/>
          <main>
              <h1>ALL Sneakers</h1>
              <div className="content">
                  <SneakerCard/>
              </div>
          </main>
      </div>
)
    ;
}

export default App;
