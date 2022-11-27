const button=document.getElementById("btn");
const body=document.body;
// by this we get the access of the body
const colors = ['red','green','blue','black','yellow','pink','purple','grey'];
button.addEventListener('click',changeBackground);
body.style.backgroundColor="#008080";
let index=0;
function changeBackground(){
    index=Math.floor(Math.random()*colors.length);
    // if(index==colors.length)
        // index=0;
    // else
        // index++;
    body.style.backgroundColor=colors[index];
}