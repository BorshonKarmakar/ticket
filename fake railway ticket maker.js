document.title="Fake Railway Ticket Maker";

function submit(){
    document.querySelector(".from").innerHTML=document.getElementById("fromstationenglish").value;
    document.querySelector(".to").innerHTML=document.getElementById("tostationenglish").value;
    let pnrNumber=`${(Math.floor(Math.random()*10))}${(Math.floor(Math.random()*10))}${(Math.floor(Math.random()*10))}${(Math.floor(Math.random()*10))}EBT${(Math.floor(Math.random()*10))}${(Math.floor(Math.random()*10))}${(Math.floor(Math.random()*10))}${(Math.floor(Math.random()*10))}A${(Math.floor(Math.random()*10))}`;
   document.querySelector(".formpart").style.visibility="hidden";
   document.querySelector(".success").style.animationName="success";
   document.querySelector("#sinfo").style.animationName="sinfo";
   document.querySelector(".page").style.animationName="pag";
   document.getElementById("name").innerHTML=document.getElementById("passnameenglish").value;
   document.getElementById("seng").innerHTML=document.getElementById("seatnumberenglish").value;
   document.getElementById("sban").innerHTML=document.getElementById("seatnumberbangla").value;
   document.getElementById("dtime").innerHTML=document.getElementById("idt").value; 
   document.getElementById("jdtime").innerHTML=document.getElementById("journeydt").value; 
   document.getElementById("traineng").innerHTML=document.getElementById("trainnameenglish").value; 
   document.getElementById("trainban").innerHTML=document.getElementById("trainnamebangla").value; 
   document.getElementById("traincodee").innerHTML=document.getElementById("traincodeenglish").value; 
   document.getElementById("traincodeb").innerHTML=document.getElementById("traincodebangla").value; 
   document.getElementById("fstatione").innerHTML=document.getElementById("fromstationenglish").value;
   document.getElementById("fstationb").innerHTML=document.getElementById("fromstationbangla").value;
   document.getElementById("tstatione").innerHTML=document.getElementById("tostationenglish").value;
   document.getElementById("tstationb").innerHTML=document.getElementById("tostationbangla").value;
   document.getElementById("e").innerHTML=document.getElementById("amountenglish").value;
   document.getElementById("b").innerHTML=document.getElementById("amountbangla").value;
   document.getElementById("vate").innerHTML=document.getElementById("vatenglish").value;
   document.getElementById("vatb").innerHTML=document.getElementById("vatbangla").value;
   document.getElementById("schargee").innerHTML=document.getElementById("serviceenglish").value;
   document.getElementById("schargeb").innerHTML=document.getElementById("servicebangla").value;
   document.getElementById("tchargee").innerHTML=document.getElementById("totalenglish").value;
   document.getElementById("tchargeb").innerHTML=document.getElementById("totalbangla").value;
   document.getElementById("pesname").innerHTML=document.getElementById("passnameenglish").value;
   document.getElementById("idtypee").innerHTML=document.getElementById("idtypeenglish").value;
   document.getElementById("idtypeb").innerHTML=document.getElementById("idtypebangla").value;
   document.getElementById("idnume").innerHTML=document.getElementById("idnumberenglish").value;
   document.getElementById("idnumb").innerHTML=document.getElementById("idnumberbangla").value;
   document.getElementById("mobnume").innerHTML=document.getElementById("mobnumberenglish").value;
   document.getElementById("mobnumb").innerHTML=document.getElementById("mobnumberbangla").value;
   document.getElementById("pnr").innerHTML=pnrNumber;
  
}
function schair(){
    document.getElementById("schair").style.backgroundColor="orange";
    document.getElementById("shovon").style.backgroundColor="gray";
    document.getElementById("acchair").style.backgroundColor="gray";
    document.getElementById("cleng").innerHTML=document.getElementById("schair").value;
    document.getElementById("clban").innerHTML="শো.চেয়ার"
}
function shovon(){
    document.getElementById("schair").style.backgroundColor="gray";
    document.getElementById("shovon").style.backgroundColor="orange";
    document.getElementById("acchair").style.backgroundColor="gray";
    document.getElementById("cleng").innerHTML=document.getElementById("shovon").value;
    document.getElementById("clban").innerHTML="শোভন";
}
function acchair(){
    document.getElementById("schair").style.backgroundColor="gray";
    document.getElementById("shovon").style.backgroundColor="gray";
    document.getElementById("acchair").style.backgroundColor="orange";
    document.getElementById("cleng").innerHTML=document.getElementById("acchair").value;
    document.getElementById("clban").innerHTML="এসি.চেয়ার";
}
function ka(){
    document.getElementById("ka").style.backgroundColor="orange";
    document.getElementById("kha").style.backgroundColor="gray";
    document.getElementById("ga").style.backgroundColor="gray";
    document.getElementById("gha").style.backgroundColor="gray";
    document.getElementById("uma").style.backgroundColor="gray";
    document.getElementById("cha").style.backgroundColor="gray";
    document.getElementById("scha").style.backgroundColor="gray";
    document.getElementById("ja").style.backgroundColor="gray";
    document.getElementById("jha").style.backgroundColor="gray";
    document.getElementById("neo").style.backgroundColor="gray";
    document.getElementById("ta").style.backgroundColor="gray";
    document.getElementById("tha").style.backgroundColor="gray";
    document.getElementById("coban").innerHTML=document.getElementById("ka").value;
    document.getElementById("coeng").innerHTML="Ka"
    
    
}
function kha(){
    document.getElementById("kha").style.backgroundColor="orange";
    document.getElementById("ka").style.backgroundColor="gray";
    document.getElementById("ga").style.backgroundColor="gray";
    document.getElementById("gha").style.backgroundColor="gray";
    document.getElementById("uma").style.backgroundColor="gray";
    document.getElementById("cha").style.backgroundColor="gray";
    document.getElementById("scha").style.backgroundColor="gray";
    document.getElementById("ja").style.backgroundColor="gray";
    document.getElementById("jha").style.backgroundColor="gray";
    document.getElementById("neo").style.backgroundColor="gray";
    document.getElementById("ta").style.backgroundColor="gray";
    document.getElementById("tha").style.backgroundColor="gray";
    document.getElementById("coban").innerHTML=document.getElementById("kha").value;
    document.getElementById("coeng").innerHTML="Kha"
    
    
}
function ga(){
    document.getElementById("ga").style.backgroundColor="orange";
    document.getElementById("kha").style.backgroundColor="gray";
    document.getElementById("ka").style.backgroundColor="gray";
    document.getElementById("gha").style.backgroundColor="gray";
    document.getElementById("uma").style.backgroundColor="gray";
    document.getElementById("cha").style.backgroundColor="gray";
    document.getElementById("scha").style.backgroundColor="gray";
    document.getElementById("ja").style.backgroundColor="gray";
    document.getElementById("jha").style.backgroundColor="gray";
    document.getElementById("neo").style.backgroundColor="gray";
    document.getElementById("ta").style.backgroundColor="gray";
    document.getElementById("tha").style.backgroundColor="gray";
    document.getElementById("coban").innerHTML=document.getElementById("ga").value;
    document.getElementById("coeng").innerHTML="Ga"   
}
function gha(){
    document.getElementById("gha").style.backgroundColor="orange";
    document.getElementById("kha").style.backgroundColor="gray";
    document.getElementById("ka").style.backgroundColor="gray";
    document.getElementById("ga").style.backgroundColor="gray";
    document.getElementById("uma").style.backgroundColor="gray";
    document.getElementById("cha").style.backgroundColor="gray";
    document.getElementById("scha").style.backgroundColor="gray";
    document.getElementById("ja").style.backgroundColor="gray";
    document.getElementById("jha").style.backgroundColor="gray";
    document.getElementById("neo").style.backgroundColor="gray";
    document.getElementById("ta").style.backgroundColor="gray";
    document.getElementById("tha").style.backgroundColor="gray";
    document.getElementById("coban").innerHTML=document.getElementById("gha").value;
    document.getElementById("coeng").innerHTML="Gha"   
}
function uma(){
    document.getElementById("uma").style.backgroundColor="orange";
    document.getElementById("kha").style.backgroundColor="gray";
    document.getElementById("ka").style.backgroundColor="gray";
    document.getElementById("gha").style.backgroundColor="gray";
    document.getElementById("ga").style.backgroundColor="gray";
    document.getElementById("cha").style.backgroundColor="gray";
    document.getElementById("scha").style.backgroundColor="gray";
    document.getElementById("ja").style.backgroundColor="gray";
    document.getElementById("jha").style.backgroundColor="gray";
    document.getElementById("neo").style.backgroundColor="gray";
    document.getElementById("ta").style.backgroundColor="gray";
    document.getElementById("tha").style.backgroundColor="gray";
    document.getElementById("coban").innerHTML=document.getElementById("uma").value;
    document.getElementById("coeng").innerHTML="Uma"   
}
function cha(){
    document.getElementById("cha").style.backgroundColor="orange";
    document.getElementById("kha").style.backgroundColor="gray";
    document.getElementById("ka").style.backgroundColor="gray";
    document.getElementById("gha").style.backgroundColor="gray";
    document.getElementById("ga").style.backgroundColor="gray";
    document.getElementById("uma").style.backgroundColor="gray";
    document.getElementById("scha").style.backgroundColor="gray";
    document.getElementById("ja").style.backgroundColor="gray";
    document.getElementById("jha").style.backgroundColor="gray";
    document.getElementById("neo").style.backgroundColor="gray";
    document.getElementById("ta").style.backgroundColor="gray";
    document.getElementById("tha").style.backgroundColor="gray";
    document.getElementById("coban").innerHTML=document.getElementById("cha").value;
    document.getElementById("coeng").innerHTML="Cha"   
}
function scha(){
    document.getElementById("scha").style.backgroundColor="orange";
    document.getElementById("kha").style.backgroundColor="gray";
    document.getElementById("ka").style.backgroundColor="gray";
    document.getElementById("gha").style.backgroundColor="gray";
    document.getElementById("ga").style.backgroundColor="gray";
    document.getElementById("uma").style.backgroundColor="gray";
    document.getElementById("cha").style.backgroundColor="gray";
    document.getElementById("ja").style.backgroundColor="gray";
    document.getElementById("jha").style.backgroundColor="gray";
    document.getElementById("neo").style.backgroundColor="gray";
    document.getElementById("ta").style.backgroundColor="gray";
    document.getElementById("tha").style.backgroundColor="gray";
    document.getElementById("coban").innerHTML=document.getElementById("scha").value;
    document.getElementById("coeng").innerHTML="Scha"   
}
function ja(){
    document.getElementById("ja").style.backgroundColor="orange";
    document.getElementById("kha").style.backgroundColor="gray";
    document.getElementById("ka").style.backgroundColor="gray";
    document.getElementById("gha").style.backgroundColor="gray";
    document.getElementById("ga").style.backgroundColor="gray";
    document.getElementById("uma").style.backgroundColor="gray";
    document.getElementById("cha").style.backgroundColor="gray";
    document.getElementById("scha").style.backgroundColor="gray";
    document.getElementById("jha").style.backgroundColor="gray";
    document.getElementById("neo").style.backgroundColor="gray";
    document.getElementById("ta").style.backgroundColor="gray";
    document.getElementById("tha").style.backgroundColor="gray";
    document.getElementById("coban").innerHTML=document.getElementById("ja").value;
    document.getElementById("coeng").innerHTML="Ja"   
}
function neo(){
    document.getElementById("ja").style.backgroundColor="orange";
    document.getElementById("kha").style.backgroundColor="gray";
    document.getElementById("ka").style.backgroundColor="gray";
    document.getElementById("gha").style.backgroundColor="gray";
    document.getElementById("ga").style.backgroundColor="gray";
    document.getElementById("uma").style.backgroundColor="gray";
    document.getElementById("cha").style.backgroundColor="gray";
    document.getElementById("scha").style.backgroundColor="gray";
    document.getElementById("jha").style.backgroundColor="gray";
    document.getElementById("neo").style.backgroundColor="gray";
    document.getElementById("ta").style.backgroundColor="gray";
    document.getElementById("tha").style.backgroundColor="gray";
    document.getElementById("coban").innerHTML=document.getElementById("ja").value;
    document.getElementById("coeng").innerHTML="Ja"   
}
function jha(){
    document.getElementById("jha").style.backgroundColor="orange";
    document.getElementById("kha").style.backgroundColor="gray";
    document.getElementById("ka").style.backgroundColor="gray";
    document.getElementById("gha").style.backgroundColor="gray";
    document.getElementById("ga").style.backgroundColor="gray";
    document.getElementById("uma").style.backgroundColor="gray";
    document.getElementById("cha").style.backgroundColor="gray";
    document.getElementById("scha").style.backgroundColor="gray";
    document.getElementById("ja").style.backgroundColor="gray";
    document.getElementById("neo").style.backgroundColor="gray";
    document.getElementById("ta").style.backgroundColor="gray";
    document.getElementById("tha").style.backgroundColor="gray";
    document.getElementById("coban").innerHTML=document.getElementById("jha").value;
    document.getElementById("coeng").innerHTML="Jha"   
}
function neo(){
    document.getElementById("neo").style.backgroundColor="orange";
    document.getElementById("kha").style.backgroundColor="gray";
    document.getElementById("ka").style.backgroundColor="gray";
    document.getElementById("gha").style.backgroundColor="gray";
    document.getElementById("ga").style.backgroundColor="gray";
    document.getElementById("uma").style.backgroundColor="gray";
    document.getElementById("cha").style.backgroundColor="gray";
    document.getElementById("scha").style.backgroundColor="gray";
    document.getElementById("ja").style.backgroundColor="gray";
    document.getElementById("jha").style.backgroundColor="gray";
    document.getElementById("ta").style.backgroundColor="gray";
    document.getElementById("tha").style.backgroundColor="gray";
    document.getElementById("coban").innerHTML=document.getElementById("neo").value;
    document.getElementById("coeng").innerHTML="Neo"   
}
function ta(){
    document.getElementById("ta").style.backgroundColor="orange";
    document.getElementById("kha").style.backgroundColor="gray";
    document.getElementById("ka").style.backgroundColor="gray";
    document.getElementById("gha").style.backgroundColor="gray";
    document.getElementById("ga").style.backgroundColor="gray";
    document.getElementById("uma").style.backgroundColor="gray";
    document.getElementById("cha").style.backgroundColor="gray";
    document.getElementById("scha").style.backgroundColor="gray";
    document.getElementById("ja").style.backgroundColor="gray";
    document.getElementById("jha").style.backgroundColor="gray";
    document.getElementById("neo").style.backgroundColor="gray";
    document.getElementById("tha").style.backgroundColor="gray";
    document.getElementById("coban").innerHTML=document.getElementById("ta").value;
    document.getElementById("coeng").innerHTML="Ta";   
}
function tha(){
    document.getElementById("tha").style.backgroundColor="orange";
    document.getElementById("kha").style.backgroundColor="gray";
    document.getElementById("ka").style.backgroundColor="gray";
    document.getElementById("gha").style.backgroundColor="gray";
    document.getElementById("ga").style.backgroundColor="gray";
    document.getElementById("uma").style.backgroundColor="gray";
    document.getElementById("cha").style.backgroundColor="gray";
    document.getElementById("scha").style.backgroundColor="gray";
    document.getElementById("ja").style.backgroundColor="gray";
    document.getElementById("jha").style.backgroundColor="gray";
    document.getElementById("neo").style.backgroundColor="gray";
    document.getElementById("ta").style.backgroundColor="gray";
    document.getElementById("coban").innerHTML=document.getElementById("tha").value;
    document.getElementById("coeng").innerHTML="Tha";   
}
setInterval(function red(){
    let mobile=document.getElementById("mobnumberenglish").value;
    let mobileb=document.getElementById("mobnumberbangla").value;
    if(mobile.length==0){
        document.getElementById("redmob").innerHTML="";
    }
    else if(mobile.length<11){
        document.getElementById("redmob").innerHTML="Your mobile number must be 11 digit!"
    }
    else{
        document.getElementById("redmob").innerHTML="";
    } 
    if(mobileb.length==0){
        document.getElementById("remob").innerHTML="";
    }
    else if(mobileb.length<11){
        document.getElementById("remob").innerHTML="মোবাইল নম্বর অবশ্যই ১১ ডিজিটের হতে হবে!";
    }
    else{
        document.getElementById("remob").innerHTML="";
    }
},500)

