function sendMail(){
    var params = {
        form_name : document.getElementById("form_name").value,
        form_email: document.getElementById("form_email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
        category_form: document.getElementById("category_form").value
    }
    emailjs.send("service_v6kki0k", "template_wuc0jlr", params).then( function(res){
        console.log(res.status);
        switch (res.status){
            case 200:
                document.getElementById("notification").classList.add("notification")
                document.getElementById("notification-text").innerHTML = "Votre message a été envoyé avec succès !";
                break;
            default:
                document.getElementById("notification").classList.add("notification")
                document.getElementById("notification-text").innerHTML = "Une erreur est survenue !";
                break;
        }       

        resetFom();
        
    })
}

function resetFom(){
    document.getElementById("form_name").value = "";
    document.getElementById("form_email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    document.getElementById("category_form").value = ""; 
}