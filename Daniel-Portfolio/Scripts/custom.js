$("#emailclick").click(function () {
    Email.send({
        SecureToken: "b19966dc-f12e-464f-ad94-80e6f5d42658",
        To: 'dantsab87@gmail.com',
        From: $("#email").val(),
        Subject: $("#subject").val(),
        Body: "From " + $("#name").val() + ": " + $("#msg").val()
    }).then(
        message => alert("Email has been sent!")
    );
});