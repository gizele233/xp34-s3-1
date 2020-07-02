var resposta=new Map();
var area="";
var tool="";
var nome="";
var email="";

function pergunta(nquest, resp){

    var destino = 'div_destino';

    var url;

    if(nquest==2){
        if(resp=='a'){
            addRespostas(nquest,resp);
            return fazerRequisicao('page2-especial.html', destino)
        }
    }
    if(nquest==2.1){
        url='page3.html';
        addRespostas(nquest,resp);
        return fazerRequisicao(url, destino);
    }
    else{
        addRespostas(nquest,resp);
        url='page'+(nquest+1)+'.html';
        return fazerRequisicao(url, destino);
    }
}

function addArea(){
    area = document.getElementById('area').value;
    pergunta(3,area);
}

function addTool(){
    tool = document.getElementById('tool').value;
    pergunta(6,tool);
}

function addData(){
    nome = document.getElementById('nome').value;
    email = document.getElementById('email').value;
    
    create(nome, email, resposta);
    
}   

/**Adicionar elementos das listas**/
function addRespostas(nquest, resp){
    resposta.set(nquest, resp);
}