let plr=1;
let p1scr=0;
let p2scr=0;
let f=0;
let fill=1;
let ch='X';
function does_win(){
    let b1=document.getElementById("1").innerText;
    let b2=document.getElementById("2").innerText;
    let b3=document.getElementById("3").innerText;
    let b4=document.getElementById("4").innerText;
    let b5=document.getElementById("5").innerText;
    let b6=document.getElementById("6").innerText;
    let b7=document.getElementById("7").innerText;
    let b8=document.getElementById("8").innerText;
    let b9=document.getElementById("9").innerText;
    let plr1scr=document.getElementById("p1scr");
    let plr2scr=document.getElementById("p2scr");
    if(b1!=""&&b1==b2&&b2==b3||b4!=""&&b4==b5&&b5==b6||b7!=""&&b7==b8&&b8==b9){
        window.alert(`Player ${plr} WINS !!`);
        if(plr==1){
            p1scr++;
            plr1scr.innerText=`PLAYER 1 : ${p1scr}`;
        }
        else{
            p2scr++;
            plr2scr.innerText=`PLAYER 2 : ${p2scr}`;
        }
        f=1;
    }
    else if(b1!=""&&b1==b4&&b4==b7||b2!=""&&b2==b5&&b5==b8||b3!=""&&b3==b6&&b6==b9){
        window.alert(`Player ${plr} WINS !!`);
        
        if(plr==1){
            p1scr++;
            plr1scr.innerText=`PLAYER 1 : ${p1scr}`;
        }
        else{
            p2scr++;
            plr2scr.innerText=`PLAYER 2 : ${p2scr}`;
        }
        f=1;
    }
    else if(b1!=""&&b1==b5&&b5==b9||b3!=""&&b3==b5&&b5==b7){
        window.alert(`Player ${plr} WINS !!`);
        if(plr==1){
            p1scr++;
            plr1scr.innerText=`PLAYER 1 : ${p1scr}`;
        }
        else{
            p2scr++;
            plr2scr.innerText=`PLAYER 2 : ${p2scr}`;
        }
        f=1;
    }
    if(f==1){     
        f=0;   
    let boxes=document.querySelectorAll('td');
    for(let i=0;i<boxes.length;i++){
        boxes[i].innerText="";
    }
    fill=0;
    plr=1;
    ch="X";
    return 1;
}
    if(fill==9){
        fill=0;
        plr=1;
        ch="X";
        window.alert(`MATCH DRAWS !`);
        let boxes=document.querySelectorAll('td');
        for(let i=0;i<boxes.length;i++){
            boxes[i].innerText="";
    }
}
    f=0;
    console.log(fill);
    return 0;
}
function change_plr(){
    ch=ch=="X"?"O":"X";
    plr=plr==1?2:1;
}
function dothis(){
    if(this.innerText==""){
        this.innerText=ch;
        let r=does_win();
        if(r==0){
        change_plr();
        fill++;}
    }
}
function perform(){
    let tditems=document.querySelectorAll('td');
    for(let i=0;i<tditems.length;i++){
        tditems[i].addEventListener('click',dothis);
    }
}
perform();
