class Heroe extends Persona {
  constructor(id, nombre, apellido, edad, alterEgo, ciudad, publicado) {
      super(id, nombre, apellido, edad);
      this.alterEgo = alterEgo;
      this.ciudad = ciudad;
      this.publicado = publicado;
  }

  toString() {
      return super.toString() + `, Alter Ego: ${this.alterEgo}, Ciudad: ${this.ciudad}, Año de Publicación: ${this.publicado}`;
  }

  toJson() {
      const personaJson = super.toJson();
      const heroeJson = JSON.stringify({
          alterEgo: this.alterEgo,
          ciudad: this.ciudad,
          publicado: this.publicado,
      });
      return Object.assign(JSON.parse(personaJson), JSON.parse(heroeJson));
  }

  update(data) {
      super.update(data);
      this.alterEgo = data.alterEgo;
      this.ciudad = data.ciudad;
      this.publicado = Number(data.publicado);
  }
}
