import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [atletas, setAtleta] = useState([]);
  const [nome, setNome] = useState('');
  const [fotoAtleta, setFotoAtleta] = useState('');
  const [pontos, setPontos] = useState(0);
  const [clube, setClube] = useState('');
  const [fotoClube, setFotoClube] = useState('');
  const [posicao, setPosicao] = useState('');


  const API = "https://api.cartola.globo.com/atletas/pontuados/1"

  useEffect(() => {
    axios.get(API).then(({ data }) => {
      const atletas = Object.values(data.atletas)
      Object.keys(atletas).forEach(key => {
        console.log(atletas[key])
      })
    })
  }, [])

  return (
    <>
      <h1>Cartola FC</h1>
    </>
  )
}

export default App
