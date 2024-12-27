"use strict";
// TypeInferece é a tipagem dinâmica do TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
let curso = "typescript";
let tecnologies = ["JavaScript", "TypeScript", "NodeJS"]; // Array de strings
tecnologies.push("React Native"); // Adicionando um novo elemento ao array
tecnologies.push(2025); // Erro, pois o array é de strings
console.log(tecnologies);
