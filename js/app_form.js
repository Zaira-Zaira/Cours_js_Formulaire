document.addEventListener("DOMContentLoaded", ()=>{
    console.log("loaded")


let warning = document.querySelector('section:nth-child(2) p')
let inputEmail = document.getElementsByName("email")
let inputPassword  = document.getElementsByName("password")
let btn = document.getElementsByTagName("input")[2]
let access = document.querySelector("section > a")
let form = document.querySelector(".form")
let checked = document.querySelector("h2")
let User =({
       username: "admin@gmail.com",
       password: 3615
})

access.addEventListener("click", ()=>{
  //  form.classList.remove("form")

    form.classList.toggle("appear")
    checked.classList.toggle("checked")
    form.classList.remove("form")
    form.classList.add("form")
})
//CSS.rules[8].style.color = "green"
console.log(document.styleSheets[0].rules[8].style.color)
console.log(document.styleSheets[0])




btn.addEventListener("click", (event)=>{
    event.preventDefault()

    if(inputEmail[0].value == User.username && parseInt(inputPassword[0].value) === User.password){
      // document.location.assign("https://www.google.com/search?q=html")
      warning.style.display="block"
      warning.classList.add("success")
      warning.innerText = `${ User.username} Vous êtes connecté `
    }
    else{
      warning.innerText = `Veuillez saisir tous les champs de formulaire!`
      warning.style.display="block"
      warning.classList.add("warning")
    
  }
    event.stopPropagation()




    console.log(inputEmail[0].value="")

    console.log(inputPassword[0].value="")



  })

    //  inputEmail[0].value && inputPassword[0].value  ? document.location.assign("https://www.google.com/search?q=html") : alert ("Saisir tous les champs")

    //inputEmail[0].value && inputPassword[0].value  ? console.log("ok") : alert ("Saisir tous les champs") 
   // inputPassword[0].value == passwordRight  ? console.log("codeBonne") : alert("Mot de passe incorrect!")
    
    /*target.innerHTML+=  `<li> Vos informations ont été bien envoyé!!!</li>
                         <li> Email : ${inputEmail[0].value} </li> 
                         <li> Password : ${ inputPassword[0].value}</li> `*/

    
})















//let login = document.getElementsByName("login")
//login[0].value =""
                    //condition

    // email[0].value    ? alert (email[0].value)  : alert ("Saisir tous les champs")


//verifier le bonne login un mail et motdePasse 






// email[0].value    ? alert (email[0].value)  : alert ("Saisir tous les champs")
        // document.location.assign("https://google.com?query=html")
      
       // password[0].value   ? alert(email[0].value)    : alert ("Saisir votre mot de passe")
      //email[0].value ?  document.location.assign("https://google.com?search?q=html")  :alert ("error")

     //motdePasse[0].value   ? alert(motdePasse[0].value)    : alert ("Saisir votre mot de passe")