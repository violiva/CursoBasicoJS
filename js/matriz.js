// Javascript para prueba similitud juego buscaminas

function aleatorio( minimo, maximo )
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
	return numero;
}

function perdiste()
{
	alert( "BOOM !!!!");
	document.write( "<h1>Elegiste un area minada :(</h1>");
}

function ganaste()
{
	document.write( "<h3>Tuviste suerte, no pisaste ninguna mina :)</h3>");
}


var row=0;
var col=0;
var bomba=1;
var libre=0;
var textos = [ "libre", "bomba" ];

// inicializamos el campo de minas vacío, sin minas. Con todos los valores a 0.
var matriz = [ [0, 0, 0, 0, 0 ], 
               [0, 0, 0, 0, 0 ], 
               [0, 0, 0, 0, 0 ], 
               [0, 0, 0, 0, 0 ], 
               [0, 0, 0, 0, 0 ]  ];



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
matriz[row][col] = bomba;
// Mina 2
row = aleatorio( 0, 4 );
col = aleatorio( 0, 4 );
matriz[row][col] = bomba;
// Mina 3
row = aleatorio( 0, 4 );
col = aleatorio( 0, 4 );
matriz[row][col] = bomba;
// Mina 4
row = aleatorio( 0, 4 );
col = aleatorio( 0, 4 );
matriz[row][col] = bomba;
// Mina 5
row = aleatorio( 0, 4 );
col = aleatorio( 0, 4 );
matriz[row][col] = bomba;
// Mina 6
row = aleatorio( 0, 4 );
col = aleatorio( 0, 4 );
matriz[row][col] = bomba;
// Mina 7
row = aleatorio( 0, 4 );
col = aleatorio( 0, 4 );
matriz[row][col] = bomba;
// Mina 8
row = aleatorio( 0, 4 );
col = aleatorio( 0, 4 );
matriz[row][col] = bomba;
// Mina 9
row = aleatorio( 0, 4 );
col = aleatorio( 0, 4 );
matriz[row][col] = bomba;
// Mina 10
row = aleatorio( 0, 4 );
col = aleatorio( 0, 4 );
matriz[row][col] = bomba;

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
		if ( matriz[userRow][userCol] == bomba )
		{
			perdiste();
		}
		else 
		{
			ganaste();	
		}

		document.write( "Tu selección ha sido Fila: " + userRow + " Columna: " + userCol + " y en esa posición el valor es: " +  textos[ matriz[userRow][userCol] ] + ".<br />" );
		document.write( "<br />" );
		document.write( "Compruebalo con la disposición del tablero." + "<br />" );
/*-------------------------------------------------------------------------------
		document.write( matriz[0] + "<br />" );
		document.write( matriz[1] + "<br />" );
		document.write( matriz[2] + "<br />" );
		document.write( matriz[3] + "<br />" );
		document.write( matriz[4] + "<br />" );

		document.write( "<br />" );
		document.write( "<br />" );
		document.write( "o si lo quieres ver de otra forma <br />" );
-------------------------------------------------------------------------------*/
		document.write( "<table border=1px>" );
		document.write( "<thead id=cabecera> <tr><th colspan=5>Campo de minas</th></tr>" );
		document.write( "<tbody>" );

		document.write( "<tr><td style=padding:5px><div id=" + textos[ matriz[0][0] ] + ">" + textos[ matriz[0][0] ] + "</div></td><td style=padding:5px><div id=" + textos[ matriz[0][1] ] + ">" + textos[ matriz[0][1] ] + "</div></td><td style=padding:5px><div id=" + textos[ matriz[0][2] ] + ">" + textos[ matriz[0][2] ] + "</div></td><td style=padding:5px><div id=" + textos[ matriz[0][3] ] + ">" + textos[ matriz[0][3] ] + "</div></td><td style=padding:5px><div id=" + textos[ matriz[0][4] ] + ">" + textos[ matriz[0][4] ] + "</div></td></tr>" );
		document.write( "<tr><td style=padding:5px><div id=" + textos[ matriz[1][0] ] + ">" + textos[ matriz[1][0] ] + "</div></td><td style=padding:5px><div id=" + textos[ matriz[1][1] ] + ">" + textos[ matriz[1][1] ] + "</div></td><td style=padding:5px><div id=" + textos[ matriz[1][2] ] + ">" + textos[ matriz[1][2] ] + "</div></td><td style=padding:5px><div id=" + textos[ matriz[1][3] ] + ">" + textos[ matriz[1][3] ] + "</div></td><td style=padding:5px><div id=" + textos[ matriz[1][4] ] + ">" + textos[ matriz[1][4] ] + "</div></td></tr>" );
		document.write( "<tr><td style=padding:5px><div id=" + textos[ matriz[2][0] ] + ">" + textos[ matriz[2][0] ] + "</div></td><td style=padding:5px><div id=" + textos[ matriz[2][1] ] + ">" + textos[ matriz[2][1] ] + "</div></td><td style=padding:5px><div id=" + textos[ matriz[2][2] ] + ">" + textos[ matriz[2][2] ] + "</div></td><td style=padding:5px><div id=" + textos[ matriz[2][3] ] + ">" + textos[ matriz[2][3] ] + "</div></td><td style=padding:5px><div id=" + textos[ matriz[2][4] ] + ">" + textos[ matriz[2][4] ] + "</div></td></tr>" );
		document.write( "<tr><td style=padding:5px><div id=" + textos[ matriz[3][0] ] + ">" + textos[ matriz[3][0] ] + "</div></td><td style=padding:5px><div id=" + textos[ matriz[3][1] ] + ">" + textos[ matriz[3][1] ] + "</div></td><td style=padding:5px><div id=" + textos[ matriz[3][2] ] + ">" + textos[ matriz[3][2] ] + "</div></td><td style=padding:5px><div id=" + textos[ matriz[3][3] ] + ">" + textos[ matriz[3][3] ] + "</div></td><td style=padding:5px><div id=" + textos[ matriz[3][4] ] + ">" + textos[ matriz[3][4] ] + "</div></td></tr>" );
		document.write( "<tr><td style=padding:5px><div id=" + textos[ matriz[4][0] ] + ">" + textos[ matriz[4][0] ] + "</div></td><td style=padding:5px><div id=" + textos[ matriz[4][1] ] + ">" + textos[ matriz[4][1] ] + "</div></td><td style=padding:5px><div id=" + textos[ matriz[4][2] ] + ">" + textos[ matriz[4][2] ] + "</div></td><td style=padding:5px><div id=" + textos[ matriz[4][3] ] + ">" + textos[ matriz[4][3] ] + "</div></td><td style=padding:5px><div id=" + textos[ matriz[4][4] ] + ">" + textos[ matriz[4][4] ] + "</div></td></tr>" );

		document.write( "</tbody>" );
		document.write( "</table>" );

	}
	else
	{
		alert( "Selección errónea. Tienes que elegir un número entre 0 y 4.");
	}
}
else {
	alert( "Selección errónea. Tienes que elegir un número entre 0 y 4.");
}

