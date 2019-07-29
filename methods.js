class Monster {
    constructor(name, imageUrl, pos) {
        this.id = `monster_${Math.round(Math.random() * 999)}`;
        this.name = name;
        this.imageUrl = imageUrl
        this.x = pos.x
        this.y = pos.y

    }
    //behaviour
    sayHi() {

        return `${this.name}`;
    }

    setPicture(pic) {
        this.imageUrl = pic
    }

    setXpos(xpos) {
        this.x = `${parseInt(this.x) + xpos}px`
    }

    setYpos(Ypos) {
        this.y = `${parseInt(this.y) + Ypos}px`
    }

    getCard(w, h) {
        const monsterUI = document.createElement("div")
        const img = document.createElement("img");
        img.src = this.imageUrl
        img.height = w;
        img.width = h;
        monsterUI.append(img)
        monsterUI.style.position = "absolute"
        monsterUI.style.left = this.x
        monsterUI.style.top = this.y
        return monsterUI;
    }

}