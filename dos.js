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

  let productoBarato;
  let precioBarato;
  let flagTodo=1;
  //resultado
  let total;
  let totalDescu;
  let precioFinal;
  let mensaje1;
  let mensaje2;
  let mensaje3;

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

      total=precio*cantidad;

      switch(producto){
        case "yerba":
          acumYerba+=cantidad;
          contYerba++;
          if(cantidad>5&&cantidad<10){
            descuento=10;
            totalDescu=(descuento/100)*total;
            precioFinal=total-totalDescu;
            mensaje1="BB.-Descuento del "+descuento+"% de "+producto+", pagas: $ " +precioFinal+ "USD";
          }else if(cantidad>10){
            descuento=15;
            totalDescu=(descuento/100)*total;
            precioFinal=total-totalDescu;
            mensaje2="BB.-Descuento del "+descuento+"% de "+producto+", pagas: $ " +precioFinal+ "USD";
          }else{
            mensaje3="BB.-Precio sin decuento, pagas: $ "+total+" USD";
          }
          break;

        case "azucar":
          acumAzucar+=cantidad;
          contAzucar++;
          if(cantidad>5&&cantidad<10){
            descuento=10;
            totalDescu=(descuento/100)*total;
            precioFinal=total-totalDescu;
            mensaje1="BB.-Descuento del "+descuento+"% de "+producto+", pagas: $ " +precioFinal+ "USD";
          }else if(cantidad>10){
            descuento=15;
            totalDescu=(descuento/100)*total;
            precioFinal=total-totalDescu;
            mensaje2="BB.-Descuento del "+descuento+"% de "+producto+", pagas: $ " +precioFinal+ "USD";
          }else{
            mensaje3="BB.-Precio sin decuento de: "+producto+", pagas: $ "+total+" USD";
          }
          break;

        case "cafe":
          acumCafe+=cantidad;
          contCafe++;
          if(cantidad>5&&cantidad<10){
            descuento=10;
            totalDescu=(descuento/100)*total;
            precioFinal=total-totalDescu;
            mensaje1="BB.-Descuento del "+descuento+"% de "+producto+", pagas: $ " +precioFinal+ "USD";
          }else if(cantidad>10){
            descuento=15;
            totalDescu=(descuento/100)*total;
            precioFinal=total-totalDescu;
            mensaje2="BB.-Descuento del "+descuento+"% de "+producto+", pagas: $ " +precioFinal+ "USD";
          }else{
            mensaje3="BB.-Precio sin decuento de: "+producto+", pagas: $ "+total+" USD";
          }
          break;
      }
      

      if(flagTodo||cantidad>mayorCantidad){
        mayorCantidad=cantidad;
        mayorProducto=producto;
      }
      if(flagTodo||precio<precioBarato){
        precioBarato=precio;
        productoBarato=producto;
        flagTodo=0;
      }
      // importe a pagar sin descuento de cada uno de los productos
      console.log("Productos solicitados sin alterar su precio:\n"+producto+"\nprecio: "+precio+"\ncantidad: "+ cantidad);


    seguir=prompt("agregar otro producto")
  }while(seguir=="s");
// FIN DEL WHILE 
  console.log("AA.-total a pagar: $$ "+total+" USD");
  console.log(mensaje1+"\n\n"+mensaje2+"\n\n"+mensaje3);
  
  console.log("C._producto con mayor cantidad: "+mayorProducto+" tiene "+mayorCantidad+" unidades");
  console.log("D._Producto mas barato es: "+productoBarato+" su precio: "+precioBarato)


}

/*
 // YERBA
  if(producto=="yerba"&&cantidad>5&&cantidad<10){
    descuento=10
    total=precio*cantidad;
    totalDescu=(descuento/100)*total;
    precioFinal=total-totalDescu;
    mensaje1="BB.-descuento del 10% de la YERBA segun las bolsas, pagas: $"+precioFinal+" USD";
  } if(producto=="yerba"&&cantidad>10){
    descuento=15;
    total=precio*cantidad;
    totalDescu=(descuento/100)*total;
    precioFinal=total-totalDescu;
    mensaje1="BB.-descuento del 15% de la YERBA segun las bolsas pagas: $"+precioFinal+" USD";
  }else{
    mensaje1="BB.-total a pagar de la YERBA sin descuento es: $"+precio*cantidad+" USD";
  }

  //AZUCAR
  if(producto=="azucar"&&cantidad>5&&cantidad<10){
    descuento=10
    total=precio*cantidad;
    totalDescu=(descuento/100)*total;
    precioFinal=total-totalDescu;
    mensaje2="BB.-descuento el 10% del AZUCAR segun las bolsas: $"+precioFinal+" USD";
  } if(producto=="azucar"&&cantidad>10){
    descuento=15;
    total=precio*cantidad;
    totalDescu=(descuento/100)*total;
    precioFinal=total-totalDescu;
    mensaje2="BB.-descuento el 15% del AZUCAR segun las bolsas: $"+precioFinal+" USD";
  }else{
    mensaje2="BB.-total a pagar de la AZUCAR sin descuento es: $"+precio*cantidad+" USD";
  }

  //CAFE
  if(producto=="cafe"&&cantidad>5&&cantidad<10){
    descuento=10
    total=precio*cantidad;
    totalDescu=(descuento/100)*total;
    precioFinal=total-totalDescu;
    mensaje3="BB.-descuento el 10% del CAFE segun las bolsas: $"+precioFinal+" USD";
  } if(producto=="cafe"&&cantidad>10){
    descuento=15;
    total=precio*cantidad;
    totalDescu=(descuento/100)*total;
    precioFinal=total-totalDescu;
    mensaje3="BB.-descuento el 15% del CAFE segun las bolsas: $"+precioFinal+" USD";
  }else{
    mensaje3="BB.-total a pagar del CAFE sin descuento es: $"+precio*cantidad+" USD";
  } */
