// Utilizando TDD, crie uma função que recebe um número (em segundos)
// e transforma no formato “_h _m _s”.
// Dica: escreva testes para os valores 30, 350 e 3725

function numeroTempo(valor) {
  let horas = 0 
  let minutos = 0
  let segundos = 0
  
  if (valor < 60 ) {
segundos = valor 
  }
  
  if (valor >= 60 ){
    minutos = Math.trunc( valor / 60 ) 
    segundos = valor % 60
  }

    return `${horas}h ${minutos}m ${segundos}s`

}

test("converter o numero 30 em 0h 0m 30s", () => {
    const resultado = numeroTempo(30)
        expect(resultado).toBe('0h 0m 30s');
});

test("converter o numero 350 em minutos 0h 5m 50s", () => {
    const resultado = numeroTempo(350)
    expect(resultado).toBe('0h 5m 50s'); 
});
   


test.todo("converter o numero em segundos 1h 2m 5s");