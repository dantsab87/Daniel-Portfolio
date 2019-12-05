

    $("#emailclick").click(function () {
        if ($("#email").val() && $("#subject").val() && $("#msg").val() && $("#name").val() != null) {

            Email.send({
                SecureToken: "384fcf19-3202-46d3-ad60-19643ed4f02d",
                To: 'dantsab87@gmail.com',
                From: $("#email").val(),
                Subject: $("#subject").val(),
                Body: "From " + $("#name").val() + ": <BR> <BR> " + "Message:" + $("#msg").val()
            }).then(
                swal("Email Sent!", "", "success")
            ).then(
                $("#email").val(""),
                $("#subject").val(""),
                $("#msg").val(""),
                $("#name").val("")
            );
        }
        else {
            swal("Uh Oh!", "Please fill in the form!", "error");
        }
    });
