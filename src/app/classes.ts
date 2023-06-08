
export class Batch11
{
    trainer:string = "Abhijit Sir";
    date:String = "16/01/2023";

    constructor( trainer:string, date:string)
    {
       this.trainer = trainer;
       this.date = date
    }
}
export class Batch12
{
    trainer:string = "Navy Sir";
    date:String = "01/03/2023";
}


export interface student
{
    id:number,
    name:string
    marks:number;
    subjects: Array<string>;
    batch :Batch11
    
}