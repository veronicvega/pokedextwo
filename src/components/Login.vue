<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col"></div>
      <div class="col mt-2">
        <img id="imagenInicio" src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" alt="">
      </div>
      <div class="col"></div>
    </div>
  </div>

  <div class="container-fluid">
    <div class="row" >
      <div class="col-1" ></div>
      <div class="col" >
      <div class="informacion"   v-for="(index, i) in useUserStorE.array" :key="i" >
      <router-link to="/login" id="router" class="j" >
        <!-- titulo y numero -->
        <div class="row" >
          <div class="col"></div>
          <div class="col" >
            <small id="numero">#{{ index.id }}</small>
          </div>
          <div class="col" >
            <p id="numero"> {{ index.name }}</p>
          </div>
          <div class="col" ></div>
        </div>
        <!-- a -->
        <!-- imagen -->
        <div class="row">
          <div class="col"></div>
          <div class="col" >
            <div class="card mt-5"  style="width: 26vh;" id="cardInformacion">
              <div class="card-title">
                Información Pokemon
              </div>
              <div class="card-body">
                <h5>Type: <span>{{ index.types[0].type.name }}</span> </h5>
                <h5>height: <span>{{ index.height }}</span></h5>
                <h5>weight: <span>{{ index.weight }}</span></h5>
                <h5>abilities; <span>{{ index.abilities[0].ability.name }}</span></h5>
              </div>
            </div>
          </div>
          <div class="col mt-5" >
            
            <img :src="index.sprites.other['official-artwork'].front_default" alt="" id="imagenP">
          </div>
          <!-- estadisticas -->
          <div class="col-4"   >
          <div class="row">
                          <div class="col">
                            <div class="card mt-5" style="width: 60vh;" id="estadisticas" >
                          <div class="row">
                            <div class="col-4">
                              <h5>PH </h5>
                            </div>
                            <div class="col-8">
                              <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                              <div class="progress-bar" :style="{ 'width' : index.stats[0].base_stat + '%'}">{{ index.stats[0].base_stat }} %</div>
                            </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-4">
                              <h5>Attack </h5>
                            </div>
                            <div class="col-8">
                              <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                              <div class="progress-bar" :style="{ 'width' : index.stats[1].base_stat + '%'}">{{ index.stats[1].base_stat }}%</div>
                            </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-4">
                              <h5>Defense </h5>
                            </div>
                            <div class="col-8">
                              <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                              <div class="progress-bar" :style="{ 'width' : index.stats[2].base_stat + '%'}">{{ index.stats[2].base_stat }}%</div>
                            </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-4">
                              <h5>special-attack</h5>
                            </div>
                            <div class="col-8">
                              <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                              <div class="progress-bar" :style="{ 'width' : index.stats[3].base_stat + '%'}">{{ index.stats[3].base_stat }}%</div>
                            </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-4">
                              <h5>special-defense</h5>
                            </div>
                            <div class="col-8">
                              <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                              <div class="progress-bar" :style="{ 'width' : index.stats[4].base_stat + '%'}">{{ index.stats[4].base_stat }}%</div>
                            </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-4">
                              <h5>Speed </h5>
                            </div>
                            <div class="col-8">
                              <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                              <div class="progress-bar" :style="{ 'width' : index.stats[5].base_stat + '%'}"> {{ index.stats[5].base_stat  }}%</div>
                            </div>
                            </div>
                          </div>
                        </div>
                          </div>
          </div>
          </div>
          <div class="col"></div>
        </div>
        </router-link>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
      <div class="col" id="ini">

        <br>
        <button><router-link to="/" id="inicio">Volver al inicio</router-link></button>

      </div>
      <div class="col"></div>
    </div>
  </div>

      <router-view></router-view>

  </template>
  
<script setup>
import {useUserStore} from "../almacenaje/user.js"
const useUserStorE = useUserStore()
console.log("______________________________________");
console.log(useUserStorE.array);

</script>


<style>
*{
  margin: 0;
  padding: 0;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
#router{
  padding: 0.6%;
}

#imagenInicio{
  margin-top: 2% ;
  margin-left: auto;
  margin-right: auto;
width: 30vh;
margin-bottom: 3vh;
}
#numero {
  margin-left: 5vh;
  font-weight: 900;
  font-size: 60px;
}
#imagenP{
margin-top: -5vh;
width: 50vh;
height: 50vh;
display: flex;
justify-content: center;
align-items: center;
}
.nombrePokemon{
  font-weight: 900;
  font-size: 30px;
  
}
#estadisticas{
  padding: 5%;
  box-shadow: 2px 2px 20px 3px rgb(159, 157, 157);
}
.card-body h5{
  font-weight: 600;
  font-size: 2vh;
}
.card-body h5 span{
  font-weight: 400;
  color: rgb(82, 77, 77);
}

#cardInformacion{
  padding: 5%;
  box-shadow: 2px 2px 20px 3px rgb(159, 157, 157);
}


#ini button {
  margin-top: -40px;
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
#inicio{
  text-decoration: none;
  color: rgb(255, 255, 255) ;

}
</style>