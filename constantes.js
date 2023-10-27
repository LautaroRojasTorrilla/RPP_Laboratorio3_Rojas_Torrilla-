// Para la clase Persona
const inputsDefault = [
  { name: "Id", id: "id", type: "number", min: 1 },
  { name: "Nombre", id: "nombre", type: "text" },
  { name: "Apellido", id: "apellido", type: "text" },
  { name: "Edad", id: "edad", type: "number", min: 1 },
];

// Para la clase Heroe (heredada de Persona)
const inputsAir = [
  { name: "Alter Ego", id: "alterEgo", type: "text" },
  { name: "Ciudad", id: "ciudad", type: "text" },
  { name: "Año de Publicación", id: "publicado", type: "number", min: 1941 },
];

// Para la clase Villano (heredada de Persona)
const inputsLand = [
  { name: "Enemigo", id: "enemigo", type: "text" },
  { name: "Robos", id: "robos", type: "number", min: 1 },
  { name: "Asesinatos", id: "asesinatos", type: "number", min: 1 },
];
