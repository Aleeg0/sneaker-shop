import React from 'react';
import Header from "./Components/Header";
import SneakerCard from "./Components/SneakerCard";
import {ReactComponent as FindLogo} from "./assets/finder.svg";
import Sneaker from "./Models/Sneaker";
import "./index.css"

function App() {
    const [sneakersList,setSnieakersList] = React.useState<Sneaker[]>([]);

    return (
        <div className="wrapper">

            <Header/>
            <main>
                <div className="contentInfo">
                    <h1>ALL Sneakers</h1>
                    <div className="searcher">
                        <FindLogo/>
                        <input
                            type="text"
                            placeholder="Search..."
                        />
                    </div>
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
