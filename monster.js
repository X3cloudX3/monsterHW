const mainBoard = document.querySelector("#main");


const monsters = [];





function draw(arr) {
    mainBoard.innerHTML = "";
    arr.forEach(function (monster) {
        mainBoard.append(monster.getCard(200, 200))

    });
}



function drawMonster() {
    const monster1 = new Monster("blue eyes white dragon",
        "https://images-na.ssl-images-amazon.com/images/I/51o-WYc9ZlL.jpg", { x: "50px", y: "100px" })
    const monster2 = new Monster("obalisk the tormentor",
        "https://images-na.ssl-images-amazon.com/images/I/71q91joIIoL._SY606_.jpg", { x: "300px", y: "200px" })
    const monster3 = new Monster("slifer the wierd ass snake",
        "https://images-na.ssl-images-amazon.com/images/I/51heGXfQc8L.jpg", { x: "500px", y: "40px" })
    monsters.push(monster1, monster2, monster3)
    draw(monsters)

    const buttonL = document.createElement("button");
    buttonL.innerText = "move left"
    mainBoard.append(buttonL)
    buttonL.addEventListener("click", function () {
        setTimeout(() => {
            if (document.getElementById('select').value == "monster1") {
                monster1.setXpos(-20)
            }
            if (document.getElementById('select').value == "monster2") {
                monster2.setXpos(-20)
            }
            if (document.getElementById('select').value == "monster3") {
                monster3.setXpos(-20)
            }
            draw(monsters)
            mainBoard.append(buttonL)
            mainBoard.append(buttonR)
            mainBoard.append(buttonD)
            mainBoard.append(buttonU)
        })
    })

    const buttonR = document.createElement("button");
    buttonR.innerText = "move right"
    mainBoard.append(buttonR)
    buttonR.addEventListener("click", function () {
        setTimeout(() => {
            if (document.getElementById('select').value == "monster1") {
                monster1.setXpos(20)
            }
            if (document.getElementById('select').value == "monster2") {
                monster2.setXpos(20)
            }
            if (document.getElementById('select').value == "monster3") {
                monster3.setXpos(20)
            }


            draw(monsters)
            mainBoard.append(buttonL)
            mainBoard.append(buttonR)
            mainBoard.append(buttonD)
            mainBoard.append(buttonU)
        })
    })

    const buttonD = document.createElement("button");
    buttonD.innerText = "move down"
    mainBoard.append(buttonD)
    buttonD.addEventListener("click", function () {
        setTimeout(() => {
            if (document.getElementById('select').value == "monster1") {
                monster1.setYpos(20)
            }
            if (document.getElementById('select').value == "monster2") {
                monster2.setYpos(20)
            }
            if (document.getElementById('select').value == "monster3") {
                monster3.setYpos(20)
            }


            draw(monsters)
            mainBoard.append(buttonL)
            mainBoard.append(buttonR)
            mainBoard.append(buttonD)
            mainBoard.append(buttonU)

        })
    })
    const buttonU = document.createElement("button");
    buttonU.innerText = "move UP"
    mainBoard.append(buttonU)
    buttonU.addEventListener("click", function () {
        setTimeout(() => {
            if (document.getElementById('select').value == "monster1") {
                monster1.setYpos(-20)
            }
            if (document.getElementById('select').value == "monster2") {
                monster2.setYpos(-20)
            }
            if (document.getElementById('select').value == "monster3") {
                monster3.setYpos(-20)
            }


            draw(monsters)
            mainBoard.append(buttonL)
            mainBoard.append(buttonR)
            mainBoard.append(buttonD)
            mainBoard.append(buttonU)
        })
    })
}


























// dragElement(monsters.monster1);
// dragElement(monsters.monster2);
// dragElement(monsters.monster3);

// function dragElement(elmnt) {
//     let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//     // if (document.getElementById(elmnt.id + "header")) {
//     //     // if present, the header is where you move the DIV from:
//     //     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//     // } else {
//     //     // otherwise, move the DIV from anywhere inside the DIV: 
//     elmnt.onmousedown = dragMouseDown;
// }

// function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
// }

// function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
// }

// function closeDragElement() {
//     // stop moving when mouse button is released:
//     document.onmouseup = null;
//     document.onmousemove = null;
// }
// // }
