var codPokemon = 0;
var arrayPokemon = [ "Bulbasaur", "Charmander", "Nidoran Hembra", "Nidoran Macho", "Ho-oh", "Gyarados", "Pikachu", "Pidgey", "Squirtle" ];

codPokemon = prompt( "¿Selecciona el pokemon a consultar:\n0.-Bulbasaur\n1.-Charmander\n2.-Nidoran Hembra\n3.-Nidoran Macho\n4.-Ho-oh\n5.-Gyarados\n6.-Pikachu\n7.-Pidgey\n8.-Squirtle", 0 );
codPokemon = Number( codPokemon );

document.writeln( "<br><br>" );
if ( codPokemon >= 0 && codPokemon <= 8 )
{
	document.writeln( "Has seleccionado el Pokémon: " + arrayPokemon[ codPokemon] );
	if ( codPokemon == 0 )
	{
		Bulbasaur();
	}

	if ( codPokemon == 1 )
	{
		Charmander();
	}

	if ( codPokemon == 2 )
	{
		NidoranHembra();
	}

	if ( codPokemon == 3 )
	{
		NidoranMacho();
	}

	if ( codPokemon == 4 )
	{
		Hooh();
	}

	if ( codPokemon == 5 )
	{
		Gyarados();
	}

	if ( codPokemon == 6 )
	{
		Pikachu();
	}

	if ( codPokemon == 7 )
	{
		Pidgey();
	}

	if ( codPokemon == 8 )
	{
		Squirtle();
	}

}
else
{
	document.writeln( "Selección incorrecta. Debes seleccionar un código de pokémon entre 0 y 8");
}
