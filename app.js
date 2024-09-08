let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let para=document.getElementById("para");
let text=document.querySelector(".text-div");

let generate=()=>{
    let rgb="#";
    
    for(let i=0;i<6;i++){
       rgb=rgb+range[Math.floor(Math.random() * 16)];
    }

    return rgb;
}

let range="0123456789abcdef";

// each time page will load with a new gradient color
let rgb1=generate();
let rgb2=generate();
para.innerText=`background: linear-gradient(90deg, ${rgb1}, ${rgb2});`
document.body.style.background=`linear-gradient(90deg, ${rgb1}, ${rgb2})`
btn1.innerText=`${rgb1}`
btn1.style.background=`${rgb1}`
btn2.innerText=`${rgb2}`
btn2.style.background=`${rgb2}`


let colorgenerate1=()=>{
    rgb1=generate();
    para.innerText=`background: linear-gradient(90deg, ${rgb1}, ${rgb2});`
    document.body.style.background=`linear-gradient(90deg, ${rgb1}, ${rgb2})`
    btn1.innerText=`${rgb1}`
    btn1.style.background=`${rgb1}`
}

let colorgenerate2=()=>{
    rgb2=generate();
    para.innerText=`background: linear-gradient(90deg, ${rgb1}, ${rgb2});`
    document.body.style.background=`linear-gradient(90deg, ${rgb1}, ${rgb2})`
    btn2.innerText=`${rgb2}`
    btn2.style.background=`${rgb2}`
}

btn1.addEventListener("click", colorgenerate1);
btn2.addEventListener("click", colorgenerate2);

let copyfunc= async (event)=>{
    await navigator.clipboard.writeText(event.target.innerText);
    alert(`${event.target.innerText} copied to clipboard`)
}

text.addEventListener("click", copyfunc);