var dibujo, lienzo;
function inicio()
{
	dibujo = document.getElementById( "dibujito" );
	lienzo = dibujo.getContext( "2d" );

	dibujarTrama( lienzo );

	lienzo.beginPath();   // nos permite comenzar un nuevo trazo y poder cambiar la tinta de los trazos

	lienzo.moveTo(   0,   0 );
	lienzo.lineTo( 300,   0 );
	lienzo.lineTo( 300, 300 );
	lienzo.lineTo(   0, 300 );
	lienzo.lineTo(   0,   0 );
	lienzo.strokeStyle = "#F00";
	lienzo.stroke();

	lienzo.beginPath();   // nos permite comenzar un nuevo trazo y poder cambiar la tinta de los trazos
	lienzo.strokeStyle = "green";
	// vamos a dibujar un círculo ( arco ) parámetros son: coordenadas x, y, radio, radianes ( círculo completo sería 2PI ), 
	//        parámetro que nos indica si lo hacemos en dirección contraria a las manecillas del reloj
	lienzo.arc( 150, 150, 100, ( Math.PI * 2 ), false );

	// Set the color of the image to green.
	// ----- lienzo.fillStyle = "rgb(100, 200, 50)";   verde
	lienzo.fillStyle = "#FFFF00";    // amarillo 

	// Draw the image.
	lienzo.fill();

	lienzo.closePath();
	lienzo.stroke();

}

function dibujarTrama( l )
{
	var ancho = 300, alto = 300;
	var linea = 0;
	var salto = 30;
	var limiteX = ancho / salto;
	var limiteY = alto  / salto;

	// viendo qe existe la función translate que desplaza el origen del plano a la posición que queramos y que podemos movernos en 
	// desplazamientos negativos, he modificado el código utilizado más abajo que sería lo correcto si el intentar pintar fuera del canvas diera error
	// por el siguiente código utilizando esta variante y moviéndonos en el eje X en 2 bucles:
	// el primero lo hace desde la posición 0, 0 y trazando rayas oblicuas que pintarán además del cuadrado que nos interesa uno imaginario 
	// adosado al nuestro y a la izquierda de este, pero como lo que no está en el canvas no se muestra no pasa nada.
	// Es decir, es como si estuvieramos trazando líneas oblicuas y pintando en 3 cuadrados del mismo tamaño, pero nos salimos del tamaño del cuadro
	// ya que nos interesa pintar cuando se sobrepasa la diagonal del cuadrado que sólo la pintaría si continuamos desde el cuadrado adyacente.
	l.beginPath();
	l.strokeStyle = "#AAA";
	for ( linea=0; linea <= 2*limiteX; linea++ )
	{
		l.moveTo( linea*salto,           0 );
		l.lineTo( (linea*salto)-ancho, 300 );
		l.stroke();
	}
	l.closePath();



	l.translate( -300, 0 );

	l.beginPath();
	l.strokeStyle = "#AAA";
	for ( linea=0; linea <= 2*limiteX; linea++ )
	{
		l.moveTo( linea*salto,           0 );
		l.lineTo( ancho+(linea*salto), 300 );
		l.stroke();
	}
	l.closePath();

	l.translate( 300, 0 );

}
/*----------------------------------------------------------------------------------------------------

// Dibujamos líneas verticales en el canvas espaciadas 30 posiciones (pixeles)
// para trazar cada línea nos posicionamos en el eje superior del canvas ( eje X ), para eso las coordenadas sólo tendrán valor X siendo Y=0. ( Ejemplo 30, 0 )
// y vamos saltando cada 30 píxeles y trazando líneas verticales desde ( x, 0 ), hasta ( x, alto del canvas )
	l.beginPath();
	l.strokeStyle = "#AAA";
	for ( linea=0; linea <= limiteX; linea++ )
	{
		l.moveTo( linea*salto,    0 );
		l.lineTo( linea*salto, alto );
		l.stroke();
	}
	l.closePath();

	// Ahora dibujamos líneas horizontales en el canvas espaciadas 30 posiciones (pixeles)
	// para trazar cada línea nos posicionamos en el eje izquierdo del canvas ( eje Y ), para eso las coordenadas sólo tendrán valor Y siendo X=0. ( Ejemplo 0, 30 )
	// y vamos saltando cada 30 píxeles y trazando líneas horizontales desde ( 0, Y ), hasta ( ancho del canvas, Y )
	l.beginPath();
	l.strokeStyle = "#AAA";
	for ( linea=0; linea <= limiteY; linea++ )
	{
		l.moveTo( 0    , linea*salto );
		l.lineTo( ancho, linea*salto );
		l.stroke();
	}
	l.closePath();

	// Ahora dibujamos líneas diagonales partiendo desde posición ( 0,30 ) hasta ( 0, 300 ) y finalizando cada línea en su contraria ( 30, 0 ) hasta ( 300, 0 )
	// este primer grupo sólo dibuja diagonales en la mitad del cuadrado superior izquierda
	l.beginPath();
	l.strokeStyle = "#AAA";
	for ( linea=0; linea <= limiteX; linea++ )
	{
		l.moveTo( 0          , linea*salto );
		l.lineTo( linea*salto,           0 );
		l.stroke();
	}
	l.closePath();


	// Ahora dibujamos líneas diagonales partiendo desde posición ( 300, 0 ) hasta ( 0, 0 ) y finalizando cada línea en su contraria ( 0, 300 ) hasta ( 0, 0 )
	// estas líneas dibujaran diagonales en la zona superior derecha. 
	// El final de la línea tiene la coordenada X fija con el ancho del canvas y lo que va aumentando es la coordenada Y que aumenta en la misma medida en la
	// que disminuye el origen de la línea que se va desplazando por el eje X desde el final del canvas hasta el principio.
	l.beginPath();
	l.strokeStyle = "#AAA";
	for ( linea=0; linea <= limiteY; linea++ )
	{
		l.moveTo( ancho-(linea*salto),           0 );
		l.lineTo( ancho              , linea*salto );
		l.stroke();
	}
	l.closePath();


	// Ahora dibujamos líneas diagonales partiendo desde posición ( 0,00 ) hasta ( 0, 300 ) y finalizando cada línea en su contraria ( 300, 0 ) hasta ( 0, 300 )
	// este primer grupo sólo dibuja diagonales en la mitad del cuadrado inferior izquierda
	// Estas líneas se trazan con el origen puesto siempre en el eje de las Y ( con coordenada X=0 ) y van desde la esquina superior izquierda hasta la esquina
	// inferior derecha y van disminuyendo en tamaño de línea según el origen de la línea va subiendo por el eje de las Y ( bajando en la visualización en la pantalla)
	// y el final va acercándose de derchas a izquierda e irá disminuyendo en la misma medida que va creciendo en el eje de las Y.
	l.beginPath();
	l.strokeStyle = "#AAA";
	for ( linea=0; linea <= limiteY; linea++ )
	{
		l.moveTo( 0, linea*salto );
		l.lineTo( ancho - (linea*salto), alto );
		l.stroke();
	}
	l.closePath();

	// Ahora dibujamos líneas diagonales partiendo desde posición ( 300, 0 ) hasta ( 300, 300 ) y finalizando cada línea en su contraria ( 0, 300 ) hasta ( 300, 300 )
	// este grupo sólo dibuja diagonales en la mitad del cuadrado inferior derecha.
	// Estas líneas diagonales parten de la esquina superior derecha hasta la esquina inferior izquierda siendo esta primera diagonal del cuadrado la línea más larga
	// que irá disminuyendo en longitud según vamos bajando el origen de cada línea por la pantalla ( es decir, aumentando el eje de las Y y manteniendo siempre
	// la coordenada en el final del eje X = ancho ) y el final de la línea que irá recorriendo el final del canvas por la parte inferior desde el lado
	// izquierdo hasta el lado derecho.
	l.beginPath();
	l.strokeStyle = "#AAA";
	for ( linea=0; linea <= limiteY; linea++ )
	{
		l.moveTo( ancho, linea*salto );
		l.lineTo( 0 + (linea*salto), alto );
		l.stroke();
	}
	l.closePath();

}
----------------------------------------------------------------------------------------------------*/


