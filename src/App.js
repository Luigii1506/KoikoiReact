import logo from "./logo.svg";
import "./App.css";
import CardServices from "./components/CardServices";


function App() {
  return (
    <div className="App">
      <div className="App-body">
        {/*
         <CardServices
          title="DISEÑO"
          text="Este texto es de prueba diseño, Este texto es de prueba diseño,Este texto es de prueba diseño,Este texto es de prueba diseño"
          background="linear-gradient(to right, #4bcbd6, #00b5e9, #0099fd, #0076ff, #543de8)"
        />
       <CardServices
          title="WEB"
          text="Este texto es de prueba WEB, Este texto es de prueba diseño,Este texto es de prueba diseño,Este texto es de prueba diseño"
          background="linear-gradient(to right, #d64b76, #f06348, #e59000, #b4bf00, #3de844)"
       />
        <CardServices
          title="ANIMACION"
          text="Este texto es de prueba diseño, Este texto es de prueba diseño,Este texto es de prueba diseño,Este texto es de prueba diseño"
          background="linear-gradient(to right, #d64b76, #f06348, #e59000, #b4bf00, #3de844)"
        />
         */ 
        } 
        <div className="first-section-title">
          <p>Si no te han visto </p>
        </div>
        <div className="first-section-subtitle">
          <p>es porque NO nos habias visto</p>
        </div>
        <div className="first-section-text">
          <p>el estudio creativo que estabas esperando</p>
        </div>
        <div className="first-section-bold">
          <p>¿Qué podemos hacer por ti?</p>
        </div>
        
      </div>
    </div>
  );
}

export default App;
