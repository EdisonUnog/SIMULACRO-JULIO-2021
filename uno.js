/*Nos dedicamos a la venta exclusiva de Discos rígidos.
Debemos realizar la carga de 5(cinco) productos, de cada uno debo obtener los 
siguientes datos:
Tipo: (validar "HDD", "SSD" o "SSDM2")
Precio: (validar entre 5000 y 18000),
Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).
Marca: (validar “Seagate”, “Western Digital”, “Kingston”)
Capacidad: (validar 250Gb, 500Gb, 1Tb, 2Tb)
Se debe Informar al usuario lo siguiente:
a) Del más barato de los SSD, la cantidad de unidades y marca.
b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades
   disponibles. 
c) Cuántas unidades de HDD hay en total.*/


function mostrar()
{
	let producto;
   let precio;
   let cantidad;
   let marca;
   let capacidad;

   let acumHDD=0;
   let acumSSD=0;
   let acumSSDM2=0;
   let contHDD=0;
   let contSSD=0;
   let contSSDM2=0;

   let precioSSDBarato;
   let cantiSSDBarato;
   let marcaSSDBarato;
   let flagSSDBarato=0;

   let mayorHDDPrecio;
   let mayorHDDCapaAlma;
   let mayorHDDCantidad;
   let flagHDDPrecio=0;

   for(let i=0; i<5; i++){

      producto=prompt("igresa producto: HDD, SSD, SSDM2").toUpperCase();
      while(!isNaN(producto)||producto!="HDD"&&producto!="SSD"&&producto!="SSDM2"){
         producto=prompt("Error. Ingresa producto: HDD, SSD, SSDM2").toUpperCase();
      }

      precio=parseFloat(prompt("Ingrsa precio"));
      while(isNaN(precio)||precio<5000||precio>18000){
         precio=parseFloat(prompt("Error. Ingrsa precio"));
      }

      cantidad=parseInt(prompt("Ingresa cantidad de producto"));
      while(isNaN(cantidad)||cantidad<0||cantidad>50){
         cantidad=parseInt(prompt("Error. Ingresa cantidad de producto"));
      }

      marca=prompt("Ingresa marca: seagate, western digital, kingston").toLowerCase();
      while(!isNaN(marca)||marca!="seagate"&&marca!="western digital"&&marca!="kingston"){
         marca=prompt("Error. Ingresa marca: seagate, western digital, kingston").toLowerCase();
      }

      capacidad=prompt("Ingresa capacidad: 250gb, 500gb, 1tb, 2tb").toLowerCase();
      while(!isNaN(capacidad)||capacidad!="250gb"&&capacidad!="500gb"&&capacidad!="1tb"&&capacidad!="2tb"){
         capacidad=prompt("Error. Ingresa capacidad: 250gb, 500gb, 1tb, 2tb").toLowerCase()
      }

      switch(producto){
         case "HDD":
            acumHDD+=cantidad;
            contHDD++;
            if(flagHDDPrecio==0||mayorHDDPrecio<precio){
               mayorHDDPrecio=precio;
               mayorHDDCapaAlma=capacidad;
               mayorHDDCantidad=cantidad;
               flagHDDPrecio=1;
            }
            break;
         
         case "SSD":
            acumSSD+=cantidad;
            contSSD;
            if(flagSSDBarato==0||precioSSDBarato>precio){
               precioSSDBarato=precio;
               cantiSSDBarato=cantidad;  //AAAAAAAAAAAAA
               marcaSSDBarato=marca;
               flagSSDBarato=1;
            }
            break;

         case "SSDM2":
            acumSSDM2+=cantidad;
            contSSDM2++;
            break;
      }
      console.log("Productos solicidatos: "+producto+" "+cantidad+" "+precio+" "+marca+" "+capacidad);

   }

   
   console.log("A.-SSD barato : "+cantiSSDBarato+" y "+marcaSSDBarato);
   console.log("B.-HDD precio alto : "+mayorHDDPrecio+" y "+mayorHDDCantidad);
   console.log("C.-Unidades de  HDD: "+contHDD);
}
