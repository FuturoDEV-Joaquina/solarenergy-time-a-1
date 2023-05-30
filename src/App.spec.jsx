// // describe("Jest", () => {
// //   it("testing jest", () => {
// //     expect(1 + 1).toBe(2);
// //   });
// // });



// function stringInfo(texto) {
//     const caracteres = texto.length;
//     const primeiroCaracter = texto[0];
//     const ultimoCaracter = texto[texto.length -1]

//     const info = {
//         caracteres,
//         primeiroCaracter,
//         ultimoCaracter,
//     }
//     return info
//  }

// describe("String Info", () => { 
//     test("deveria retornar um objeto com as informações de quantos cara a string possui", () => {
//         const resultado = stringInfo("abc")
//         expect(resultado).toEqual(
//             expect.objectContaining({
//                 caracteres: 3
//             }))
//     })

//     test("deveria retornar um objeto com as informações de qual seu primeiro caracter", () => {
//         const resultado = stringInfo("abc")
//         expect(resultado).toEqual(
//             expect.objectContaining({
//                 primeiroCaracter: "a",
//             }))
//     })

//     test("deveria retornar um objeto com a informação do último caracter", () => {
//         const resultado = stringInfo("abc")
//         expect(resultado).toEqual(
//             expect.objectContaining({
//                 ultimoCaracter: "c",
//             }))
//     })

//     test("deveria retornar um objeto com todas as informação", () => {
//         const resultado = stringInfo("abc")
//         expect(resultado).toEqual({
//             caracteres: 3,
//             primeiroCaracter: "a",
//             ultimoCaracter: "c"
//         });
//     })
// })