function start() {
    alert("Congratulations!\nYou got the script running.")
}
const NAME_FIELD =  document.getElementById("nameField")
let userName = NAME_FIELD.value;

function getFormInput(){
    const NAME_FIELD =  document.getElementById("nameField")
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML= "<p> Your Name is "  +userName+"</p>"
}