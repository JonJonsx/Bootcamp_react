var container = document.getElementById("app")



const Botton = (props) =>{

  const cardStyle = {
    backgroundColor : props.cor || '#f00',
    borderColor: props.cor || '#f00',
  }

  return(
    <button className="Button" style={cardStyle} onClick={props.opcao}>{props.objetivo}</button>
  )
}


const Card = (props) => {

  const cardStyle = {
    backgroundColor : props.cor || '#f00',
    borderColor: props.cor || '#f00',
  }

  const [numero, setNumero] = React.useState(0);

  function somar() {
    setNumero(numero + 1);
    console.log("somei e ficou =" + numero)
  }
  
  function subtrair() {
    setNumero(numero - 1)
    console.log("subtrai e ficou =" + numero)
  }

  return (
    <div className="Card" style={cardStyle}>
      <div clasName="title">
        <h4>{props.nome}</h4>
      </div>
      <div className="sprite">
        <img src="./sprite1" alt=""/>
      </div>
      <div className="votos">
        <h3>Votos: {numero}</h3>
      </div>
      <div className="buttons">
        <Botton opcao={somar} cor={props.botao1} objetivo="+"/>
        <Botton opcao={subtrair} cor={props.botao2} objetivo="-"/>
      </div>
    </div>
  )
}

const Container = () => {
  return (
    <div className="Container">
      <h1>Vote no seu pokemon favorito</h1>
      <div className="Cards">
        <Card nome="Charmander" cor="#FF7675" botao1="#D63031" botao2="#FAB1A0"></Card>
        <Card nome="Bulbassaur" cor="#55EFC4" botao1="#00B894" botao2="#00CEC9"></Card>
        <Card nome="Squirtle" cor="#74B9FF" botao1="#0984E3" botao2="#54A0FF"></Card>
      </div>
    </div>
  )
}

{/* <Contador titulo="Charmander" />
      <Contador titulo="Bulbassaur" />
      <Contador titulo="Squirtle" /> */}
const App = props => (
  <React.Fragment>
    <Container />
  </React.Fragment>
)

ReactDOM.render(React.createElement(App, { titulo: "Eu vim de props" }, null), container);
//ReactDOM.render(App(), container);