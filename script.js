
for(let i=0;names[i];i++){
  

let name1=names[i].charAt(0);
let firstletter=name1.toLowerCase();
if(firstletter=="j"){
  ByeSpeaker.speak(names[i]);
}
else{
    HelloSpeaker.speak(names[i]);
}


}