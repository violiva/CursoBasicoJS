function aleatorio( minimo, maximo )
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
	return numero;
}

var matriz = [ [0, 0, 0, 0, 0 ], 
               [0, 0, 0, 0, 0 ], 
               [0, 0, 0, 0, 0 ], 
               [0, 0, 0, 0, 0 ], 
               [0, 0, 0, 0, 0 ]  ];


var row=0;
var col=0;

// Vamos a marcar 10 minas de forma aleatoria
// Como todavía no sabemos hacerlo con bucles, lo haremos 10 veces
// Cuando sepamos utilizar bucles lo haremos hasta tener 10 minas colocadas 
// 		en el tablero y además también controlaremos que al asignar una mina
//		de forma aleatoria no esté ya ocupada para tener siempre las 10 minas
//		ya que de esta manera puede coincidir que pongamos una mina en una
//		celda que ya esté ocupada.  
// Mina 1
row = aleatorio( 0, 4 );
col = aleatorio( 0, 4 );
matriz[row][col] = 1;
// Mina 2
row = aleatorio( 0, 4 );
col = aleatorio( 0, 4 );
matriz[row][col] = 1;
// Mina 3
row = aleatorio( 0, 4 );
col = aleatorio( 0, 4 );
matriz[row][col] = 1;
// Mina 4
row = aleatorio( 0, 4 );
col = aleatorio( 0, 4 );
matriz[row][col] = 1;
// Mina 5
row = aleatorio( 0, 4 );
col = aleatorio( 0, 4 );
matriz[row][col] = 1;
// Mina 6
row = aleatorio( 0, 4 );
col = aleatorio( 0, 4 );
matriz[row][col] = 1;
// Mina 7
row = aleatorio( 0, 4 );
col = aleatorio( 0, 4 );
matriz[row][col] = 1;
// Mina 8
row = aleatorio( 0, 4 );
col = aleatorio( 0, 4 );
matriz[row][col] = 1;
// Mina 9
row = aleatorio( 0, 4 );
col = aleatorio( 0, 4 );
matriz[row][col] = 1;
// Mina 10
row = aleatorio( 0, 4 );
col = aleatorio( 0, 4 );
matriz[row][col] = 1;

var userRow = 0;
var userCol = 0;

alert( "Quieres ver si caes en el campo minado?")
userRow = prompt( "¿Selecciona Fila de la matriz del campo minado entre 0 y 4.", 0 );
userRow = Number( userRow );

if ( userRow >= 0 && userRow <= 4 )
{
	userCol = prompt( "¿Selecciona Columna de la matriz del campo minado entre 0 y 4.", 0 );
	userCol = Number( userCol );

	if ( userCol >= 0 && userCol <= 4 )
	{
		if ( matriz[userRow][userCol] == 1 )
		{
			alert( "Lo siento has pisado una mina, ¡¡¡¡ Explotaste !!!!" );
		}
		else 
		{
			alert( "¡¡¡¡ Enhorabuena !!!!, has tenido suerte no has pisado ninguna mina." );	
		}

		document.write( "Tu selección ha sido Fila: " + userRow + " Columna: " + userCol + " y en esa posición el valor es: " +  matriz[userRow][userCol] + "<br />" );
		document.write( "<br />" );
		document.write( "Compruebalo con la disposición del tablero." + "<br />" );

		document.write( matriz[0] + "<br />" );
		document.write( matriz[1] + "<br />" );
		document.write( matriz[2] + "<br />" );
		document.write( matriz[3] + "<br />" );
		document.write( matriz[4] + "<br />" );

	}
	else
	{
		alert( "Selección errónea. Tienes que elegir un número entre 0 y 4.");
	}
}
else {
	alert( "Selección errónea. Tienes que elegir un número entre 0 y 4.");
}

