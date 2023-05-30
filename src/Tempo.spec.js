// Utilizando TDD, crie uma função que recebe um número (em segundos)
// e transforma no formato “_h _m _s”.
// Dica: escreva testes para os valores 30, 350 e 3725

function numeroTempo(valor) {
    // const horas = valor * 60;
    // const minutos = valor / 60;
    // const segundos = valor % 60;
// if
    return `0h 0m ${valor}s`
}

test("converter o numero 30 em horas 0h 0m 30s", () => {
    const resultado = numeroTempo(30)
        expect(resultado).toBe('0h 0m 30s');
});

test.todo("converter o numero 350 em minutos 0h 5m 50s");

test.todo("converter o numero em segundos 1h 2m 5s");