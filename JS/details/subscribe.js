import subscribeSuccess from "./subscribeSuccess.js"

const subscribeBtn = document.querySelector("#subscribe")
const subscribeInput = document.querySelector("#emailAddress")
const invalidEmail = document.querySelector("#failedSub")



export default function subscribe() {

    subscribeBtn.addEventListener("click", function(e) {
        e.preventDefault()


        subscribeInput.value
        console.log(subscribeInput.value)

       const email = subscribeInput.value;
       subscribeInput.value =""
       const validEmail = email.includes("@")
       if (validEmail) {
        subscribeSuccess(email)
       }
        else {
            invalidEmail.textContent = "Please enter a valid email-address."
        }
    })
}
