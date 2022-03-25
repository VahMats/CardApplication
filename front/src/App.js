import './App.css';
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import Footer from "./components/Footer";
import InstructionsComponent from "./components/InstructionsComponent";
import {useState} from "react";

function App() {

    const [cardsData, setCardsData] = useState(localStorage.cardsData ? [...localStorage.cardsData.split(',')] : []);

    localStorage.setItem("cardsData", `${cardsData}`);

    return (
        <div className="App">
        <div className="main-layout">
            <Header cardsData={cardsData} setCardsData={setCardsData}/>
            <MainComponent cardsData={cardsData} setCardsData={setCardsData}/>
            <Footer />
        </div>
            <InstructionsComponent />
        </div>
    );
}

export default App;
