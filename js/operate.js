var resposta=new Map();

function pergunta(nquest, resp, destino){

    var url;

    if(destino=='page2'){
        if(resp=='a'){
            addRespostas(nquest,resp);
            return fazerRequisicao('page2-especial.html', destino)
        }
    }
    if(destino=='page2e'){
        url='page3.html';
        addRespostas(nquest,resp);
        return fazerRequisicao(url, destino);
    }
    if(destino=='regs'){
        url='page_agradec.html'
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