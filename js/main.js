const genbutton = document.querySelector(".genButton");

let qoutes = []


function genqoute(){
  fetch(`data/qoutes.json`)
  .then(response => {
    if (!response.ok){
      console.error("Error",error)
    }
    return response.json()
  })
  .then(data => {
    qoutes = data

    const randomqoute = qoutes[Math.floor(Math.random() * qoutes.length)]


    let qoute = document.querySelector("#quote")
    let author  = document.querySelector("#author")

    qoute.textContent = randomqoute.quote
    author.textContent = randomqoute.author
  })
}

genbutton.addEventListener("click",(e) => {
  e.preventDefault()
  genqoute()
})

