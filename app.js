class Punto{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    totext(){
      return "(" + this.x + "," + this.y + ")";
    }
    distancia(puntoDos){
        let rx=(puntoDos.x-this.x)*(puntoDos.x-this.x);
        let ry=Math.pow(puntoDos.y-this.y,2);
        return Math.sqrt(rx+ry);
    }
}
class Recorrido{
    constructor(){
        this.puntos=new Array()
        this.agregar=function(nuevo){
          this.datos.push(nuevo);  
        }
    }
    distancia(){
     let sd=0;
     for(let i=0;i<this.puntos.length-1;i++)
      sd += this.puntos[i].distancia(this.puntos[i+1]);
      return sd;
    }
}



