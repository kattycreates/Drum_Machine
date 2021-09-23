window.document.onkeydown=function keydown(event){
    let char=event.key;
    if(char==='q' || char==='Q')play('Q','Clap');
    else if(char==='w' || char==='W')play('W','Deep Crash');
    else if(char==='e' || char==='E')play('E','Grunge Cymbal');
    else if(char==='a' || char==='A')play('A','Banging Lofi Hat');
    else if(char==='s' || char==='S')play('S','Hat');
    else if(char==='d' || char==='D')play('D','Action Kick');
    else if(char==='z' || char==='Z')play('Z','Baroque Kick');
    else if(char==='x' || char==='X')play('X','Ambient Snare');
    else if(char==='c' || char==='C')play('C','Timbales');


}
function play(str,description)
{
    document.getElementById(str).play();
    document.getElementById('display').innerText=description;
    let mybutton=document.getElementById(description);
    mybutton.classList.add("active");
}