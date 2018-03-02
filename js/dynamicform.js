var formnum = 0;
q1 = false; q2 = false; q3 = false; q4 = false; q5 = false;
q6 = false; q7 = false; q8 = false; q9 = false; q10 = false;
$("#over").click(function () {
    $("#text").hide(1000);
    $("#form").show("slow");
    showcomponent(0);
});

function showcomponent(num) {
    switch (num) {
        case 0:
            var rr = '<p class="text">1&rarr; What\'s your name?</p>';
            rr += '<input class="textin" type="text" required id="name"><br><br>';
            $('#form').append(rr);
            break;
        case 1:
            if (q1) {
                var x = $('#name').val();
                var rr = '<div id="1" style="display: none">';
                rr += '<p class="text">2&rarr; ' + x + ', What\'s your last name?</p>';
                rr += '<input class="textin" type="email" required id="last"><br><br>';
                rr += '</div>';
                $('#1').replaceWith(rr);
                $("#1").show(1000);
            } else {
                var x = $('#name').val();
                var rr = '<div id="1" style="display: none">';
                rr += '<p class="text">2&rarr; ' + x + ', What\'s your last name?</p>';
                rr += '<input class="textin" type="email" required id="last"><br><br>';
                rr += '</div>';
                $('#form').append(rr);
                $("#1").show(1000);
                q1 = true;
            }
            break;
        case 2:
            if (q2) {
                var x = $('#name').val();
                var y = $('#last').val();
                var rr = '<div id="2" style="display: none">';
                rr += '<p class="text">3&rarr; ' + y.toUpperCase() + ', ' + x + ': What\'s the best email address for you?</p>';
                rr += '<input class="textin" type="email" required id="mail"><br><br>';
                rr += '</div>';
                $('#2').replaceWith(rr);
                $("#2").show(1000);
            } else {
                var x = $('#name').val();
                var y = $('#last').val();
                var rr = '<div id="2" style="display: none">';
                rr += '<p class="text">3&rarr; ' + y.toUpperCase() + ', ' + x + ': What\'s the best email address for you?</p>';
                rr += '<input class="textin" type="email" required id="mail"><br><br>';
                rr += '</div>';
                $('#form').append(rr);
                $("#2").show(1000);
                q2 = true;
            }
            break;
        case 3:
            if (q3) {
                var rr = '<div id="3" style="display: none">';
                rr += '<p class="text">4&rarr; How old are you?</p>';
                rr += '<input class="textin" type="number" required id="age"><br><br>';
                rr += '</div>';
                $('#3').replaceWith(rr);
                $("#3").show(1000);
            } else {
                var rr = '<div id="3" style="display: none">';
                rr += '<p class="text">4&rarr; How old are you?</p>';
                rr += '<input class="textin" type="number" required id="age"><br><br>';
                rr += '</div>';
                $('#form').append(rr);
                $("#3").show(1000);
                q3 = true;
            }
            break;
        case 4:
            var x = $('#age').val();
            if (q4) {
                if (x > 18) {
                    var rr = '<div id="4" style="display: none">';
                    rr += '<p class="text">5&rarr; Contact Address?</p>';
                    rr += '<input class="textin" type="text" required id="address"><br><br>';
                    rr += '</div>';
                    $('#4').replaceWith(rr);
                } else {
                    var rr = '<div id="4" style="display: none">';
                    rr += '<p class="text">5&rarr; Parent\'s Address?</p>';
                    rr += '<input class="textin" type="text" required id="address"><br><br>';
                    rr += '</div>';
                    $('#4').replaceWith(rr);
                }
                $("#4").show(1000);
            } else {
                if (x > 18) {
                    var rr = '<div id="4" style="display: none">';
                    rr += '<p class="text">5&rarr; Contact Address?</p>';
                    rr += '<input class="textin" type="text" required id="address"><br><br>';
                    rr += '</div>';
                    $('#form').append(rr);
                } else {
                    var rr = '<div id="4" style="display: none">';
                    rr += '<p class="text">5&rarr; Parent\'s Address?</p>';
                    rr += '<input class="textin" type="text" required id="address"><br><br>';
                    rr += '</div>';
                    $('#form').append(rr);
                }
                $("#4").show(1000);
                q4 = true;
            }
            break;
        case 5:
            var x = $('#age').val();
            if (q5) {
                if (x > 18) {
                    var rr = '<div id="5" style="display: none">';
                    rr += '<p class="text">6&rarr; Personal Phone Number?</p>';
                    rr += '<input class="textin" type="text" required id="num"><br><br>';
                    rr += '</div>';
                    $('#5').replaceWith(rr);
                } else {
                    var rr = '<div id="5" style="display: none">';
                    rr += '<p class="text">6&rarr; Parent\'s Phone Number?</p>';
                    rr += '<input class="textin" type="text" required id="num"><br><br>';
                    rr += '</div>';
                    $('#5').replaceWith(rr);
                }
                $("#5").show(1000);
            } else {
                if (x > 18) {
                    var rr = '<div id="5" style="display: none">';
                    rr += '<p class="text">6&rarr; Personal Phone Number?</p>';
                    rr += '<input class="textin" type="text" required id="num"><br><br>';
                    rr += '</div>';
                    $('#form').append(rr);
                } else {
                    var rr = '<div id="5" style="display: none">';
                    rr += '<p class="text">6&rarr; Parent\'s Phone Number?</p>';
                    rr += '<input class="textin" type="text" required id="num"><br><br>';
                    rr += '</div>';
                    $('#form').append(rr);
                }
                $("#5").show(1000);
                q5 = true;
            }
            break;
        case 6:
            if (q6) {
                var rr = '<div id="6" style="display: none">';
                rr += '<p class="text">7&rarr; Where did you come across me?</p>';
                rr += '<input type="radio" name="media" value="Whatsapp">Whatsapp';
                rr += '<input type="radio" name="media" value="Instagram>Instagram>';
                rr += '<input type="radio" name="media" value="Facebook>Facebook<br><br>';
                rr += '</div>';
                $('#6').replaceWith(rr);
                $("#6").show(1000);
            } else {
                var rr = '<div id="6" style="display: none">';
                rr += '<p class="text">7&rarr; Where did you come across me?</p>';
                rr += '<input type="radio" name="media" value="Whatsapp">WhatsApp<br>';
                rr += '<input type="radio" name="media" value="Instagram">Instagram<br>';
                rr += '<input type="radio" name="media" value="Facebook">Facebook<br><br>';
                rr += '</div>';
                $('#form').append(rr);
                $("#6").show(1000);
                q6 = true;
            }
            break;
        case 7:
        var x = $('[name=media]:checked').val();
            if(q7){
                if(x == "Whatsapp"){
                    var rr = '<div id="7" style="display: none">';
                    rr += '<p class="text">8&rarr; WhatsApp Number</p>';
                    rr += '<input class="textin" type="text" required id="med"><br><br>';
                    rr += '</div>';
                    $('#7').replaceWith(rr);
                }else if(x == "Instagram"){
                    var rr = '<div id="7" style="display: none">';
                    rr += '<p class="text">8&rarr; Instagram Account</p>';
                    rr += '<input class="textin" type="text" required id="med"><br><br>';
                    rr += '</div>';
                    $('#7').replaceWith(rr);
                }else if(x == "Facebook"){
                    var rr = '<div id="7" style="display: none">';
                    rr += '<p class="text">8&rarr; Facebook Username</p>';
                    rr += '<input class="textin" type="text" required id="med"><br><br>';
                    rr += '</div>';
                    $('#7').replaceWith(rr);
                }
                $("#7").show(1000);
            }else{
                if(x == "Whatsapp"){
                    var rr = '<div id="7" style="display: none">';
                    rr += '<p class="text">8&rarr; WhatsApp Number</p>';
                    rr += '<input class="textin" type="text" required id="med"><br><br>';
                    rr += '</div>';
                    $('#form').append(rr)
                }else if(x == "Instagram"){
                    var rr = '<div id="7" style="display: none">';
                    rr += '<p class="text">8&rarr; Instagram Account</p>';
                    rr += '<input class="textin" type="text" required id="med"><br><br>';
                    rr += '</div>';
                    $('#form').append(rr)
                }else if(x == "Facebook"){
                    var rr = '<div id="7" style="display: none">';
                    rr += '<p class="text">8&rarr; Facebook Username</p>';
                    rr += '<input class="textin" type="text" required id="med"><br><br>';
                    rr += '</div>';
                    $('#form').append(rr)
                }
                $("#7").show(1000);
                q7 = true;
            }
          break;
        case 8:
            if(q8){
                var rr = '<div id="8" style="display: none">';
                rr += '<p class="text">9&rarr; What\'s your message?</p>';
                rr += '<input type="radio" name="message" value="work">Work with me?<br>';
                rr += '<input type="radio" name="message" value="feedback">Feedback for me?<br>';
                rr += '<input type="radio" name="message" value="advice">Looking for advice?<br>';
                rr += '<input type="radio" name="message" value="talk">Wanna talk?';
                rr += '</div>';
                $('#8').replaceWith(rr);
                $('#8').show(1000);
            }else{
                var rr = '<div id="8" style="display: none">';
                rr += '<p class="text">9&rarr; What\'s your message?</p>';
                rr += '<input type="radio" name="message" value="work">Work with me?<br>';
                rr += '<input type="radio" name="message" value="feedback">Feedback for me?<br>';
                rr += '<input type="radio" name="message" value="advice">Looking for advice?<br>';
                rr += '<input type="radio" name="message" value="talk">Wanna talk?';
                rr += '</div>';
                $('#form').append(rr);
                $('#8').show(1000);
                q8 = true;
            }
            break;
        case 9:
            var x = $('[name=message]:checked').val();
            if(q9){
                if(x == "work"){
                    var rr = '<div id="9" style="display: none">';
                    rr += '<p class="text">10&rarr; What kind of work?</p>';
                    rr += '<textarea id="textbig" rows="10" cols="100"></textarea>';
                    rr += '</div>';
                    $('#9').replaceWith(rr);
                }else if(x == "feedback"){
                    var rr = '<div id="9" style="display: none">';
                    rr += '<p class="text">10&rarr; What\'s the feeback?</p>';
                    rr += '<textarea id="textbig" rows="10" cols="100"></textarea>';
                    rr += '</div>';
                    $('#9').replaceWith(rr);
                }else if(x == "advice"){
                    var rr = '<div id="9" style="display: none">';
                    rr += '<p class="text">10&rarr; What kind of advice?</p>';
                    rr += '<textarea id="textbig" rows="10" cols="100"></textarea>';
                    rr += '</div>';
                    $('#9').replaceWith(rr);
                }else if(x == "talk"){
                    var rr = '<div id="9" style="display: none">';
                    rr += '<p class="text">10&rarr; Let\'s chat</p>';
                    rr += '<textarea id="textbig" rows="10" cols="100"></textarea>';
                    rr += '</div>';
                    $('#9').replaceWith(rr);
                }
                $("#9").show(1000);
            }else{
                if(x == "work"){
                    var rr = '<div id="9" style="display: none">';
                    rr += '<p class="text">10&rarr; What kind of work?</p>';
                    rr += '<textarea id="textbig" rows="10" cols="100"></textarea>';
                    rr += '</div>';
                    $('#form').append(rr);
                }else if(x == "feedback"){
                    var rr = '<div id="9" style="display: none">';
                    rr += '<p class="text">10&rarr; What\'s the feeback?</p>';
                    rr += '<textarea id="textbig" rows="10" cols="100"></textarea>';
                    rr += '</div>';
                    $('#form').append(rr);
                }else if(x == "advice"){
                    var rr = '<div id="9" style="display: none">';
                    rr += '<p class="text">10&rarr; What kind of advice?</p>';
                    rr += '<textarea id="textbig" rows="10" cols="100"></textarea>';
                    rr += '</div>';
                    $('#form').append(rr);
                }else if(x == "talk"){
                    var rr = '<div id="9" style="display: none">';
                    rr += '<p class="text">10&rarr; Let\'s chat</p>';
                    rr += '<textarea id="textbig" rows="10" cols="100"></textarea>';
                    rr += '</div>';
                    $('#form').append(rr);
                }
                $("#9").show(1000);
                q9 = true;
            }
         break;
     case 10:
            if(q10){
                var rr = '<div id="10" style="display: none">';
                    rr += '<button id="sub" class="btn btn-success">Submit</button>';
                    rr += '</div>';
                    $('#10').replaceWith(rr);
                    $("#10").show(1000);
            }else{
                var rr = '<div id="10" style="display: none">';
                    rr += '<button id="sub" class="btn btn-success">Submit</button>';
                    rr += '</div>';
                    $('#form').append(rr);
                     $("#10").show(1000);
                     q10 = true;
            }
    }
    $("#name").on({
        change: function () {
            var x = $('#name').val();
            if (x.length > 3) {
                formnum = 1;
                showcomponent(formnum);
                $("#name").attr("readonly", true);
                cand = true;
            }
        }, mousedown: function () {
            removeComponent(0);
            $("#name").attr("readonly", false);
        }
    });

    $('#last').on({
        change: function () {
            formnum = 2;
            showcomponent(formnum);
            $("#last").attr("readonly", true);
        }, mousedown: function () {
            removeComponent(1);
            $("#last").attr("readonly", false);
        }
    });

    $('#mail').on({
        change: function () {
            var x = $('#mail').val();
            if (x.includes('@') && x.endsWith('.com')) {
                formnum = 3;
                showcomponent(formnum);
                $("#mail").attr("readonly", true);
            }else{
                alert("That is not a valid email address")
            }
        }, mousedown: function () {
            removeComponent(2);
            $("#mail").attr("readonly", false);
        }
    });

    $('#age').on({
        change: function () {
            var x = $('#age').val();
            formnum = 4;
            showcomponent(formnum);
            $("#age").attr("readonly", true);
        }, mousedown: function () {
            removeComponent(3);
            $("#age").attr("readonly", false);
        }
    });

    $('#address').on({
        change: function () {
            var x = $('#age').val();
            formnum = 5;
            showcomponent(formnum);
            $("#address").attr("readonly", true);
        }, mousedown: function () {
            removeComponent(4);
            $("#address").attr("readonly", false);
        }
    });

    $('#num').on({
        change: function () {
            formnum = 6;
            showcomponent(formnum);
            $("#num").attr("readonly", true);
        }, mousedown: function () {
            removeComponent(5);
            $("#num").attr("readonly", false);
        }
    });

    $('[name=media]').on({
        change: function () {
            formnum = 7;
            showcomponent(formnum);
        }, mousedown: function () {
            removeComponent(6);
        }
    });

     $('#med').on({
        change: function () {
            formnum = 8;
            showcomponent(formnum);
        }, mousedown: function () {
            removeComponent(7);
        }
    });

    $('[name=message]').on({
        change: function () {
            formnum = 9;
            showcomponent(formnum);
        }, mousedown: function () {
            removeComponent(8);
        }
    });

    $('#textbig').on({
        mouseout: function () {
            formnum = 10;
            showcomponent(formnum);
            $("#textbig").attr("readonly", true);
        }, mousedown: function () {
            removeComponent(9);
            $("#textbig").attr("readonly", false);
        }
    });

$('#sub').on('click', function () {
            $("#form").hide('fast');
            var message = '<h1>THANKS FOR CONTACTING ME</h1>';
            message += '<p><a href="./form.html">Have Questions? Comments? Wanna talk?</a></p>';
            $('body').append(message);
    });   
}
function removeComponent(num) {
    var i = num + 1;

    while (i <= formnum) {
        s = "#" + i;
        $(s).hide(1000);
        i++;
    }
}

