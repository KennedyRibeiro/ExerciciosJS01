// EX 01

function concatenarValores(){
    let nome = document.getElementById('nome').value;
    let profissao = document.getElementById('profissao').value;
    document.getElementById('resultado-concatenacao').value = `${nome} possui a profissão de ${profissao}`;
}

// EX 02

function verificarSituacaoAluno(){
    let nome = document.getElementById('nome-aluno').value;
    let n1 = document.getElementById('nota1').value;
    let n2 = document.getElementById('nota2').value;

    let media = (n1 + n2)/2;

    if(media >= 70){
        document.getElementById('resultado-situacao-aluno').value = `${nome} está Aprovado`;
    }else if(media < 70 && media >= 40){
        document.getElementById('resultado-situacao-aluno').value = `${nome} está de Exame final`;
    }else{
        document.getElementById('resultado-situacao-aluno').value = `${nome} está Reprovado`;
    }
    
}


// EX 03

function verificarIdade(){
    let idade = document.getElementById('idade').value;

    if (idade >= 18) {
        document.getElementById('resultado-verificacao').value = `${idade} maior de idade`;
    }else{
        document.getElementById('resultado-verificacao').value = `${idade} menor de idade`;
    }

}

