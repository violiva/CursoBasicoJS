function Pokemon( n, v, a )
{
	this.nombre = n;
	this.vida   = v;
	this.ataque = a;
	this.grito = "Pika!";
	this.gritar = function()
	{
		alert( this.grito );
	}
}

function Bulbasaur()
{
	var pokemon = new Pokemon( "Bulbasaur", 95, 50 );
	var elemento = document.getElementById("imgPokemon");

	nombrePokemon.innerText = pokemon.nombre;
	datosPokemon.innerText = "Es un Pokémon de tipo planta/veneno tiene una vida de " + pokemon.vida + " y un ataque de " + pokemon.ataque + 
	"\nSu nombre es una combinación de las palabras bulb (bulbo en inglés) y saur, que viene del griego sauros, que quiere decir reptil o lagarto y es una terminación común en los nombres de los dinosaurios. Así Bulbasaur podría traducirse como Bulbosaurio, haciendo referencia al bulbo que tiene en el lomo.";

	elemento.innerHTML = "Imagen de Bulbasaur";
	elemento.href = "http://es.pokemon.wikia.com/wiki/Bulbasaur";

	document.getElementById( 'imgPokemon').src = "img/pokemon/Bulbasaur_2.png";
}

function Charmander()
{
	var pokemon = new Pokemon( "Charmander", 100, 50 );
	var elemento = document.getElementById("imgPokemon");

	nombrePokemon.innerText = pokemon.nombre;
	datosPokemon.innerText = "Es un Pokémon de tipo fuego tiene una vida de " + pokemon.vida + " y un ataque de " + pokemon.ataque + 
	"\nSu nombre es una contracción de las palabras inglesas char (carbonizar, quemar) y salamander (salamandra, un anfibio, con leyendas mitológicas que dicen que vive en las llamas). O también decharm (encanto) y salamander.";

	elemento.innerHTML = "Imagen de Charmander";
	elemento.href = "http://es.pokemon.wikia.com/wiki/Charmander";

	document.getElementById( 'imgPokemon').src = "img/pokemon/Charmander_2.png";
}

function NidoranHembra()
{
	var pokemon = new Pokemon( "Nidoran Hembra", 105, 40 );
	var elemento = document.getElementById("imgPokemon");

	nombrePokemon.innerText = pokemon.nombre;
	datosPokemon.innerText = "Es un Pokémon de tipo veneno tiene una vida de " + pokemon.vida + " y un ataque de " + pokemon.ataque + 
	"\nSu nombre deriva de la palabra japonesa para gemelos nido, relacionable al hecho de que fueron los primeros Pokémon en diferenciarse por género. Puede deberse también a la pronunciación japonesa de needle(que significa aguja o pincho). Otra posibilidad es que provenga de lo anteriormente dicho, y de doro (lodo en japonés) en referencia a el Tipo tierra, que no posee ella, pero sí su evolución final: Nidoqueen.";

	elemento.innerHTML = "Nidoran Hembra";
	elemento.href = "http://es.pokemon.wikia.com/wiki/Nidoran%E2%99%80";

	document.getElementById( 'imgPokemon').src = "img/pokemon/Nidoran_hembra.png";
}

function NidoranMacho()
{
	var pokemon = new Pokemon( "Nidoran Macho", 100, 60 );
	var elemento = document.getElementById("imgPokemon");

	nombrePokemon.innerText = pokemon.nombre;
	datosPokemon.innerText = "Es un Pokémon de tipo veneno tiene una vida de " + pokemon.vida + " y un ataque de " + pokemon.ataque + 
	"\nSu nombre deriva de la palabra japonesa para gemelos nido, relacionado con el hecho de que fueron los primeros Pokémon en diferenciarse por género. Puede deberse también a la pronunciación japonesa de needle(aguja/pincho). Otra posibilidad es que provenga de lo anteriormente dicho, y de doro (lodo en japonés) en referencia a el Tipo tierra, que no posee él, pero sí su evolución final: Nidoking.";

	elemento.innerHTML = "Nidoran Macho";
	elemento.href = "http://es.pokemon.wikia.com/wiki/Nidoran%E2%99%82";

	document.getElementById( 'imgPokemon').src = "img/pokemon/Nidoran_macho.png";
}

function Hooh()
{
	var pokemon = new Pokemon( "Ho-Oh", 80, 60 );
	var elemento = document.getElementById("imgPokemon");

	nombrePokemon.innerText = pokemon.nombre;
	datosPokemon.innerText = "Es un Pokémon legendario de tipo fuego/volador tiene una vida de " + pokemon.vida + " y un ataque de " + pokemon.ataque + 
	"\nSu nombre es una variación de la palabra Hōō, que es la palabra japonesa para decir fénix o Ho-Ho(Hōō-Hōō) que es otro nombre con el cual se le conoce a Fenghuang. A su vez, también podemos observar la palabra Ho (fuego en japonés) al comienzo de su nombre y la palabra Oh (rey en japones) al final.";

	elemento.innerHTML = "Ho-Oh";
	elemento.href = "http://es.pokemon.wikia.com/wiki/Ho-Oh";

	document.getElementById( 'imgPokemon').src = "img/pokemon/Ho-Oh.png";
}

function Gyarados()
{
	var pokemon = new Pokemon( "Gyarados", 100, 60 );
	var elemento = document.getElementById("imgPokemon");

	nombrePokemon.innerText = pokemon.nombre;
	datosPokemon.innerText = "Es un Pokémon de tipo agua/volador tiene una vida de " + pokemon.vida + " y un ataque de " + pokemon.ataque + 
	"\nSu nombre puede provenir del japonés Gyakusatsu (masacre) o deGyakkyo (agresividad) junto con dragón. También podría venir del rey de Bhután Druk Gyalpo, donde Druk significa dragón y Gyalpo rey, siendo considerados los dragones chinos como los reyes del agua. Su nombre francés proviene del leviatán.";

	elemento.innerHTML = "Gyarados";
	elemento.href = "http://es.pokemon.wikia.com/wiki/Gyarados";

	document.getElementById( 'imgPokemon').src = "img/pokemon/Gyarados_2.png";
}

function Pidgey()
{
	var pokemon = new Pokemon( "Pidgey", 85, 50 );
	var elemento = document.getElementById("imgPokemon");

	nombrePokemon.innerText = pokemon.nombre;
	datosPokemon.innerText = "Es un Pokémon de tipo normal/volador tiene una vida de " + pokemon.vida + " y un ataque de " + pokemon.ataque + 
	"\nEl nombre de Pidgey proviene de la palabra inglesa Pigeon (Pichón), la -Y- puede indicar su miniatura. O también puede derivar de la combinación de las palabras Pigeon (Paloma) y Budgie (Periquito, Canario).";

	elemento.innerHTML = "Pidgey";
	elemento.href = "http://es.pokemon.wikia.com/wiki/Pidgey";

	document.getElementById( 'imgPokemon').src = "img/pokemon/Pidgey_2.png";
}


function Squirtle()
{
	var pokemon = new Pokemon( "Squirtle", 90, 60 );
	var elemento = document.getElementById("imgPokemon");

	nombrePokemon.innerText = pokemon.nombre;
	datosPokemon.innerText = "Es un Pokémon de tipo agua tiene una vida de " + pokemon.vida + " y un ataque de " + pokemon.ataque + 
	"\nSu nombre proviene de las palabras en inglés squirt (disparar un chorro de agua, aunque también es una forma de referirse a alguien que es pequeño en comparación con los demás) y turtle (tortuga). Otro origen posible de su nombre es que se trate de una corrupción lingüística desquirrel (ardilla), dado que posee una cola muy parecida a la de las ardillas, cuando evoluciona a Blastoise lo pierde.";

	elemento.innerHTML = "Squirtle";
	elemento.href = "http://es.pokemon.wikia.com/wiki/Squirtle";

	document.getElementById( 'imgPokemon').src = "img/pokemon/Squirtle_2.png";
}
