/*products page functioning*/
let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.gallery .lipstick-One').forEach(lipstickOne =>{lipstickOne.onclick = () => {
    previewContainer.style.display= 'flex';
    let name = lipstickOne.getAttribute('data-name');
previewBox.forEach(preview => {
    let target = preview.getAttribute('data-target');
    if (name ==target){
        preview.classList.add('active');
    }
});
};
});

previewBox.forEach(close =>{
    close.querySelector('.bx-x').onclick = () => {
        close.classList.remove('active');
        previewContainer.style.display= 'none';   
    };
});


/* js new collection date countdown*/
var countDownDate = new Date("Aug 15, 2024 00:00:00").getTime();
var x =setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance/ (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance% (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance% (1000 * 60 * 60)) / (1000 * 60)); 
    var seconds = Math.floor((distance% (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML= days;
    document.getElementById("hours").innerHTML= hours;
    document.getElementById("minutes").innerHTML= minutes;
    document.getElementById("seconds").innerHTML= seconds;

if(distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML= "00";
    document.getElementById("hours").innerHTML= "00";
    document.getElementById("minutes").innerHTML= "00";
    document.getElementById("seconds").innerHTML= "00";
}

}, 1000);


/* Reviews page functionality */
const allStar = document.querySelectorAll('.rate .star')

allStar.forEach((item, idx)=> {
    item.addEventListener('click', function () {
        let click= 0
        allStar.forEach(i=> {
            i.classList.replace('bxs-star','bx-star')
            i.classList.remove('active')
        })
        for (let i=0; i< allStar.length; i++) {
            if(i<= idx) {
                allStar[i].classList.replace('bx-star', 'bxs-star')
                allStar[i].classList.add('active')
            } else {
                allStar[i].style.setProperty('--i', click)
                 click++
            }
        }
    })
})
