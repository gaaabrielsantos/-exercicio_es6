function totalAlunos() {
    const alunos = [
        { nome: 'Gabriel', nota: 9.5 },
        { nome: 'Lorena', nota: 5.5 },
        { nome: 'Isabelle', nota: 8.0 },
        { nome: 'Ana', nota: 6.0 },
        { nome: 'Maria', nota: 2.5 }
    ];

    const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);

    return alunosAprovados;
}

const alunosAprovados = totalAlunos();
console.log(alunosAprovados);