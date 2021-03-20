
let image = document.getElementById("im");
let dots = document.getElementById("dots")

function slide() {

    count++;
    if (count >= imag.length) {
        count = 0;
    }
    render(count)
    dot_show(count)

}

setInterval(slide, 3000);

let imag = [
    "./image/i_2.jpeg",
    "./image/i_5.jpg",
    "./image/i_6.jpg",
    "./image/i_7.jpeg",
    "./image/i_8.jpeg"
]

let count = 0

function getChange_dot(n) {

    render(n)

    dot_show(n)
    console.log(n)
}

// next button
function getChange_next() {
    if (count < imag.length - 1)
        count++
    console.log(count)
    render(count)
    dot_show(count)
}

function getChange_pre() {
    if (count <= 0) {
        count = 0
    } else {
        count--
    }

    console.log(count)
    render(count)
    dot_show(count)
}

// render function

function render(par) {
    image.src = imag[par]
    dots.innerHTML = imag.map((el, index) => {

        return ` <div class="single-dot" onclick= "getChange_dot(${index})"></div>`
    }).join(" ")


}
function dot_show(par) {
    let que = document.querySelectorAll(".single-dot")
    console.log(par)
    console.log(que[par])

    que[par].classList.add("active-img")
    preve_arrow = document.querySelector(".prev-btn")
    next_arrow = document.querySelector(".next-btn")
    if (par === imag.length - 1) {
        next_arrow.style.display = "none"
    } else {
        next_arrow.style.display = "block"
    }

    if (par == 0) {
        preve_arrow.style.display = "none"
    } else {
        preve_arrow.style.display = "block"
    }
}

render(0)







