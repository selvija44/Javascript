const file = document.getElementById("file");
const filebox = document.querySelector(".boxfile");

filebox.addEventListener("click", () => {
    file.click();
});


const namee = document.getElementById('errorname');
const emaile = document.getElementById('erroremail');
const errorgh = document.getElementById('errorgh');
const f_name = document.getElementById('text');
const f_email = document.getElementById('email');
const f_gh = document.getElementById('github');
function chckname(){
    let flag = false
    if (f_name.innerText !== " "){
        flag =  true
    }
    else if ((f_email.innerText.length > 6) > (f_email.contains("@"))){
        flag = true
    }
    else if (f_gh.innerText !== " "){
        flag =  true
    }
    return flag
}

console.log(chckname());
