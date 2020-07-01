document.getElementById("btnArea").addEventListener("click", addArea);
document.getElementById("btnTool").addEventListener("click", addTool);

function addArea(){
    event.preventDefault();
    
    let areaInput = document.getElementById("area").value;

    return pergunta(3, areaInput, 'page3');

}

function addTool(){
    event.preventDefault();
    
    let toolInput = document.getElementById("tool").value;

    return pergunta(3, toolInput, 'regs');
}