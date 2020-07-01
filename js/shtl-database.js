function create(nome, email, resp){
    var data = { nome: nome, email: email, resp: resp };

    return firebase.database().ref().child('leads').push(data);
}