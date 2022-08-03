import "./App.css";
import Nav from "./Nav";
import Head from "./Head";
import Section from "./Section";
import Quiz from "./Quiz";
import Footer from "./Footer";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className="app-cont">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Head/>}/>
        <Route exact path="/section" element={<Section/>}/>
        <Route exact path="/quiz" element={<Quiz/>}/>
      </Routes>
      
     
     
      <Footer/>
    </div>
  );
}

export default App;
