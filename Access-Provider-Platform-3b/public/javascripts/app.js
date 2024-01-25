$(function(){

    $("#register").on('click', function(event){
        event.preventDefault();
        var re_email =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        var re_mobile = /^\+?[0-9]+[0-9\-]+[0-9]$/
        var re_string = /^[A-Za-z]+$/
        var firstname   = $("#firstname").val();
        var lastname   = $("#lastname").val();
        var mobile     = $("#mobile").val();
        var email      = $("#email").val();
        var username    = $("#username").val();
        var password   = $("#password").val();
        var cpassword  = $("#cpassword").val();
        var provider     = $("#provider").val(); 
        var terms      = $('input[name="terms"]:checked').val();

        if (firstname == 0 || ! re_string.test(firstname))
        {
            document.getElementsByName("firstname")[0].style.borderColor = "red";
        }
        else{
            document.getElementsByName("firstname")[0].style.borderColor = "white";
        }

        if (lastname == 0 || ! re_string.test(lastname))
        {
            document.getElementsByName("lastname")[0].style.borderColor = "red";
        }
        else{
            document.getElementsByName("lastname")[0].style.borderColor = "white";
        }

        if (mobile == 0 || ! re_mobile.test(mobile))
        {
            document.getElementsByName("mobile")[0].style.borderColor = "red";
        }
        else{
            document.getElementsByName("mobile")[0].style.borderColor = "white";
        }
        if (email == 0 || ! re_email.test(email))
        {
            document.getElementsByName("email")[0].style.borderColor = "red";
        }
        else{
            document.getElementsByName("email")[0].style.borderColor = "white";
        }
        if (username == 0 )
        {
            document.getElementsByName("username")[0].style.borderColor = "red";
        }
        else{
            document.getElementsByName("username")[0].style.borderColor = "white";
        }
        if (password == 0 )
        {
            document.getElementsByName("password")[0].style.borderColor = "red";
        }
        else{
            document.getElementsByName("password")[0].style.borderColor = "white";
        }

        if (cpassword == 0 )
        {
            document.getElementsByName("cpassword")[0].style.borderColor = "red";
        }
        else{
            document.getElementsByName("cpassword")[0].style.borderColor = "white";
        }

        if (provider == 0 )
        {
            document.getElementsByName("provider")[0].style.borderColor = "red";
        }
        else{
            document.getElementsByName("provider")[0].style.borderColor = "white";
        }


        if(!firstname || !lastname || !mobile || !email || !password || !cpassword || !username  || !provider ){ 
            $("#msgDiv").show().html("All fields are required.");
        } else if(cpassword != password){
            $("#msgDiv").show().html("Passowrds should match.");
            document.getElementsByName("password")[0].style.borderColor = "red";
            document.getElementsByName("cpassword")[0].style.borderColor = "red";
        } else if (!terms){
            $("#msgDiv").show().html("Please agree to terms and conditions.");
            document.getElementsByName("terms")[0].style.outline = "1px solid red"
        }
        else{ 
            console.log("i am here");
            $.ajax({
                url: "/users/register",
                method: "POST",
                data: { firstname: firstname, lastname: lastname, mobile: mobile, email: email, password: password, cpassword: cpassword, username: username, provider: provider,terms: terms }
            }).done(function( data ) {

                if ( data ) {
                    if(data.status == 'error'){

                        var errors = '<ul>';
                        $.each( data.message, function( key, value ) {
                            errors = errors +'<li>'+value.msg+'</li>';
                        });

                        errors = errors+ '</ul>';
                        $("#msgDiv").html(errors).show();
                    }else{
                        alert("Sucessfully Registered the user, click ok to go to login page");
                        window.location.href = "/";
                    }
                }
            });
        }
    });


    $("#update").on('click', function(event){
        event.preventDefault();
        var re_email =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        var re_mobile = /^\+?[0-9]+[0-9\-]+[0-9]$/
        var re_string = /^[A-Za-z]+$/
        var firstname   = $("#firstname").val();
        var lastname   = $("#lastname").val();
        var mobile     = $("#mobile").val();
        var email      = $("#email").val();
        var username    = $("#username").val();
        var provider = $("#provider").val();
        var password   = $("#password").val();
        var cpassword  = $("#cpassword").val();


        if (firstname == 0 || ! re_string.test(firstname))
        {
            document.getElementsByName("firstname")[0].style.borderColor = "red";
        }
        else{
            document.getElementsByName("firstname")[0].style.borderColor = "white";
        }

        if (lastname == 0 || ! re_string.test(lastname))
        {
            document.getElementsByName("lastname")[0].style.borderColor = "red";
        }
        else{
            document.getElementsByName("lastname")[0].style.borderColor = "white";
        }

        if (mobile == 0 || ! re_mobile.test(mobile))
        {
            document.getElementsByName("mobile")[0].style.borderColor = "red";
        }
        else{
            document.getElementsByName("mobile")[0].style.borderColor = "white";
        }
        if (email == 0 || ! re_email.test(email))
        {
            document.getElementsByName("email")[0].style.borderColor = "red";
        }
        else{
            document.getElementsByName("email")[0].style.borderColor = "white";
        }
        if (username == 0 )
        {
            document.getElementsByName("username")[0].style.borderColor = "red";
        }
        else{
            document.getElementsByName("username")[0].style.borderColor = "white";
        }
        if (password == 0 )
        {
            document.getElementsByName("password")[0].style.borderColor = "red";
        }
        else{
            document.getElementsByName("password")[0].style.borderColor = "white";
        }

        if (cpassword == 0 )
        {
            document.getElementsByName("cpassword")[0].style.borderColor = "red";
        }
        else{
            document.getElementsByName("cpassword")[0].style.borderColor = "white";
        }

        if(!firstname || !lastname || !mobile || !email || !password || !cpassword || !username ){ 
            $("#msgDiv").show().html("All fields are required.");
        } else if(cpassword != password){
            $("#msgDiv").show().html("Passowrds should match.");
            document.getElementsByName("password")[0].style.borderColor = "red";
            document.getElementsByName("cpassword")[0].style.borderColor = "red";
        } 
        else{ 
            $.ajax({
                url: "/users/edit",
                method: "POST",
                data: { firstname: firstname, lastname: lastname, mobile: mobile, email: email, password: password, cpassword: cpassword, provider:provider, username: username}
            }).done(function( data ) {

                if ( data ) {
                    if(data.status == 'error'){

                        var errors = '<ul>';
                        $.each( data.message, function( key, value ) {
                            errors = errors +'<li>'+value.msg+'</li>';
                        });

                        errors = errors+ '</ul>';
                        $("#msgDiv").html(errors).show();
                    }else{
                        alert("Sucessfully Updated the user, click ok to go to dashboard");
                        window.location.href = "/dashboard";
                    }
                }
            });
        }
    });


    $("#acceptagreements").on('click', function(){

        var id = $("#id").val();
        var title = $("#title").val();
        var position = $("#position").val();
        var skill = $("#skill").val();
        var salary = $("#salary").val();
        var cycle = $("#cycle").val();
        var jobStartDate = $("#jobStartDate").val();
        var jobEndDate = $("#jobEndDate").val();
        var technologyLevel = $("#technologyLevel").val();
        var role = $("#role").val();
        var status = $("#status").val();

        console.log(id,title,position,skill,salary,cycle,jobStartDate,jobEndDate,technologyLevel,role, status);
        if( !id || !title || !position ||!skill || !salary || !cycle || !jobStartDate || !jobEndDate || !technologyLevel || !role || !status){ 
            console.log("didnt get data")
            $("#msgDiv").show().html("All fields are required check.");  
        } 
        else{ 
            $.ajax({
                url: "/users/acceptagreement",
                method: "POST",
                data: {id: id,title: title,position: position,skill: skill,salary: salary,cycle: cycle,jobStartDate: jobStartDate, jobEndDate: jobEndDate,technologyLevel: technologyLevel, role: role, status: "accepted"}
            }).done(function( data ) {

                if ( data ) {
                    if(data.salary == " "){

                       alert("salary can't be blank");
                    }else{
                        alert("Sucessfully Accepted the agreement, click ok to go to dashboard");
                        window.location.href = "/dashboard";
  
                    }
                }
            });
        }
    });


    $("#rejectagreements").on('click', function(){

        var id = $("#id").val();
        var title = $("#title").val();
        var position = $("#position").val();
        var skill = $("#skill").val();
        var salary = $("#salary").val();
        var cycle = $("#cycle").val();
        var jobStartDate = $("#jobStartDate").val();
        var jobEndDate = $("#jobEndDate").val();
        var technologyLevel = $("#technologyLevel").val();
        var role = $("#role").val();
        var status = $("#status").val();

        console.log(id,title,position,skill,salary,cycle,jobStartDate,jobEndDate,technologyLevel,role);
        if( !id || !title || !position ||!skill || !salary || !cycle || !jobStartDate || !jobEndDate || !technologyLevel || !role || !status){ 
            console.log("didnt get data")
            $("#msgDiv").show().html("All fields are required check.");  
        } 
        else{ 
            $.ajax({
                url: "/users/acceptagreement",
                method: "POST",
                data: {id: id,title: title,position: position,skill:skill,salary:salary,cycle: cycle,jobStartDate: jobStartDate, jobEndDate: jobEndDate,technologyLevel: technologyLevel, role: role, status: "rejected"}
            }).done(function( data ){

                if ( data ) {
                    if(data.salary == " "){
                        alert("salary can't be blank");
                    } else{
                        alert("Sucessfully Rejected the agreement, click ok to go to dashboard");
                        window.location.href = "/dashboard";
  
                    }
                }
            });
        }
    });

    $("#bid").on('click', function(){
        var id = $("#id").val();
        var title = $("#title").val();
        var position = $("#position").val();
        var skill = $("#skill").val();
        var salary = $("#salary").val();
        var cycle = $("#cycle").val();
        var jobStartDate = $("#jobStartDate").val();
        var jobEndDate = $("#jobEndDate").val();
        var technologyLevel = $("#technologyLevel").val();
        var role = $("#role").val();
        var status = $("#status").val();
        if( !id || !title || !position || !skill || !salary || !cycle || !jobStartDate ||!jobEndDate || !technologyLevel || !role || !status){ 
            console.log("didnt get data")
            $("#msgDiv").show().html("All fields are required check.");  
        } 
        else{ 
            $.ajax({
                url: "/users/bidagreement",
                method: "POST",
                data: {id: id,title: title,position: position,skill: skill,salary: salary,cycle: cycle,jobStartDate: jobStartDate,jobEndDate: jobEndDate, technologyLevel: technologyLevel,role: role, status: "bidded"}
            }).done(function( data ) {

                if ( data ) {
                    if(data.salary == " "){

                        alert("salary can't be blank");
                    }else{
                        alert("Sucessfully Bidded the agreement, click ok to go to dashboard");
                        window.location.href = "/dashboard";
  
                    }
                }
            });
        }
    });


    // final post start
    $("#submitoffer").on('click', function (event) {
        event.preventDefault();
        var servicerequest_id =$("#servicerequest_id").val();
        var agreement_title_id = $("#agreement_title_id").val();
        var agreement_title = $("#agreement_title").val();
        var project_information = $("#project_information").val();
        var employee_name = $("#employee_name").val();
        var provider_name = $("#provider_name").val();
        var contactperson = $("#contactperson").val();
        var externalperson = $("#externalperson").val();
        var rate = $("#rate").val();
        var dateuntil = $("#dateuntil").val();
        var notes = $("#notes").val();
        var document = $("#document").val();
        var status = $("#status").val();  

        if (!servicerequest_id || !agreement_title_id || !agreement_title || !project_information || !employee_name || !provider_name || !contactperson || !externalperson || !rate || !dateuntil || !notes || !document || !status) {
            $("#msgDiv").show().html("All fields are required check.");
        } else {
            console.log("i am in before ajax");
            $.ajax({
                url: "/users/addoffer",
                method: "POST",
                data: {
                    servicerequest_id : servicerequest_id,
                    agreement_title_id : agreement_title_id,
                    agreement_title : agreement_title,
                    project_information : project_information,
                    employee_name: employee_name,
                    provider_name: provider_name,
                    contactperson: contactperson,
                    externalperson: externalperson,
                    rate: rate,
                    dateuntil: dateuntil,
                    notes: notes,
                    document: document,
                    status: status,
                }
            }).done(function (data) {

                if (data) {
                    console.log("save offer", data);
                    if (data.status == 'error') {
                        console.log("offer post error");

                        var errors = '<ul>';
                        $.each(data.message, function (key, value) {
                            errors = errors + '<li>' + value.msg + '</li>';
                        });

                        errors = errors + '</ul>';
                        $("#msgDiv").html(errors).show();
                    } else {
                        alert("Sucessfully Submitted the offer, click ok to go to dashboard");
                        window.location.href = "/dashboard";
                    }
                }
            });
        }
    });

    // final post end
    $("#addoffer").on('click', function(){

        var radioVal = $('input[type=radio][name=radioaddoffer]:checked').val();
        var emp = document.getElementById("empid" + radioVal);
        var empVal = $(emp).val();

        console.log(empVal);
    });
});