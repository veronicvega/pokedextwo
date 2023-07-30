<template>
    <!-- <h1>soy el buscador</h1> -->
    <div class="container-fluid">
        <div class="row">
            <div class="col"></div>
            <div class="col">
                <div class="col mt-2">
                    <img id="imagenInicio" src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" alt="">
                  </div>
            </div>
            <div class="col mt-5">
                <div class="row"  id="buscador">
                        <div class="col-2">
                          <p id="nombre">Buscador</p>
                        </div>
                        <div class="col-10">
                          <div class="row">
                            <div class="col">
                              <input id="area" type="text" v-model="pokemonBuscar">

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
    <!-- no se encontro -->
    <div class="container-fluid" v-if="informacionpk.infopk.length===0 || nombre.nameP ==='' ">
        <div class="row">
            <div class="col"></div>
            <div class="col mt-5">

                <img src="../imagenes/no_encontrado.png" alt="">
                <h5>No se encontraron resultados al  pokemon 
                    <br>
                   <span style="color: red; font-size: 40px;">{{ nombre.nameP }}</span> 
                 </h5>
            </div>
            <div class="col"></div>
        </div>
    </div>
    <!-- a -->
    <!-- si se encontro -->
    <div class="container-fluid">
        <div class="row">
        <div class="col"></div>
        <div class="col">
            <router-link to="/login" v-for="i in informacionpk.infopk" :key="i" @click="informacionPokemon(i.id)">
            <div class="card" >
                <div class="card-header">
                <div class="card-title mt-2">
                  <h4> N°{{ i.id }}</h4>   
                </div>
                <img :src="i.sprites.other['official-artwork'].front_default" alt="alterna" class="card-img-top">
                <div class="card-body">
                    <h4>{{ i.name }}</h4>
                </div>
            </div>
            
        </div>
    </router-link>
        </div>
        <div class="col"></div>
    </div>


    </div>
    <!-- volver inicio -->
    <div class="row">
        <div class="col"></div>
        <div class="col">
            <button class="btn btn-success mt-5"><router-link to="/" id="inicio">Volver al inicio</router-link></button>
        </div>
        <div class="col"></div>
    </div>


</template>

<script setup>
import {ref} from 'vue'
import axios from 'axios'
import {useUserStore} from "../almacenaje/user.js"
const informacionpk = useUserStore()
const useUserStorE =  useUserStore()
const nombre = useUserStore()
let pokemonBuscar =ref('')
console.log(nombre.nameP);
console.log("______________________________________");
console.log(informacionpk.infopk);

// if (informacionpk.infopk.length ===0) {
//     document.write('esta vacio')
// }

function informacionPokemon(index) {
    console.log(index);
  useUserStorE.array=[]
  let numpokemon = index
  console.log(numpokemon);
  axios.get(` https://pokeapi.co/api/v2/pokemon/${numpokemon}`)
  .then ( (res) =>{
    useUserStorE.array.push(res.data)

  })
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
</style>