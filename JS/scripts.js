const objts = [
    {
        nome:'Larissa',
        idade: 18,
        esta_trabalhando: true,
        detalhes_prossisao:{
            profissao:'Programador',
            empresa:'On2'
        },
        hobbies: ['Casos criminais', 'Programar','Ler'],
    },
    {
        nome:'Isabella',
        idade: 21,
        esta_trabalhando: false,
        detalhes_prossisao:{
            profissao: null,
            empresa: null
        },
        hobbies: ['Dormir', 'Estudar','Ler'],
    }
]

//JSON - CONVERTER OBJETO PARA JSON - ENVIANDO PARA API
const jsonData = JSON.stringify(objts);

console.log(jsonData);
console.log(typeof jsonData);

//JSON - CONVERTER JSON PARA OBJETO
const objData = JSON.parse(jsonData);

console.log(objData);
console.log(typeof objData);

objData.map((pessoa) =>{
    console.log(pessoa.nome);
})