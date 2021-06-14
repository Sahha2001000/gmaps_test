const mapsSrc = [
    // Київська
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79699.09062956007!2d29.392772874246226!3d51.37371262367057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDIyJzMyLjIiTiAyOcKwMjQnMzMuNiJF!5e0!3m2!1suk!2sua!4v1623665216819!5m2!1suk!2sua",
    // Північна 
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.168433882205!2d33.927194115789604!3d52.04024517972616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDAyJzI0LjkiTiAzM8KwNTUnNDUuOCJF!5e0!3m2!1suk!2sua!4v1623665129533!5m2!1suk!2sua",
    // Поліська
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.2072316045806!2d25.513216915784273!3d51.893682179700484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDUzJzM3LjMiTiAyNcKwMzAnNTUuNSJF!5e0!3m2!1suk!2sua!4v1623665294581!5m2!1suk!2sua",
    // Волинська
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.1100946960964!2d24.338153415781537!3d51.82241927968812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDQ5JzIwLjciTiAyNMKwMjAnMjUuMiJF!5e0!3m2!1suk!2sua!4v1623665405152!5m2!1suk!2sua",
    // Енергетична
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2747.1549335732066!2d30.74586151559196!3d46.485244479126386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDI5JzA2LjkiTiAzMMKwNDQnNTMuMCJF!5e0!3m2!1suk!2sua!4v1623665613490!5m2!1suk!2sua",
    // Слобожанська
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10260.421142223197!2d36.2371422!3d49.9906355!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf5d21be0004c7b21!2z0KXQsNGA0LrRltCy0YHRjNC60LAg0L7QsdC70LDRgdC90LAg0LzQuNGC0L3QuNGG0Y8!5e0!3m2!1suk!2sua!4v1623666022090!5m2!1suk!2sua",
];

const mapsValue = [
    "Київська",
    "Північна",
    "Поліська",
    "Волинська",
    "Енергетична",
    "Слобожанська",
]

let mapWindow = document.createElement('iframe');
mapWindow.width = "300";
mapWindow.height = "450";
mapWindow.src = mapsSrc[0];
mapWindow.style = "border:0;";
mapWindow.allowFullscreen = "";
mapWindow.loading = "lazy";
let description = document.getElementById("test-map");

let listItem = document.createElement("ul");
listItem.className = "list-region";


for (let i = 0; i < mapsValue.length; i++) {
    listItem.innerHTML += `<li><a class = "btn_region" title = "${i}">${mapsValue[i]}</a></li>`;
}
const all = document.getElementsByClassName('all');
all[0].appendChild(listItem)

description.appendChild(mapWindow)

const listBtn = document.getElementsByClassName("btn_region")
const mapDel = document.getElementsByClassName("del")
console.log(listBtn)

let text = document.getElementById('title')
console.log(text)
for (let i = 0; i < listBtn.length; i++) {
    console.log(i)
    listBtn[i].addEventListener('click', function () {
        mapWindow.src = mapsSrc [i];
        text.innerText = mapsValue[i];
    }, false);
}




