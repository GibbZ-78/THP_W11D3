class Character {
  
  constructor(id, name, health, damage, mana, status) {
    this.id = id;
    this.name = name;
    this.health = health;
    this.damage = damage;
    this.mana = mana;
    this.status = status;
  }

  takeDamage(stroke) {
    this.health = Math.max(0, this.health - stroke);
    if (this.health == 0) { 
      this.status = "loser";
    }
  }

  dealDamage(opponent) {
    opponent.takeDamage(this.damage);
    // TO DO: manage the +20 mana gained when killing another player
  }

  showCard(illustration, combo, type, id) {
    let myHTML = "";
    myHTML += "<div class='col-lg-2 col-md-4 m-2'>"; 
    myHTML += " <div class='card' id='card_"+id+"'>";
    myHTML += "   <img src='./images/"+illustration+"' class='card-img-top' alt='photo de "+ this.name +"'>";
    myHTML += "   <div class='card-body'>";
    myHTML += "     <h5 class='card-title'>"+ this.name +"</h5>";
    myHTML += "     <h6 class='card-subtitle mb-2 fst-italic text-muted'>"+type+"</h6>";
    myHTML += "     <div class='row justify-content-around'>";
    myHTML += "       <span class='card-text col-4'><i class='bi bi-heart-pulse-fill text-danger'></i><small> "+this.health+"</small></span>";
    myHTML += "       <span class='card-text col-4'><i class='bi bi-lightning-fill text-warning'></i><small> "+this.damage+"</small></span>";
    myHTML += "       <span class='card-text col-4'><i class='bi bi-magic text-primary'></i><small> "+this.mana+"</small></span>";
    myHTML += "     </div>";
    myHTML += "   </div>";
    myHTML += "   <div class='card-footer text-muted small text-center'><i class='bi bi-stars'></i> "+combo+" <i class='bi bi-stars'></i></div>";
    myHTML += "   </div>";
    myHTML += " </div>";
    myHTML += "</div>";
    return myHTML;
  }

}

class Fighter extends Character {
  
  constructor(id, name, health = 12, damage = 4, mana = 40, status = "playing", photo = "unknown_hero.jpg") {
    super(id, name, health, damage, mana, status);
    this.special = "Dark Vision";
    this.photo = photo;
    this.type = "Fighter";
  }

  // Combo name: "Dark Vision"
  // Damage to opponent: 5 hp
  // Cost: 20 mana 
  // NB: reduces received damages by -2 hp till next round
  specialAttack(opponent) {
    opponent.takeDamage(5);
    this.mana -= 20;
    // TO DO: manage damage reduction till next round
  }

}

class Paladin extends Character {
  
  constructor(id, name, health = 16, damage = 3, mana = 160, status = "playing", photo = "unknown_hero.jpg") {
    super(id, name, health, damage, mana, status);
    this.special = "Healing Lighting";
    this.photo = photo;
    this.type = "Paladin";
  }

  // Combo name: "Healing Lighting"
  // Damage to opponent: 4 hp
  // Self-healing: 5 hp
  // Cost to cast: 40 mana
  specialAttack(opponent) {
    opponent.takeDamage(4);
    this.health += 5;
    this.mana -= 40;
  }

}

class Monk extends Character {
  
  constructor(id, name, health = 8, damage = 2, mana = 200, status = "playing", photo = "unknown_hero.jpg") {
    super(id,name, health, damage, mana, status);
    this.special = "Phoenix Prayer";
    this.photo = photo;
    this.type = "Monk";
  }

  // Combo name: "Regenerating Prayer"
  // Healing to target: 8 hp
  // Cost to cast: 25 mana
  specialAttack(target) {
    target.health += 8;
    this.mana -= 25;
  }

}

class Berserker extends Character {
  
  constructor(id, name, health = 8, damage = 4, mana = 0, status = "playing", photo = "unknown_hero.jpg") {
    super(id, name, health, damage, mana, status);
    this.special = "Ancients' Rage";
    this.photo = photo;
    this.type = "Berserker";
  }

  // Combo name: "Ancients' Rage"
  // Effect : add 1 to each damage he deals for the rest of the game
  // Cost to cast: 0 mana but 1 hp
  // NB: can be casted several times a game, increasing his damage rate by 1 each time but sucking his health as well.
  specialAttack() {
    this.damage += 1;
    this.health -=1;
    if (this.health == 0) { 
      this.status = "loser";
    }
  }

}

class Assassin extends Character {
  
  constructor(id, name, health = 6, damage = 6, mana = 20, status = "playing", photo = "unknown_hero.jpg") {
    super(id, name, health, damage, mana, status);
    this.special = "Shadow Hit";
    this.photo = photo;
    this.type = "Assassin";
  }

  // Combo name: "Shadow Hit"
  // Damage to opponent: 7 hp
  // Cost to cast: 20 mana
  // NB: Assassin then cannot be damaged during the following round
  specialAttack(opponent) {
    opponent.takeDamage(7);
    this.mana -= 20;
    // TO DO: manage invicibility till next round
  }

}

class Wizard extends Character {
  
  constructor(id, name, health = 10, damage = 2, mana = 200, status = "playing", photo = "unknown_hero.jpg") {
    super(id, name, health, damage, mana, status);
    this.special = "Magic Fireball";
    this.photo = photo;
    this.type = "Wizard";
  }

  // Combo name: "Magic Fireball"
  // Damage to opponent: 7 hp
  // Cost to cast: 25 mana
  specialAttack(opponent) {
    opponent.takeDamage(7);
    this.mana -= 25;
  }

}

class Gibbz extends Character {
  
  constructor(id, name, health = 10, damage = 4, mana = 150, status = "playing", photo = "unknown_hero.jpg") {
    super(id, name, health, damage, mana, status);
    this.special = "Fishbrain Rocket";
    this.photo = photo;
    this.type = "Gibbz";
  }

  // Combo name: "Fishbrain Rocket"
  // Damage to opponent: 5 hp
  // Self healing: 2 hp
  // Cost to cast: 25 mana
  specialAttack(opponent) {
    opponent.takeDamage(5);
    this.health += 2;
    this.mana -= 25;
  }

}
