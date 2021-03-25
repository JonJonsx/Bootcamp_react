var container = document.getElementById("app")
// var titulo = document.createElement("h1")
// titulo.innerHTML = "Título inserido po JavaScripto :O \O/"
// container.appendChild(titulo)

function App(props){
  return (
    <React.Fragment>
      <h1>Eu vim do RecatO</h1>
      <h2>E eu sou um parágrafo</h2>
    </React.Fragment>
  );
}

ReactDOM.render(React.createElement(App,props,null), container);
//ReactDOM.render(App(), container);
