export class Laptop{
    id:number;
    price: number;
    manufacturer: string;
    image: string;
    code: string;
    ram: number;
    size: number;
    cpu:string;
    gpu:string;
    storageSize: number;
    storageDevice: string;
    opSystem: string;
    weight: number;
    pop: number;
    constructor(id:number, price:number,manufacturer:string, image:string, code:string, ram:number, size:number, cpu:string, gpu:string, storageSize:number, storageDevice:string, opSystem:string, weight:number, pop:number){
        this.id=id;
        this.price = price;
        this.manufacturer = manufacturer;
        this.image = image;
        this.code = code;
        this.ram = ram;
        this.size = size;
        this.cpu = cpu;
        this.gpu = gpu;
        this.storageSize = storageSize;
        this.storageDevice = storageDevice;
        this.opSystem = opSystem;
        this.weight = weight;
        this.pop = pop;
    }
}