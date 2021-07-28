/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos alimenticios, hasta que el cliente quiera. Por cada compra se ingresa:
Tipo: (validar "Yerba", "Azúcar", "Café").
Cantidad de bolsas. (más de cero).
Precio por bolsa (más de cero).
Si se compra más de 5 bolsas en total se obtiene un 10% de descuento sobre el total a pagar.
Si se compra más de 10 bolsas en total se obtiene un 15% de descuento sobre el total a pagar.
Se pide mostrar por pantalla:
a)	El importe total a pagar bruto, sin descuento.
b)	El importe total a pagar con descuento (solo si corresponde)
c)	Informar el tipo con más cantidad de bolsas.
d)	El tipo de la compra más barata. (sobre el Bruto sin descuento)
*/

function mostrar()
{
  let producto;
  let cantidad;
  let precio;
  let seguir;
  let descuento;

  let acumYerba=0;
  let acumAzucar=0;
  let acumCafe=0;
  let contYerba=0;
  let contAzucar=0;
  let contCafe=0;

  let mayorCantidad;
  let mayorProducto;
  let flagMayorCanti=0;

  let productoBarato;
  let precioBarato;
  let flagtipoBarato=0;

  //resultado
  let total;
  let totalDescu;
  let precioFinal;

  do{

    producto=prompt("igresa producto: yerba, azucar, cafe").toLowerCase();
    while(!isNaN(producto)||producto!="yerba"&&producto!="azucar"&&producto!="cafe"){
      producto=prompt("Error. Igresa producto: yerba, azucar, cafe").toLowerCase();
      }

    precio=parseFloat(prompt("Ingresa precio del producto"));
    while(isNaN(precio)||precio<0){
      precio=parseFloat(prompt("Error. Ingresa precio del producto"));
    }

    cantidad=parseInt(prompt("Ingresa cantidad de producto"));
    while(isNaN(cantidad)||cantidad<0){
      cantidad=parseInt(prompt("Error. Ingresa cantidad de producto"));
      }


      switch(producto){
        case "yerba":
          acumYerba+=cantidad;
          contYerba++;
          break;

        case "azucar":
          acumAzucar+=cantidad;
          contAzucar++;
          break;

        case "cafe":
          acumCafe+=cantidad;
          contCafe++;
          break;
      }
      if(flagMayorCanti==0||mayorCantidad<cantidad){
        mayorCantidad=cantidad;  //producto con mas cantidades
        mayorProducto=producto;
        flagMayorCanti=1;
      }
      if(flagtipoBarato==0||precioBarato>precio){
        precioBarato=precio;
        productoBarato=producto;
        flagtipoBarato=1;
      }
      // importe a pagar sin descuento de cada uno de los productos
      total=precio*cantidad;
      console.log("A._Productos solicitados sin alterar su precio:\n"+producto+"\nprecio: "+precio+"\ncantidad: "+ cantidad+ "\ntotal: "+total);
    
    seguir=prompt("agregar otro producto")
  }while(seguir=="s");

  // DESCUENTOS
  if(cantidad>5&&cantidad<10){
    totalDescu=(10/100)*total;
    precioFinal=total-totalDescu;
  }                   // descuentos por cantidaes
  if(cantidad>10){
    totalDescu=(15/100)*total;
    precioFinal=total-totalDescu;
  }

  console.log("B._porcentaje de descuento: "+totalDescu+"\nTotal a pagar en caja es: "+precioFinal);
  console.log("C._producto con mayor cantidad: "+mayorProducto+" tiene "+mayorCantidad+" unidades");
  console.log("D._Producto mas barato es: "+productoBarato+" su precio: "+precioBarato)


}
