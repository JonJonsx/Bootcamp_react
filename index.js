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

  const { cor, nome, botao1, botao2, imagem} = props


  const cardStyle = {
    backgroundColor : cor || '#f00',
    borderColor: cor || '#f00',
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
        <h4>{nome}</h4>
      </div>
      <div className="sprite">
        <img src={imagem} alt=""/>
      </div>
      <div className="votos">
        <h2>Votos: {numero}</h2>
      </div>
      <div className="buttons">
        <Botton opcao={somar} cor={botao1} objetivo="+"/>
        <Botton opcao={subtrair} cor={botao2} objetivo="-"/>
      </div>
    </div>
  )
}

const Container = () => {
  return (
    <div className="Container">
      <h1>Vote no seu pokemon favorito</h1>
      <div className="Cards">
        <Card nome="Charmander" cor="#FF7675" botao1="#D63031" botao2="#FAB1A0" imagem="https://64.media.tumblr.com/2d55d887558d2b0edb0784f64e6b0c6c/tumblr_mhd98a5fT51s2ugo7o8_250.gif"></Card>
        <Card nome="Bulbassaur" cor="#55EFC4" botao1="#00B894" botao2="#00CEC9" imagem="https://cdn.streamelements.com/uploads/7839dca7-1826-4271-94e1-b4f3fb12c549.gif"></Card>
        <Card nome="Squirtle" cor="#74B9FF" botao1="#0984E3" botao2="#54A0FF" imagem="https://cdn.streamelements.com/uploads/153b7e23-12d6-4d2d-98c6-4c05601765b9.gif"></Card>
      </div>
    </div>
  )
}

const App = props => (
  <React.Fragment>
    <Container />
  </React.Fragment>
)

ReactDOM.render(React.createElement(App, { titulo: "Eu vim de props" }, null), container);