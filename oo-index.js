const eventArea = document.getElementById('event_area')
const imageArea = document.getElementById('image_area')
const restartButton = document.getElementById('restart').addEventListener("click",()=> newUni.restart())
const attackButton = document.getElementById('attack').addEventListener("click",()=> newUni.attack())
const defendButton = document.getElementById('defend').addEventListener("click",()=> newUni.defend())
const healButton = document.getElementById('heal').addEventListener("click",()=> newUni.heal())
const breakdanceButton = document.getElementById('breakdance').addEventListener("click",()=> newUni.breakdance())
const eatButton = document.getElementById('eat').addEventListener("click",()=> newUni.eatCronut())

class Unicorn {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.health = 1000
  }

  restart() {
    while (eventArea.hasChildNodes()) {
        eventArea.removeChild(eventArea.lastChild);
    }
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("Out on the street, ready to go!"));
    eventArea.prepend(div);
    imageArea.className = 'new';
    this.health = 1000;

  }

  attack() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("'ATTAAAAAAAAAK!''"));
    eventArea.prepend(div);
    imageArea.className = 'attack';
    this.health -= 50;
    if (this.health <= 0) {
      alert("You have died and shamed your family :(")
    }
  }

  defend() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("You put sunglasses on."));
    eventArea.prepend(div);
    imageArea.className = 'defend';
    this.health -= 150;
    if (this.health <= 0) {
      alert("You have died and shamed your family :(")
    }
  }

  heal() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("You feel refreshed after yoga."));
    eventArea.prepend(div);
    imageArea.className = 'heal';
    this.health += 500;
  }

  breakdance() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("It's really spinning class"));
    eventArea.prepend(div);
    imageArea.className = 'breakdance';
    this.health -= 10;
    if (this.health <= 0) {
      alert("You have died and shamed your family :(")
    }
  }

  eatCronut() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("You've gained 1000 health points."));
    eventArea.prepend(div);
    imageArea.className = 'eat';
    this.health += 1000;
  }

}

let newUni = new Unicorn("Unk-Unk", "Plumber")


//
// createNew.addEventListener("click", function() {
//   let newUni = new Unicorn("Unk-Unk", "Plumber")
//   console.log(newUni)
// })
