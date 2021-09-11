import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const ListPersonas = () => {
  const [lista,setLista] = useState([])
  const [poke, setPoke] = useState(1)
  const [pokemon, setPokemon] = useState({})
  // console.log(lista);
  // const obj = {
  //   nombre: 'lufa',
  //   edad: 25
  // }
  // let { nombre, edad } = obj;
  const API = 'https://rickandmortyapi.com/api/character/'
  const APIpOKE = `https://pokeapi.co/api/v2/pokemon/${poke}`
  // useEffect(() => {
    
  //   // console.log('use efect');
  //   // console.log(lista);
  //   async function fetchList (){
  //     let result = await fetch(API)
  //     let data = await result.json()
  //     setLista(data.results)
  //   }
  //   fetchList()
  // },[])
  useEffect(() =>{
    async function pokefetch() {
      let result = await fetch(APIpOKE)
      let data = await result.json()
      setPokemon(data);
    }
    pokefetch()
  }, [APIpOKE])
  function traerPoke() {
    setPoke(poke + 1)
  }
  return (
    <div>
      {/* <button onClick={() => setLista([12,2,4,4,5,5])}>Update list</button> */}
      <p>{pokemon.name}</p>
      <button onClick={traerPoke}>traer poke</button>
      {/* {
        lista <= 0 ?
        <Spinner animation="border" />
        : lista.map((item) => {
          return (
            <p>{item.name}</p>
          )
        })
        
      } */}
    </div>
  );
};

export default ListPersonas;