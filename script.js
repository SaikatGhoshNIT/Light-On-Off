//Select all elements
const image=document.getElementById("image-off")
const button=document.getElementById("btn")

//'On click' on the button we need to change the picture
button.addEventListener('click', e=>{
    e.preventDefault()

    //1.replace the image according button text ON/OFF
    if(button.textContent.includes("ON")){
        image.src="images/Light On.svg"
        button.textContent="Turn OFF"
        button.style.backgroundColor = "red"
    }
    else{
        image.src="images/Light Off.svg"
        button.textContent="Turn ON"
        button.style.backgroundColor = "green"
    }  
})