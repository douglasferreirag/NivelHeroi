var heroi = [["Nome1", 100], ["Nome2", 2000], ["Nome3", 3000], ["Nome4", 6050], ["Nome5", 7040],
                ["Nome6", 8080], ["Nome7", 9050], ["Nome8", 10070], 
                
            ]

  var nivel = "";          


for (let i = 0; i < heroi.length; i++) {

    


            if ( (heroi[i][1] < 1000 ) 
            
            ) {


                nivel = "Ferro"

                console.log("O herói de nome " + heroi[i][0] + " está no nível de " + nivel)

                
            }


            else if ( (heroi[i][1] > 1000 ) &&
                    (heroi[i][1] < 2001) 
            
            ) {

                nivel = "Bronze"

                console.log("O herói de nome " + heroi[i][0] + " está no nível de " + nivel)

                

            }


            else if ( (heroi[i][1] > 2000 ) &&
                    (heroi[i][1] < 5001) 
            
            ) {

                nivel = "Prata"

                console.log("O herói de nome " + heroi[i][0] + " está no nível de " + nivel)

                

            }

            else if ( (heroi[i][1] > 6000 ) &&
                    (heroi[i][1] < 7001) 
            
            ) {

                nivel = "Ouro"

                console.log("O herói de nome " + heroi[i][0] + " está no nível de " + nivel)

                

            }

            else if ( (heroi[i][1] > 7000 ) &&
                    (heroi[i][1] < 8001) 
            
            ) {

                nivel = "Platina"

                console.log("O herói de nome " + heroi[i][0] + " está no nível de " + nivel)

                

            }

            else if ( (heroi[i][1] > 8000 ) &&
                    (heroi[i][1] < 9001) 
            
            ) {

                nivel = "Ascendente"

                console.log("O herói de nome " + heroi[i][0] + " está no nível de " + nivel)

                

            }

            else if ( (heroi[i][1] > 9000 ) &&
                    (heroi[i][1] < 10001) ) {

                nivel = "Imortal"        

                console.log("O herói de nome " + heroi[i][0] + " está no nível de " + nivel)

                

            }

            else if  (heroi[i][1] >= 10001  ) {

                nivel = "Radiante"

                console.log("O herói de nome " + heroi[i][0] + " está no nível de " + nivel)

                

            }






       
           
      

}