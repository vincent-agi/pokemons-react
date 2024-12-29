export default class Pokemon {
    id: number = 0;
    hp: number = 100;
    cp: number = 10;
    name: string = "";
    picture: string = "";
    types: string[] = [];
    created: Date = new Date();

    constructor(
        id: number,
        hp: number,
        cp: number,
        name: string,
        picture: string,
        types: string[],
        created: Date
    ) {
        this.id = id,
        this.cp = cp,
        this.hp = hp,
        this.name = name,
        this.picture = picture,
        this.types = types,
        this.created = created
    }
}