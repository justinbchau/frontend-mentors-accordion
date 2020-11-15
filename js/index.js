let questions = document.getElementsByClassName("question");


for (let i = 0; i < questions.length; ++i) {
    questions[i].addEventListener("click", function() {
        this.classList.toggle("active");
        
        let img = this.querySelector('.dropdown')
        
        img.classList.toggle("reverse")

        let panel = this.nextElementSibling;
        
        if (panel.style.display === "block") {
            panel.style.display = "none"
        } else {
            panel.style.display = "block"
            
        }
    })
}


