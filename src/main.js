const schemeBtn = document.getElementById("btn")
const schemeContainer = document.getElementById("scheme__colours")
const schemeInput = document.getElementById("color-picker")

schemeBtn.addEventListener("click", () => {
    let colourType = ""
    let select = document.getElementById("select").value
    colourType = select.toLowerCase()


    let url = `https://www.thecolorapi.com/scheme?hex=24B1E0&mode=${colourType}&count=5`






    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))



})



function getScheme(data) {
    for (let color of data) {

    }
}