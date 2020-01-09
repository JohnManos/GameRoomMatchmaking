import { Identifiers } from '@angular/compiler'
import { MMR } from './mmr';

// Work in progress
export class Player {
    id: string;
    mmrs: MMR[];
    name: string;
    constructor(id: string, name: string){
        this.id = id;
        this.name = name;
    }
}
