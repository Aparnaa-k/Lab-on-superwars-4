const PLAYERS = [
  'Spiderman',
  'Captain America',
  'Wonderwoman',
  // "Popcorn",
  // "Gemwoman",
  // "Bolt",
  // "Antwoman",
  // "Mask",
  // "Tiger",
  // "Captain",
  // "Catwoman",
  // "Fish",
  // "Hulk",
  // "Ninja",
  // "Black Cat",
  // "Volverine",
  // "Thor",
  // "Slayer",
  // "Vader",
  // "Slingo"
];

// Player Class
class Player {
  constructor(id, name, type) {
    // Progression 1: Create member variables and assign values
    this.id = id;
    this.name = name;
    this.strength = this.getRandomStrength()
    this.image = `/images/super-${id}.png`
    this.type = type; 
  }
  // getting random strength
  getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
  };

  // Progression 2: Create a player for displaying
  view = () => {
    // Accumulate HTML template
    // Type your code here
    let id = this.id + 1
    const player = document.createElement('div');
    player.classList.add('player');
    player.setAttribute('data-id', id);
    
    const playerImage = document.createElement('img');
    playerImage.setAttribute('src', `images/super-${id}.png`);
    
    const playerName = document.createElement('div');
    playerName.classList.add('name');
    playerName.textContent = this.name;
    
    const playerStrength = document.createElement('div');
    playerStrength.classList.add('strength');
    playerStrength.textContent = this.strength;
    
    player.appendChild(playerImage);
    player.appendChild(playerName);
    player.appendChild(playerStrength);
    

    return player;
  };
}

// Superwar Class
class Superwar {
  constructor(players) {
    // Progression 3:
    // Create a field players
    // Use Map method to loop through players argument and create new players
    // Type your code here
    this.players = players.map((item,index)=>{
      let type = (index%2==0)?"hero":"villain"
      return new Player(index,item,type)
    })
  }

  // Display players in HTML
  viewPlayers = () => {
    let team = document.getElementById('heroes');
    team.innerHTML = '';
    let fragment = this.buildPlayers('hero');
    team.append(fragment);

    team = document.getElementById('villains');
    team.innerHTML = '';
    fragment = this.buildPlayers('villain');
    team.append(fragment);
  };

  // Build players fragment
  buildPlayers = (type) => {
    let fragment = document.createDocumentFragment();
    this.players
      .filter((player) => player.type == type)
      .forEach((player) => fragment.append(player.view()));
    return fragment;
  };
}

// uncomment this part -- only after you complete progression 3
window.onload = () => {
    const superwar = new Superwar(PLAYERS);
    superwar.viewPlayers();
}
