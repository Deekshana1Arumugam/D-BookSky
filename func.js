//selecting popbox,ovrlay
var popovr=document.querySelector(".ovrlay")
var popboxs=document.querySelector(".popbox")
var butt=document.getElementById("addpop")

butt.addEventListener("click",function(){
   
    popovr.style.display="block"
    popboxs.style.display="block"
})

//slect cancel button
var cancelbtn=document.getElementById("cancels")

cancelbtn.addEventListener("click",function(event){
   event.preventDefault()
   popovr.style.display="none"
    popboxs.style.display="none"
})

//select container,addbook,booktitle,bookauthor,bookdesc

var container=document.querySelector(".container")
var addbook=document.getElementById("addbook")
var booktitle=document.getElementById("booktitle")
var bookauthor=document.getElementById("bookauthor")
var bookdescr=document.getElementById("bookdescr")

addbook.addEventListener("click",function(event){
    event.preventDefault()
var div=document.createElement("div")
div.setAttribute("class","bookcontainer")
div.innerHTML=`<h2>${booktitle.value}</h2>
<h5>${bookauthor.value}</h5>
<p>${bookdescr.value}</p>
<button id="bt" onclick="del(event)">Delete</button>`

container.append(div)

popovr.style.display="none"
    popboxs.style.display="none"
    
document.getElementById("booktitle").value=""
document.getElementById("bookauthor").value=""
document.getElementById("bookdescr").value=""
})
function del(event){
    event.target.parentElement.remove()
}