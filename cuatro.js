/*
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para
obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre. Edad. Género: “F”, “M”, “NB”. Vacuna: “SputnikV”, “AstraZeneca”, “Otra”. Temperatura corporal (durante la primera noche).
Se pide:
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron
fiebre. (37° o menos)
f) Porcentaje de personas que se aplicaron Aztrazeneca
g) Cual fue la vacuna mas aplicada
h) Promedio de edad de las personas que se dieron cada vacuna
i) Que porcentaje de personas de cada genero hay. Ej: 30% Femenino, 60% Masculino y 10% No Binario */

function mostrar(){

    let nombre;
	let edad;
	let sexo;
	let vacuna;
	let temperatura;
	let seguir;

    let acumSputnikv=0; let acumAstrazeneca=0; let acumOtra=0;
    let contSputnikv=0; let contAstrazeneca=0; let contOtra=0;

    let acumFem=0; let acumMas=0; let acumNB=0;
    let contFem=0; let contMas=0; let contNB=0;

    let acumPorFem=0; let acumPorMas=0; let acumPorNB=0;
    let contPorFem=0; let contPorMas=0; let contPorNB=0;

    //A
    let maxTem;
    let maxNom;
    let maxVacuna;
    let flag=1;

    let acumTem38Mas=0;
    let contTem38Mas=0;

    let acumEdad=0;
    let contEdad=0;

    let promedioEdadHombres;
    let mayorVacuna;
    let porcentajeAstra;

    let promedioEdadSputn;
    let promedioEdadAstra;
    let promedioEdadOtra;

    let porcentajeFem;
    let porcentajeMascu;
    let porcentajeNB;
    
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
         // DATOS INGRESADOS DE LOS PACIENTES:
         console.log("DATOS: "+nombre+", tiene "+edad+" años, genero "+sexo+", vacuna "+vacuna+", temperatura "+temperatura+"°");

        if(flag||temperatura>maxTem){
            maxTem=temperatura;
            maxNom=nombre; //AA.-nombre, vacuna persona con mayor temperatura
            maxVacuna=vacuna;
            flag=0;
        }

        switch(vacuna){
            case "sputnikv":
                acumSputnikv+=edad;
                contSputnikv++; 
                promedioEdadSputn=acumSputnikv/contSputnikv;//HHH
                if(sexo=="F"){
                    acumFem+=nombre;
                    contFem++; //B.-femenino con vacuna sputnikv
                }
                if(sexo=="M"&&temperatura>0&&temperatura<37){
                    acumEdad+=edad;
                    contEdad++; //E.-promedio edad hombres, vacuna SputnikV
                    promedioEdadHombres=acumEdad/contEdad;
                }

                break;
            case "astrazeneca":
                acumAstrazeneca+=edad;
                contAstrazeneca++;
                porcentajeAstra=(100*contAstrazeneca)/100;//FFFFF
                promedioEdadAstra=acumAstrazeneca/contAstrazeneca;//HHH

                if(sexo=="NB"){
                    acumNB+=nombre;
                    contNB++; //C.-genero NB vacuna aztrazeneca
                }
                if(temperatura>38){
                    acumTem38Mas+=nombre;
                    contTem38Mas++;
                } //cantidad personas, vacuna astrazeneca, tem mayor a 38

                break;
            case "otra":
                acumOtra+=edad;
                contOtra++;         
                promedioEdadOtra=acumOtra/contOtra;//HHH
                 
                if(sexo=="NB"){
                    acumNB+=nombre;
                    contNB++; //C.-genero NB vacuna aztrazeneca
                }
                break;
        }

        if(sexo=="F"){
            acumPorFem+=edad;
            contPorFem++;
        }else{
            if(sexo=="M"){
                acumPorMas+=edad;
                contPorMas++;
            }else{
                acumPorNB+=edad;
                contPorNB++;
            }
        }

        seguir=prompt("Agregar otro paciente")
    }while(seguir=="s");
     
    // G.-vacuna mas aplicada
    if(acumSputnikv>acumAstrazeneca&&acumSputnikv>acumOtra){
        mayorVacuna="sputnikv";
    }else if(acumAstrazeneca>acumSputnikv&&acumAstrazeneca>acumOtra){
        mayorVacuna="astrazeneca";
    }else{
        mayorVacuna="otra";
    }

    //Porcentaje por cada genero
    porcentajeFem=(100*contPorFem)/100; 
    porcentajeMascu=(100*contPorMas)/100;
    porcentajeNB=(100*contPorNB)/100; 

    console.log("A.-El nombre y vacuna de la persona con mayor temperatura es: "+maxNom+" vacuna "+maxVacuna+" temperatura maxima "+maxTem+"°");
    console.log("B.-Persona de genero femenino que recibieron la vacuna SputnikV son: "+contFem);
    console.log("C.-personas NB con vacuna AstraZeneca u Otra son: "+contNB);
    console.log("D.-Cantidad de perosnas con la vacuna AstraZeneca que precentaron temperatura mayor a 38° son: "+contTem38Mas);
    console.log("E.-Promedio de la edad de los hombre con la vacuna SputnikV y temperatura menor a 37° son : "+promedioEdadHombres);
    console.log("F.-Porcentaje de personas que se aplicaron Aztrazeneca es: "+porcentajeAstra+"%");
    console.log("G.-La vacuna mas aplicada fue: "+mayorVacuna);

    console.log("H.-Promedio de edad de la vacuna: \nSputnikV: "+promedioEdadSputn+"\nAstraZeneca: "+promedioEdadAstra+"\nOtra: "+promedioEdadOtra);

    console.log("Porcentaje de cada genero: \nFemenino: "+porcentajeFem+"%\nMasculino: "+porcentajeMascu+"%\nNo Binario: "+porcentajeNB+"%");

}

/* acumuladores de los productos
if( Sputnikv > Otra &&  Sputnikv > Astrazeneca)// punto G
    {    
        mayorVacunas="Sputnikv";
    }
    else 
    {
		if(Astrazeneca >contadorOtra && Astrazeneca >= Sputnikv)
		{
			mayorVacunas="Aztrazeneca";
		}
        else
        {
            mayorVacunas="otra";
        }
	} */