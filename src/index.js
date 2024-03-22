const inpunt = document.getElementById('data-input');
const div = document.getElementById('data-pokecard');
const name = document.getElementById('data-name');
const img = document.getElementById('data-img');
const id = document.getElementById('data-id');
const type1 = document.getElementById('data-type1');
const type2 = document.getElementById('data-type2');
const hpElement = document.getElementById('data-hp');
const attackElement = document.getElementById('data-attack');
const defenseElement = document.getElementById('data-defense');
const specialAttackElement = document.getElementById('data-special-attack');
const specialDefenseElement = document.getElementById('data-special-defense');
const speedElement = document.getElementById('data-speed');
const buttonCerrar = document.getElementById('data-button');
const modal = document.getElementById('data-modal');

const colors = {
    fire: '#FF5733',      // Rojo
    grass: '#4CAF50',     // Verde
    electric: '#FFFF00',  // Amarillo
    water: '#2196F3',     // Azul
    ground: '#8B4513',    // Marrón
    rock: '#A9A9A9',      // Gris
    fairy: '#FF69B4',     // Rosa
    poison: '#9932CC',    // Morado
    bug: '#008000',       // Verde oscuro
    dragon: '#7B68EE',    // Azul violeta
    psychic: '#FF1493',   // Rosa fuerte
    flying: '#87CEEB',    // Celeste
    fighting: '#B22222',  // Rojo oscuro
    normal: '#D3D3D3'     // Gris claro
}


const searchPokemon = (event) =>{
    event.preventDefault();
    const { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
    .then(response => response.json()) // Convertir la respuesta a JSON directamente
    .then(data => renderCard(data))
    .catch(error => {
        modal.classList.remove('hidden');
        inpunt.value = '';
    });
}

buttonCerrar.addEventListener('click', () =>{
    modal.classList.add('hidden');
});

const renderCard = (data) =>{
    console.log(data);

    div.classList.remove('animate-rotate-y');
   
    inpunt.value = '';
    name.textContent = data.name.toUpperCase();
    img.setAttribute('src', data.sprites.front_default);
    
    
    id.textContent = `Num ${data.id}`;
    type1.textContent = data.types[0].type.name.toUpperCase();
    type2.textContent = data.types[1]?.type.name.toUpperCase();
    if (data.types[1]) {
        type2.classList.remove('hidden');
    } else {
        type2.classList.add('hidden');
    }

    type1.style.backgroundColor = colors[data.types[0].type.name];
    if (data.types[1]) {
        type2.style.backgroundColor = colors[data.types[1].type.name];
    }
    

    hpElement.textContent = data.stats[0].base_stat;
    attackElement.textContent = data.stats[1].base_stat;
    defenseElement.textContent = data.stats[2].base_stat;
    specialAttackElement.textContent = data.stats[3].base_stat;
    specialDefenseElement.textContent = data.stats[4].base_stat;
    speedElement.textContent = data.stats[5].base_stat;

    img.setAttribute('src', data.sprites.front_default);

    div.classList.add('animate-rotate-y');
    

    
} 