import { cashfree } from "./utils";

const handlepay = () => {

    let checkoutOptions = {
        paymentSessionId: "session_tvUaC05ejM7CYaUur2TCggncsKocTG7OgMXnkgEAqR6lx6Z6PPjxdUeH4mrQizNaQmydZgDxyfRFzQTi34rfY5vYz8PaLPbb1LwJP8jxikNC",
        returnUrl: "http://localhost:3000",
        
    }
    cashfree.checkout(checkoutOptions).then(function(result){
        if(result.error){
            alert(result.error.message)
        }
        if(result.redirect){
            console.log("Redirection")
        }
    });
}

export default handlepay;