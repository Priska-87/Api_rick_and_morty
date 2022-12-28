
import {useState, useEffect} from 'react'
import {obtenerTodo, obtenerPersonaje} from './funciones'
function App() {
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character/?page=1")
  const [siguiente, setSiguiente] = useState(null)
  const [anterior, setAnterior] = useState(null)
  const [paginas, setPaginas] = useState(null)
  const [total, setTotal] = useState(null)
  const [personajes, setPersonajes] = useState(null)
  const [personaje, setPersonaje] = useState(null)

  const irSiguiente = (url) => {
    setUrl(url)
  }
  const irAnterior = (url) => {
    setUrl(url)
  }

  useEffect(()=>{
    obtenerTodo(url,setSiguiente, setAnterior, setTotal, setPaginas, setPersonajes)
  },[url])

  return (
    <div className='contenedor'>
      <div className='header'>

        <h2 className='titulo'>Bienvenidos a la app de la API de rick and morty</h2>
        <div className='totales'>
        <p>Total de personajes : {total}</p>
        <p>Cantidad de páginas : {paginas}</p>
        </div>

        {anterior != null ? (
          <button onClick={()=>irAnterior(anterior)}>anterior</button>
        ) : ('')}
        {siguiente != null ? (
          <button onClick={()=>irSiguiente(siguiente)}>siguiente</button>
        ) : ('')}
        <div className='personajes'>
        {personajes != null ? (
          personajes.map(personaje => (
            <p key={personaje.id} onClick={()=>obtenerPersonaje(personaje.id, setPersonaje)}>{personaje.name}</p>
          ))
        ) : ('')}
      </div>
      </div>
      
        <div className='personaje'>
        {personaje != null ? (
          <div className='img'>
            <h2>{personaje.name}</h2>
            <img src={personaje.image} alt=""/>
          </div>
        ) : ('')}
        </div>

    </div>
  );
}

export default App;