const { database } = require("firebase");

const shtl-database = {}

(function(){
    let lead = false;

    function new_lead(nome, email, respostas){
        const lead_data = {
            nome: nome;
            email: email;
            respostas: respostas;
            createdat: firebase.database.ServerValue.TIMESTAMP
        };
        if(!lead){
            lead=firebase.database().ref().child(contato).push().key;
        }

        let updates = {};
        updates[contato + lead] = lead_data;

        let lead_ref.update(updates)
            .then(function(){
                return{success:true, message:'Obrigado'}
            })
            .catch(function(error){
                return{success: false, message: 'Falhou'}
            })
    }

    shtl-database.new = new_lead

})()

