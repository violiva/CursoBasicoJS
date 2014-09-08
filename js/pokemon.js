function Pokemon( nombrePokemon, vidaPoke, ataPoke )
{
	var estructuraPokemon = 
	{
		nombre: nombrePokemon,
		Vida: vidaPoke,
		ataque: ataPoke,
		datos: { tipo: "Tierra", Debilidad:"Fuego" }
	};
	return estructuraPokemon;
}

var pikachu = Pokemon( "Pikachu", 100, 55 );
var bulbasaur = Pokemon( "Balbasaur", 90, 50 );


document.write( pikachu.nombre );
document.write( "<br />" );
document.write( bulbasaur.nombre );
document.write( "<br />" );

document.write( pikachu.datos.Debilidad );
document.write( "<br />" );
document.write( bulbasaur.datos.tipo );
document.write( "<br />" );


console.log( bulbasaur );