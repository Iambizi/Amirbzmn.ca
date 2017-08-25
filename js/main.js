$(document).ready(()=> {
    $("#fineprint").hide();
  $("span").hover(()=>{
    $("#fineprint").fadeIn()}
    ,
    ()=>{
    $("#fineprint").fadeOut()}
  );
