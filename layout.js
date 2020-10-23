$('document').ready(()=>
{       
$('header').html("<span>This is a header</span>");
$('header').css({"text-align":"center","background-color":"red",width:"102%"});


$('section').children('aside.first').css({"text-align":"center","background-color": "pink",width:"20%", height:"95%",position: "absolute"});
$('section').children('aside.first').html("<span>This is a left aside</span>");


$('section').children('div.div1').css({ "text-align":"center","background-color": "yellow",position: "absolute", "margin-left":"20%",width:"60%",height:"95%"});
$('section').children('div.div1').html("<span>This is a div</span>");


$('section').children('aside.second').css({"text-align":"center","background-color": "pink","margin-left":"80%" ,width:"20%", height:"95%",position: "absolute"});
$('section').children('aside.second').html("<span>This is a right aside</span>");

$('footer').html("<span>This is a footer</span>");
$('footer').css({position: "absolute",width:"100%", bottom:"0px" ,"text-align":"center","background-color":"blue"});
});

