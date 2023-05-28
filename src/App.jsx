import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Atleta from './Atleta';

function App() {
  const [atletas, setAtletas] = useState([]);
  const [clubes, setClube] = useState([]);
  const [posicoes, setPosicao] = useState([]);
  const [buscar, setBuscar] = useState(1);

  let number = buscar  


  const API = `https://api.cartola.globo.com/atletas/pontuados/${number}`

  useEffect(() => {
    axios.get(API).then(({ data }) => {
      const atletasObjeto = Object.values(data.atletas)
      const clubesObjeto = Object.values(data.clubes)
      const posicaoObjeto = Object.values(data.posicoes)
      const nomes = atletasObjeto.map(atleta => ({
        apelido: atleta.apelido,
        clube_id: atleta.clube_id,
        foto: atleta.foto,
        pontuacao: atleta.pontuacao,
        posicao_id: atleta.posicao_id
        
      }));
      setAtletas(nomes);
      setClube(clubesObjeto);
      setPosicao(posicaoObjeto);
      
    })
  }, [buscar])

  const getClubeById = (clubeId) => {
    const clube = clubes.find(clube => clube.id === clubeId);
    return clube ? clube.abreviacao : '';
  }

  const getEscudoById = (clubeId) => {
    const clube = clubes.find(clube => clube.id === clubeId);
    return clube ? clube.escudos['60x60'] : '';
  }

  const getPosicaoById = (posicaoId) => {
    const posicao = posicoes.find(posicao => posicao.id === posicaoId);
    return posicao ? posicao.nome : '';
  }

  return (
    <div className = "">
      <p className="title"><b>CartolaCards</b></p>
      <ul>
        {atletas.map(atleta => {
          return (

            <li>
              <Atleta nome={atleta.apelido} foto={atleta.foto} pontuacao={atleta.pontuacao} clube={getClubeById(atleta.clube_id)}
                clubeFoto={getEscudoById(atleta.clube_id)} posicao={getPosicaoById(atleta.posicao_id)}
              />
            </li>
          )
        })}
      </ul>
      <div className="align"><button onClick={()=>setBuscar(buscar+1)}>Buscar mais Gamers</button></div>
    </div>
  )
}

export default App
