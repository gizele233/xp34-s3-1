var resposta=new Map();

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

/**Adicionar elementos das listas**/
function addRespostas(nquest, resp){
    resposta.set(nquest, resp);
    return null;
}