const alunos = [
  {
    nome: 'Mathias',
    notas: [
      { cadeira: 'DW2', nota: 10 },
      { cadeira: 'BD2', nota: 7 },
    ],
  },
  {
    nome: 'Luiza',
    notas: [
      { cadeira: 'DW2', nota: 8 },
      { cadeira: 'BD2', nota: 8 },
    ],
  },
  {
    nome: 'Pedro',
    notas: [
      { cadeira: 'DW2', nota: 10 },
      { cadeira: 'BD2', nota: 10 },
    ],
  },
];

const mediaGeral = [{}];

const mediaGeral = alunos.map((notas) => {
    alunos.notas.reduce((acc, _nota) => {
    const { nota } = _nota;
    return acc + nota;
  }, 0); const somaToal = mediaGeral / alunos.notas.length; return alunos; });



console.log(mediaGeral);
