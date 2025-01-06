const ambilQuery = document.getElementById('Menyapa')

let jam = new Date().getHours();
let Menyapa = ''

if (jam >= 5 && jam < 12){
    Menyapa ="Selamat Pagi..."
} else if (jam >= 12 && jam < 15){
    Menyapa ="Selamat Siang..."
} else if (jam >= 15 && jam < 18){
    Menyapa ="Selamat Sore..."
} else {
    Menyapa ="Selamat Malam..."
}

ambilQuery.innerHTML=Menyapa;