function reporteDePasajeros(numeroDeEstaciones){
    let pasajeros=0;
    let mensaje=[];
     for (i=0; i<=numeroDeEstaciones; i++)  {
         
         if (i==0){
           pasajeros=pasajeros+200  
         }
         else if (i!=5){
             pasajeros=pasajeros+50-30
 
         }
         else {
             pasajeros=pasajeros+120-80
         }
 
         mensaje.push("En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren" )
     }
     return mensaje    
 
 }
 