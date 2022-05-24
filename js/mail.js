function sendMail(){
    var params = {
        form_name : document.getElementById("form_name").value,
        form_email: document.getElementById("form_email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
        category: document.getElementById("category_form").value
    }

    emailjs.send("service_v6kki0k", "template_wuc0jlr", params).then( function(res){
        alert("success" + res.status);
    })
}