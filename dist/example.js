"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coordenadas = [10, 20];
/*
   💡 Casos de uso:
    Coordenadas (x, y)
    Respostas de APIs onde o tipo e a posição são importantes.
 */
// --------------------------------------------
/*
  📌 Enums:
     Use para definir conjuntos nomeados de valores constantes.
  👇   Exemplo:
*/
var Status;
(function (Status) {
    Status[Status["Pendente"] = 0] = "Pendente";
    Status[Status["Aprovado"] = 1] = "Aprovado";
    Status[Status["Rejeitado"] = 2] = "Rejeitado";
})(Status || (Status = {}));
const pedido = Status.Aprovado;
/*
   💡 Casos de uso:

  Status de pedidos, tarefas ou fluxos.
  Definir papéis de usuários (Admin, User, Guest).

*/ 
