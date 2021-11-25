window.addEventListener('keydown',(e)=>{
    document.getElementById("display").style.display="block"
    document.getElementById("a").style.display="none"
    document.getElementById("code").innerHTML = e.keyCode;
    console.log(e)
    document.getElementById("event.key").innerHTML=e.key
    document.getElementById("event.keycode").innerHTML = e.keyCode;
    document.getElementById("event.code").innerHTML = e.code;
})

document.getElementById("change").addEventListener('click',function(){
    if(document.body.style.background == "white"){
        document.body.style.background = "#455a64";
        document.body.style.color = "white";
        document.getElementById("a").style.background = "#03a9f4";
        document.getElementById("a").style.color = "white";
        document.getElementById("change").style.background = "#03a9f4";
        document.getElementById("change").style.color = "white";
        var contents = document.getElementsByClassName("content")
        for(var i=0;i<contents.length;i++){
            contents[i].style.background = "#81d4fa";
            contents[i].style.color = "black"
            contents[i].style.boxShadow = "1px 1px 3px black";
        }
         var headings = document.getElementsByClassName("head");
         for (var i = 0; i < headings.length; i++) {
           headings[i].style.background = "#455a64";
            headings[i].style.boxShadow = "1px 1px 3px black";
         }   
    }
    else{
                document.body.style.background = "white";
                document.body.style.color = "black";
                document.getElementById("a").style.background = "white";
                document.getElementById("a").style.color = "black";
                document.getElementById("change").style.background = "white";
                document.getElementById("change").style.color = "black";
                var contents = document.getElementsByClassName("content");
                 for(var i=0;i<contents.length;i++){
                    contents[i].style.background = "#455a64";
                    contents[i].style.color = "white";
                    contents[i].style.boxShadow = "1px 1px 3px black";
                }
                var headings = document.getElementsByClassName("head");
                for (var i = 0; i < headings.length; i++) {
                    headings[i].style.background = "#03a9f4";
                    contents[i].style.boxShadow = "1px 1px 3px black";
                }

            }
})