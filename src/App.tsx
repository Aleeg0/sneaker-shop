import React from 'react';
import Header from "./Components/Header";
import "./index.css"
import SneakerCard from "./Components/SneakerCard";

function App() {
    return (
      <div className="wrapper">
          <Header/>
          <main>
              <div className="d-flex justify-between">
                  <h1>ALL Sneakers</h1>
                  <input />
              </div>
              <div className="content">
                  <SneakerCard/>
                  <SneakerCard/>
                  <SneakerCard/>
                  <SneakerCard/>
                  <SneakerCard/>
                  <SneakerCard/>
                  <SneakerCard/>
                  <SneakerCard/>
              </div>
          </main>
      </div>
)
    ;
}

export default App;
