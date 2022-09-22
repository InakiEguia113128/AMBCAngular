export class Alumnos{
    legajo:number
    nombre:string
    apellido:string
    id:number

    constructor(leg:number,nom:string,ape:string,id:number){
        this.legajo = leg;
        this.nombre = nom;
        this.apellido = ape;
        this.id = id;
    }
    toString(){
        return this.nombre+" "+this.apellido+" :"+this.legajo
    }
}