/*
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
*/

function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let vacuna;
	let temperatura;
	let seguir;
	//acumuladore
	let acumSputnikv=0;
	let acumAstrazeneca=0;
	let acumOtra=0;
	let acumF=0;   //A
	let acumTem38Mas=0;
	let acumEdad=0;
	//contadores
	let contSputnikv=0;
	let contAstrazeneca=0;
	let contOtra=0;
	let contF=0;   //A
	let contNB=0;
	let contTem38Mas=0;
	let contEdad=0;
	let promedio;

	let maxTem;
	let maxNom;
	let maxVacuna;
	let flag=1;

	do{
		nombre=prompt("Ingresa nombre");
		while(!isNaN(nombre)){
			nombre=prompt("Debes ingresar tu nombre");
		}

		edad=parseInt(prompt("ingresa edad"));
		while(isNaN(edad)||edad<0){
			edad=parseInt(prompt("Debes ingresar edad"));
		}

		sexo=prompt("Ingresa sexo: F, M, NB").toUpperCase();
		while(!isNaN(sexo)||sexo!="F"&&sexo!="M"&&sexo!="NB"){
			sexo=prompt("Error. Ingresa sexo: F, M, NB").toUpperCase();
		}

		vacuna=prompt("que vacuna te pusiste: sputnikv, astrazeneca, otra");
		while(!isNaN(vacuna)||vacuna!="sputnikv"&&vacuna!="astrazeneca"&&vacuna!="otra"){
			vacuna=prompt("Ingresa tipo de vacuna que tienes: sputnikv, astrazeneca, otra");
		}

		temperatura=parseFloat(prompt("ingresa temperatura de la primera noche de la vacuna"));
		while(isNaN(temperatura)||temperatura<0){
			temperatura=parseFloat(prompt("Error. Temperatura de la primera noche de la vacuna"));
		}
		// Datos Ingresados
		console.log("DATOS: Nombre: "+nombre+" temperatura: "+temperatura+"° es: "+sexo+" tine: "+edad+" años y vacuna: "+vacuna);

		if(flag||temperatura>maxTem){
			maxTem=temperatura;
			maxNom=nombre;  // AAA
			maxVacuna=vacuna;
			flag=0;
		}

		switch(vacuna){
			case "sputnikv":
				acumSputnikv+=nombre;
				contSputnikv++; 
				if(sexo=="F"){
					contF++;  //B._ cantidad femenino vacuna sputnikv.
				}//----------------------------------------------
				if(sexo=="M"&&temperatura>0&&temperatura<=37){
					acumEdad+=edad;
					contEdad++;  // promedio de edad de los hombres tem. menor a 37
					promedio=acumEdad/contEdad;
				}
				break;

			case "astrazeneca":
				acumAstrazeneca+=nombre;
				contAstrazeneca++;
				if(sexo=="NB"){
					contNB++;  //C.-no binario vacuna astrazeneca
				}//-------------------------------------
				if(temperatura>38){
					acumTem38Mas+=nombre;
					contTem38Mas++;  //D.-cantidad personas con vacuna astrazeneca
				}					// y temperatura mayor a 38°
				break;

			case "otra":
				acumOtra+=nombre;
				contOtra++;
				if(sexo=="NB"){
					contNB++;  //C.-no binario vacuna otra
				}
				break;
		}

		seguir=prompt("agregar otro paciente")
	}while(seguir=="s");


	console.log("AA.-El nombre y vacuna de la persona con mayor temperatura es:\n "+maxNom+"\n-Vacuna: "+maxVacuna+"\n-Temperatura: "+maxTem+"°");

	console.log("BB.-Cantidad de personas femeninas con la vacuna SputnikV son:"+contF);
	console.log("CC.-Cantidad de personas NB con la vacuna AstraZeneca u otra: "+contNB);
	console.log("DD.-Cantidad de perosnas con la vacuna AstraZeneca que precentaron temperatura mayor a 38° son: "+contTem38Mas);
	console.log("EE.-Promedio de la edad de los hombre con la vacuna SputnikV y temperatura menor a 37° son : "+promedio);
}
