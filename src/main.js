const schemeBtn = document.getElementById("btn")
let schemeInput = document.getElementById("color-picker")
let scheme = document.getElementById("scheme")

schemeBtn.addEventListener("click", () => {
    let colourType = ""
    let hex = schemeInput.value.slice(1);
    let select = document.getElementById("select").value.toLowerCase()
    colourType = select
    let url = `https://www.thecolorapi.com/scheme?hex=${hex}&mode=${colourType}&count=5`


    console.log(url)




    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            scheme.innerHTML = ``
            for (let i of data.colors) {
                scheme.innerHTML += `
                <div class="single-colour" style="background-color: ${i.hex.value}">
                <div class="hex">
                <p class="hex-item">${i.hex.value}</p>
                </div>
                
                </div>
                `

            }

        })



})