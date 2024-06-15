let span = document.getElementsByTagName("span");
let product = document.getElementsByClassName("product");
let product_page = Math.ceil(product.length / 4);
let l = 0;
let movePrev = 25.34;
let maxMove = 203;

// mobile view
let mobile_view = window.matchMedia("(max-width: 768px)");
if (mobile_view.matches) {
    movePrev = 50.36;
    maxMove = 504;
}

let rightMove = () => {
    l += movePrev;
    if (product == 1) {l = 0;}
    for (const i of product) {
        if (l > maxMove) {l -= movePrev;}
        i.style.left = "-" + l + "%";
    }
}

let leftMove = () => {
    l -= movePrev;
    if (l <= 0){l=0;}
    for (const i of product) {
        if (l > maxMove){l -=movePrev;}
        i.style.left =  "-"+l+"%";
    }
}

span[1].onclick = () => {rightMove();}
span[0].onclick = () => {leftMove();}