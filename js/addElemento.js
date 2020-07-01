var area="";
var tool="";
var nome="";
var email="";

resposta= new Map();

function addArea(){
    area = document.getElementById('area').value;

}

function addTool(){
    tool = document.getElementById('tool').value;
 
}

function addData(){
    nome = document.getElementById('nome').value;
    email = document.getElementById('email').value;

    create(nome, email, resposta);
    


}