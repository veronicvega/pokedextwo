<template>
    <div class="container-fluid" >
        <div class="row" >
              <div class="container-fluid">
                <div class="row">

                  <div class="col mt-5">
                      <div class="dropdown">
                      <button class="dropbtn">filtrar</button>
                      <div class="dropdown-content">
                          <button value="fire" @click="buscar($event)">Fuego</button>
                          <button value="bug" @click="buscar($event)">Bug</button>
                          <button value="ground" @click="buscar($event)">Ground</button>
                          <button value="water" @click="buscar($event)">Water</button>
                          <button value="ice" @click="buscar($event)">Ice</button>
                          <button value="grass" @click="buscar($event)">Grass</button>
                          <button value="normal" @click="buscar($event)">Normal</button>
                          <button value="poison" @click="buscar($event)">Poison</button>
                          <button value="fairy" @click="buscar($event)">Fairy</button>
                          <button value="paras" @click="buscar($event)">Paras</button>
                          <button value="psychic" @click="buscar($event)">Psychic</button>
                          <button value="electric" @click="buscar($event)">Electric</button>
                          <button value="fighting" @click="buscar($event)">Fighting</button>
                          <button value="ghost" @click="buscar($event)">Ghost</button>
                          <button value="dragon" @click="buscar($event)">Dragon</button>
                          <button value="rock" @click="buscar($event)">Rock</button>
                          <button value="steel" @click="buscar($event)">Steel</button>
                      </div>
                      </div>
                  </div>
                  <div class="col mt-2">
                    <img id="imagenInicio" src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" alt="">
                  </div>
                  <!-- buscador pokemones -->
                  <div class="col mt-5">
                    <div class="container-fluid">
                      <div class="row"  id="buscador">
                        <div class="col-2">
                          <p id="nombre">Buscador</p>
                        </div>
                        <div class="col-10">
                          <div class="row">
                            <div class="col">
                              <input type="text" v-model="pokemonBuscar" id="area">

                            </div>
                            <div class="col">
                              <button id="buscar"><router-link to="/buscador" @click="buscador()" id="route">Buscar</router-link></button>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            <!-- card de informacion-->
            <div id="hola" v-if="inicio === true">
                <div class="card" style="width: 31vh"  v-for="(index, i) in Pokemones" :key="i">
                  <router-link to="/login" id="router" @click="informacionPokemon(index.id)">
                    <div class="card-body">
                    <small>N°{{ index.id }}</small>
                    <div  class="image-container">
                        <img :src="index.imagen" alt="">
                    </div>
                    <p > {{ index.nombre }}</p>
                    <center>  
                      <button id="fin" :style="{background : getColor(index.tipo) } ">
                        {{ index.tipo }}
                      </button>

                  </center>            
                    </div>
                  </router-link>
                </div>
            </div>
            <!-- prueba filtrado -->
            <div id="hola" v-if="inicio === false">
                <div class="card" style="width: 30vh;"  v-for="(index, i) in pokemonesFiltrar" :key="i">
                  <router-link to="/login" id="router" @click="informacionPokemon(x.id)">
                    <div class="card-body">
                    <small>N°{{ index.id }}</small>
                    <div  class="image-container">
                        <img :src="index.imagen" alt="">
                    </div>
                    <p > Nombre {{ index.nombre }}</p>
                    <button id="fin" :style="{background : getColor(index.tipo)}">
                        {{ index.tipo }}
                      </button>
                    </div>
                  </router-link>
                </div>

            </div>
            <!-- inicio volver -->
            <div class="col" v-if="inicio === false">
              <div class="row mt-5">
                <div class="col"></div>
                <div class="col">
                  <button @click="inicio=true">Volver al inicio</button>
                </div>
                <div class="col"></div>
              </div>
            </div>
        </div>
        <!-- 50 pokemones mas -->
        <div class="row" v-if="inicio === true">
          <div class="col"></div>
                  <div class="col" id="mas">
                    <button @click="mas">mas</button>
                  </div>
          </div>
          <div class="col"></div>

        <router-view></router-view> 
    </div>


</template>

<script setup>
import { ref} from 'vue'
import axios from 'axios'
import {useUserStore} from "../almacenaje/user.js"
const useUserStorE = useUserStore()
const informacionpk = useUserStore()
const nombre = useUserStore()
let Pokemones = ref([])
let pokemonesFiltrar =ref()
let inicio =ref(true)
let pokemonBuscar=ref('')
const tiposPokemon = ref([
  { tipo: 'normal', color: 'gray' },
  { tipo: 'fire', color: 'orange' },
  { tipo: 'water', color: 'blue' },
  { tipo: 'electric', color: 'yellow' },
  { tipo: 'grass', color: 'green' },
  { tipo: 'ice', color: 'lightblue' },
  { tipo: 'fighting', color: 'red' },
  { tipo: 'poison', color: 'purple' },
  { tipo: 'ground', color: 'brown' },
  { tipo: 'flying', color: 'skyblue' },
  { tipo: 'psychic', color: 'pink' },
  { tipo: 'bug', color: 'limegreen' },
  { tipo: 'rock', color: 'tan' },
  { tipo: 'ghost', color: 'darkpurple' },
  { tipo: 'dragon', color: 'indigo' },
  { tipo: 'dark', color: 'black' },
  { tipo: 'steel', color: 'steelgray' },
  { tipo: 'fairy', color: 'lightpink' }
])


const getColor = (tipo) => {
      const tipoEncontrado = tiposPokemon.value.find(pokemon => pokemon.tipo === tipo);
      return tipoEncontrado ? tipoEncontrado.color : '';
    };


axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`)
.then( (res)=>{ 
  let a = res.data.results
  console.log(a);

  for (let i = 0; i < res.data.results.length; i++) {
    axios.get(res.data.results[i].url)
    .then((res) =>{
        Pokemones.value.push({
          nombre : res.data.name,
          id: res.data.id,
          imagen :res.data.sprites.other["official-artwork"].front_default,
          tipo : res.data.types[0].type.name,

        })

      }
    )  
  }
  console.log(Pokemones.value);
}) 


function mas() {
  axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${Pokemones.value.length}`)
.then( (res)=>{ 
  let a = res.data.results
  console.log(a);

  for (let i = 0; i < res.data.results.length; i++) {
    axios.get(res.data.results[i].url)
    .then((res) =>{
        Pokemones.value.push({
          nombre : res.data.name,
          id: res.data.id,
          imagen :res.data.sprites.other["official-artwork"].front_default,
          tipo : res.data.types[0].type.name
        })

      }
    )  
  }
  console.log("_____________________________");
  console.log(Pokemones.value);
}) 

}



function informacionPokemon(index) {
  useUserStorE.array=[]
  let numpokemon = index
  console.log(numpokemon);
  axios.get(` https://pokeapi.co/api/v2/pokemon/${numpokemon}`)
  .then ( (res) =>{
    useUserStorE.array.push(res.data)

  })
}

function buscar(e) {
  const tipo = e.target.value
  console.log(tipo);
  console.log(Pokemones.value);
  pokemonesFiltrar.value = Pokemones.value.filter(x => x.tipo === tipo)
  if (pokemonesFiltrar.value.length ===0) {
    console.log('vacio');
    console.log(pokemonesFiltrar.value);

  }else{
    inicio.value = false
    console.log(pokemonesFiltrar.value);


  }
}

function buscador() {
  console.log("entre al buscador");
  informacionpk.infopk=[]
  const nombrePokemon = pokemonBuscar.value
  axios.get(` https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
  .then ( (res) =>{
    informacionpk.infopk.push(res.data)

  })
  nombre.nameP = pokemonBuscar.value


}




</script>

<style>
*{
    margin: 0;
    padding: 0;
}
#hola{
display: flex;
flex-wrap: wrap
    /* margin: 2vh; */
}
#hola .card{
    background-color: rgb(243, 244, 245);
    width: 25%; 
    box-sizing: border-box; 
    margin-bottom: 10px; /* Espacio entre las cards */
    margin: auto; 
    margin-top: 2vh;

 
}
#hola .card :hover{

}
  


  .search-form {
    display: flex;
    align-items: center;
  }

  .search-input {
    width: 100%;
    max-width: 300px;
    padding: 8px;
    font-size: 16px;
  }

  .search-button {
    margin-left: 8px;
    padding: 8px 12px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    .search-form {
    flex-direction: column;
    }

    .search-input,
    .search-button {
    width: auto;
    max-width: none;
    }

    .search-button {
    margin-top: 8px;
    width: 100%;
    }
}
#k{
    margin: auto;
    display: flex;
    width: 20vh;
    height: 5vh;
    text-align: center;
    align-items: center;


}

.image-container{
display: flex;
justify-content: center;
align-items: center;
}
.image-container :hover{
  transform:   translateY(-10PX);
}
.image-container img{
margin: auto;
text-align: center;
width: 20vh;
height: 20vh;
max-width: 100%;
max-height: 100%;

}

#router{
  text-decoration: none;
  color:  black;
}
#mas{
  margin-top: 10px;
  margin-bottom: 20px;
}
#mas button{
  border-radius: 10px;
height: 5vh;
width: 25vh;
background-image: linear-gradient(to right, blue, yellow);
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
margin-left: -20vh;

}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  width: 18vh;
  border-radius: 8px;
  background-color: #4CAF50;
  color: white;
  padding: 12px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown-content {
  border-radius: 8px;
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content button {
  margin: 1vh;
  color: #65be59;
  padding: 1vh 1vh 1vh 1vh;
  display: block;
  width: 16vh;
  border-radius: 18px;
  border: none;
  
}

.dropdown-content button:hover {
  background-color: #65be59;
  color: #fff;

}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}


.prueba_botones{
  border-radius: 4px;
  margin-top: 10px;
}
.bug {
  background-color: #B8A038;
}
.fire {
  background-color: red;
}
.rock {
  background-color: #B8A038;
}

.steel {
  background-color: #B8B8D0;
}

.water {
  background-color: #6890F0;
}

#btn{
  background-color: gray;
  color: white ;

}
#nombre{
font-weight: 600;
}

#area{
  border-radius: 10px;

}

#buscar{
  margin-top: -2vh;
  border-radius: 10px;
  background: #3e8e41;
  width: 8vh;
  height: 4vh;


}

#route{
  text-decoration: none;
  color: white;
  font-weight: 400;
}

#fin{
  border-radius: 5px;
  color: white;
  font-weight: 600;
  width: 7vh;
  height: 5vh;
  border: none;

}
</style>


