try {
    


if(pagenames == "contact")
{
function sendEmail()
{
    try {
        $('#ec-overlay').show()
        $("#sendmaildone").attr("disabled", true)
        
        var errorschecks = "success";
        document.getElementById("erroremils").innerHTML = ""; 
        document.getElementById("errormsges").innerHTML = "";
        document.getElementById("errornames").innerHTML = "";
        var msg = $('#message').val();
    var email = $('#useremail').val();
    var name = $('#username').val();
    if (msg == "") {
        document.getElementById("errormsges").innerHTML = "Message required";
        errorschecks = "error";
    }
    else {
        if (errorschecks == "success") { document.getElementById("errormsges").innerHTML = ""; errorschecks = "success"; }
    }
    if (email == "") {
        document.getElementById("erroremils").innerHTML = "Email required";
        errorschecks = "error";
    } else {
        if (errorschecks == "success") { 
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!filter.test(email)) {
                document.getElementById("erroremils").innerHTML = "Please enter correct email format";
                errorschecks = "error";
            }
            else{
                document.getElementById("erroremils").innerHTML = ""; 
                errorschecks = "success"; 
            }
            
        
        }

    }
    if (name == "") {
        document.getElementById("errornames").innerHTML = "Name required";
        errorschecks = "error";
    } else {
        if (errorschecks == "success")
        {errorschecks = "success";document.getElementById("errornames").innerHTML = "";}
    }

    if(errorschecks == "success"){
 $.getScript('/javascript/social_links.js', function () {
       
    
    $.ajax({
        url: apicon+"/api/ECom/SendContactEmail?Email="+social_email+"&Msg="+encodeURIComponent(msg)+"&UserEmail="+email+"&UserName="+name,
        method: "GET",
                    headers: {
                    'SubDomain': subdomain,
                    'AccessKey': AccessKey,
                    },
                    success: function(response){
                        console.log(response);
                        if("True" == response)
                        {
                            $('#message').val('');
                            $('#useremail').val('');
                            $('#username').val('');
                            $('#ec-overlay').hide()
                            var options = {
                                autoClose: true,
                                progressBar: true,
                                enableSounds: true,
                                sounds: {
            
                                    success: "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3",
            
                                },
                            };
                            var toast = new Toasty(options);
                            toast.configure(options);
            
                            toast.success("Request successfully sent");
                        
                        }
                        else
                        {
                            $('#ec-overlay').hide()
                            var options = {
                                autoClose: true,
                                progressBar: true,
                                enableSounds: true,
                                sounds: {
            
                                    error: "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3",
            
                                },
                            };
                            var toast = new Toasty(options);
                            toast.configure(options);
                            
                            toast.error("Request failed");
                        
                        }
                        
                        
                        $("#sendmaildone"). attr("disabled", false)
                        
                    },
                    error:function(){
                        var options = {
                            autoClose: true,
                            progressBar: true,
                            enableSounds: true,
                            sounds: {
        
                                error: "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3",
        
                            },
                        };
                        var toast = new Toasty(options);
                        toast.configure(options);
                        
                        toast.error("Request failed");
                        $("#sendmaildone"). attr("disabled", false)
                        $('#ec-overlay').hide()
                    }
        });
    })
}
else{
    $("#sendmaildone"). attr("disabled", false)
    $('#ec-overlay').hide()

}
    } catch (error) {
        
    }
    
}



}
} catch (error) {
    console.log(error)
}