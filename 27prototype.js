class geo{
    constructor(){
        this.lat = 43.22,
        this.long=32.32
    }
}


class language1 extends geo{
    constructor(name,country){ 
        super()
        this.name = name;
        this.country = country
    }

    greet = () => {
        return `Say Hi to ${this.name}`
    }
}