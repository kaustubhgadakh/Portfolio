
let image = document.getElementById("image");
let currentPos = 0;
let images = ["/img/ph-1.JPG", "/img/ph-2.jpg", "/img/ph-3.jpg"]

function changeImage() {
    if (++currentPos >= images.length)
        currentPos = 0;
    image.src = images[currentPos];
}

image.addEventListener("click",  changeImage)


function getData() {
    let proCard = document.getElementById("proCard");
    url = "data.json"
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        for (let i = 0; i < data.length; i++) {
            let obj = data[i];
            proCard.innerHTML += `<div class="card" id="card-${i}">
            <h3>${obj.title}</h3>
            <img src="${obj.image}" alt="img here">
            <p>${obj.Discription}</p>
            <div class="BtnContainer">
            <a class="glow-on-hover" href="${obj.Visit}" target="_blank" >visit</a>
            <a class="glow-on-hover" href="${obj.source}" target="_blank" >source code</a>
            </div>
        </div>`
        }

    })
}

getData()
