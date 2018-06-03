export class Name {
    private age: number = 25
    protected male: boolean = true
    constructor(public name: string) {
    }

    public getName = function() {
        return this.name
    }
}