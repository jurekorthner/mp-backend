import { Util } from "src/util/color";

export default class Player {
    id: number;
    name: string;
    color: string; 

    constructor(name: string, id: number) {
        this.id = id;
        this.name = name;
    }
}