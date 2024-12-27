

const coordenadas: [number, number] = [10, 20];

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

enum Status {
  Pendente,
  Aprovado,
  Rejeitado
}
const pedido = Status.Aprovado; 


/*
   💡 Casos de uso:

  Status de pedidos, tarefas ou fluxos.
  Definir papéis de usuários (Admin, User, Guest).

*/