const file = document.getElementById("file");
const filebox = document.querySelector(".boxfile");

filebox.addEventListener("click", () => {
    file.click();
});


const namee = document.getElementById('errorname');
const emaile = document.getElementById('erroremail');
const errorgh = document.getElementById('errorgh');

function validate(name,email,gh) {
    if (name === " "){
        namee.innerHTML = `<span id="errorname">Name can't be empty</span>`
    }
    if (email === " ") or (email.contains !== "@"){
        emaile.innerHTML = `<span id="erroremail">Email can't be empty</span>`
    }
    if (errorgh === " ") or (errorgh.contains !== "@github")
    
}