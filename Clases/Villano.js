class Villano extends Persona {
    constructor(id, nombre, apellido, edad, enemigo, robos, asesinatos) {
        super(id, nombre, apellido, edad);
        this.enemigo = enemigo;
        this.robos = robos;
        this.asesinatos = asesinatos;
    }

    toString() {
        return super.toString() + `, Enemigo: ${this.enemigo}, Robos: ${this.robos}, Asesinatos: ${this.asesinatos}`;
    }

    toJson() {
        const personaJson = super.toJson();
        const villanoJson = JSON.stringify({
            enemigo: this.enemigo,
            robos: this.robos,
            asesinatos: this.asesinatos,
        });
        return Object.assign(JSON.parse(personaJson), JSON.parse(villanoJson));
    }

    update(data) {
        super.update(data);
        this.enemigo = data.enemigo;
        this.robos = Number(data.robos);
        this.asesinatos = Number(data.asesinatos);
    }
}
