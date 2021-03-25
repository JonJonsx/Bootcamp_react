var container = document.getElementById("app")



const Card = () =>{
  <React.Fragment>
    
  </React.Fragment>
}

const Container = () => {

}

const Botao = (props) =>{
  <button>{ texto }</button>
}


const Contador = props => {

  const [numero,setNumero] = React.useState(0);

  function somar() {
    setNumero(numero+1);
    console.log("somei e ficou =" + numero)
  }

  function subtrair() {
    setNumero(numero-1)
    console.log("subtrai e ficou =" + numero)
  }

  return (
    <React.Fragment>
      <h1>{props.titulo}</h1>
      <h2>{numero}</h2>
      <button onClick={somar} >+</button>
      <button onClick={subtrair} >-</button>
    </React.Fragment>
  )
}

const App = props => (
  <React.Fragment>
    {/* <h1>Vote no seu preferido</h1>
    <Contador titulo="Charmander" />
    <Contador titulo="Bulbassaur" />
    <Contador titulo="Squirtle" /> */}
  </React.Fragment>
)

ReactDOM.render(React.createElement(App, { titulo: "Eu vim de props" }, null), container);
//ReactDOM.render(App(), container);