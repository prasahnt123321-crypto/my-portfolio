// Typing Effect

const text = "Aspiring Machine Learning Engineer";
let index = 0;

function typingEffect(){

    if(index < text.length){

        document.querySelector(".hero-text h2").innerHTML += text.charAt(index);
        index++;

        setTimeout(typingEffect,100);

    }

}

window.onload = typingEffect;



// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});
