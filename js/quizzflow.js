var name;
var email;
var resposta;

var httpRequest;

/*assicronismo*/
function fazerRequisicao(url, destino){

    document.getElementById(destino).innerHTML = "<center><img src='loader.gif'></center>";

    if(window.XMLHttpRequest){
        httpRequest = new XMLHttpRequest();
    }

    else if(window.ActiveXObject){
        try{

            httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        
        }

        catch(e){

            try{

                httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            }
            
            catch(e){

                alert("Impossível instanciar o objeto XMLHttpRequest para esse navegador/versão");
            
            }
        
        }
    }

    if(!httpRequest){
        alert("Erro ao tentar criar uma instância do objeto XMLHttpRequest");
        return false;
    }

    httpRequest.onreadystatechange = situacaoRequisicao;
    
    httpRequest.open("GET", url);
    httpRequest.send();

}

function situacaoRequisicao(){

    if(httpRequest.readyState == 4){

        if(httpRequest.status == 200){

            document.getElementById('div_conteudo').innerHTML = httpRequest.responseText;
        
        }

    }

}

/*Transição das perguntas*/
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

}

/**Adiciona areas**/
function addEntrada(nquest, frm1, page) {

    var entrada = document.getElementById(frm1);
    
    var resp = entrada.nodeValue;

    alert(resp);
    return pergunta(nquest, resp, page);

}