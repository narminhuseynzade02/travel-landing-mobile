
document.getElementById("submit").addEventListener("click", function(event){
event.preventDefault()
let password = document.getElementById("password").value;
let email = document.getElementById("email").value;
let rules = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

if ( email.match(rules)) {
    document.getElementById("error-message").innerHTML = "it was not"
    document.getElementById("error-message").style.display= "none"
    console.log("worked")
}
else {
    document.getElementById("error-message").innerHTML = "it was not right"
    document.getElementById("error-message").style.display= "flex"
    console.log("not-worked")
}
})