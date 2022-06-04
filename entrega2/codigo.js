// Batalla entre Thanos y Dr.Strange

let vidaStrange = 100;

let vidaThanos = 100;

let minGolpe = 10;
let maxGolpe = 30;

let round = 0

//console.log(`Gope Strange : ${golpeStrange}`);
//console.log(`Gope Thanos : ${golpeThanos}`);

function calcularGolpe(){
    return Math.round(Math.random()* (maxGolpe-minGolpe)+minGolpe);
}



function ambosSiguenVivos(){
    return vidaStrange > 0 && vidaThanos>0;
}

function strangeSigueVivo(){
    return vidaStrange>0
}






while(ambosSiguenVivos()){
    //round=round + 1;
    //round ++;
    round+=1
    let golpeStrange = calcularGolpe()
    
    let golpeThanos = calcularGolpe()

    if(golpeStrange > golpeThanos) {        //1
        //vidaThanos=vidaThanos-golpeStrange;
        vidaThanos -= golpeStrange
        console.log("Numero de Round: " + round);
        console.log(`Doctor Strange gopea a Thanos con una fuerza de ${golpeStrange}`);
        
        
    }else{ //2
        //vidaStrange = vidaStrange-golpeThanos;
        vidaStrange -= golpeThanos;
        console.log("Numero de Round: " + round);
        console.log(`Thanos, el destructor de mundos, gopea a Strange con una fuerza de ${golpeThanos}`);
        
       
    }
    //console.log("Numero de Round: " + round)
    console.log(`vida Thanos : ${vidaThanos}`);//3
    console.log(`vida Dr.Strange : ${vidaStrange}`);//4

}
if(strangeSigueVivo()){
    console.log("Gano Dr.Strange")
    document.write("gano Dr.Strange")
    document.write(`<img src="media/strange.jpg" >`)
    
} else {
    console.log("Gano Thanos")
    document.write("gano Thanos, el destructor de mundos")
    document.write(`<img src="media/thanos.jpg" >`)
    
    
}



//console.log(`vida Thanos : ${vidaThanos}`);
//console.log(`vida Strange : ${vidaStrange}`);
