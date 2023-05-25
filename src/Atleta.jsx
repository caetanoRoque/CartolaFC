import { useState , useEffect} from 'react'
import './Atleta.css'
import axios from 'axios'

function Atleta() {
    const API = "https://api.cartola.globo.com/atletas/pontuados/1"
  
    useEffect(()=>{
      axios.get(API)
      .then(async ({data}) => {
        console.log(data)
          
      }, err => {
        alert('Not Found')
      })
    }, [])
    
  
    return (
      <>
       <h1>Cartola FC</h1>
      </>
    )
  }

  export default Atleta