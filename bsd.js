const para = document.createElement("dialog");
para.innerHTML = 'בס"ד';
para.style.position = "fixed";
para.style.zIndex = "999";
para.style.top="0%";
para.style.left="98%";
para.style.float="right";
para.setAttribute("open","");
document.getElementsByTagName("body")[0].appendChild(para);
para.addEventListener("click",f1)
function f1() {
    para.style.display="none";
}