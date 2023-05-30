import './Atleta.css'

function Atleta({ nome, foto, clube, clubeFoto, posicao, pontuacao }) {


  return (
    <div className="container">
      <div className="texLeft">
        <h3>{nome}</h3>
      </div>
      <img src={foto.replace("FORMATO","220x220")} alt="foto do atleta" width="100px"/>
      <div className="texLeft">
        <h4>{posicao}</h4>
        <h4>{clube}</h4>
      </div>
      <div className="align">
        <img src={clubeFoto} alt="foto do escudo" />
        <h5>{parseFloat(pontuacao.toFixed(1))}</h5>
      </div>
    </div>
  )
}

export default Atleta