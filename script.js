// let box1=document.getElementById("hi");
// // console.log(box1.getAttribute("class"));
// let val=box1.setAttribute("class","321");
// console.log(val);
// let box2=document.querySelectorAll("div");
// console.dir(box2);
// let heading=document.querySelector("h3");
// console.dirxml(heading);
// let box3=document.querySelectorAll(".hero");
// console.log(box3[0].innerHTML="hello");

// console.log(box3[1].innerHTML="js");
// console.log(box3[2].innerHTML="!");
// console.log(box3[0]+box3[1]);
let newbtn=document.createElement("button");
newbtn.innerText="click me!";
newbtn.style.background="lightblue";
newbtn.style.height="20px";
newbtn.style.width="90px";
// newbtn.style.border="2px solid black";
newbtn.style.borderRadius="10px";
document.querySelector("p").after(newbtn);
let count=0;
newbtn.addEventListener("click",function(){
 count++
newbtn.textContent="clicked:"+ count;
});
document.querySelector("p").after(newbtn);
let mode=document.getElementById("mode");
mode.addEventListener("click",function(){
    document.body.classList.toggle("mode");
})

