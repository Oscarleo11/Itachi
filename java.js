class Maison{

    constructor(couleur){
        this.couleur = couleur;
    }

}

let maMaison = new Maison('rouge');
console.log(maMaison.couleur) 

const numberOfSeats = 30;
const numberOfGuests = 25;
if (numberOfGuests < numberOfSeats) {
// autoriser plus d'invités
} else {
// ne pas autoriser de nouveaux invités
}
if (numberOfGuests == numberOfSeats) {
    // tous les sièges sont occupés
    } else if (numberOfGuests < numberOfSeats) {
    // autoriser plus d'invités
    } else {
    // ne pas autoriser de nouveaux invités
    }
 
    // portée des variables ou block scope
    let userLoggedIn = true;

if (userLoggedIn) {
   let welcomeMessage = 'Welcome back!';
} else {
   let welcomeMessage = 'Welcome new user!';
}

console.log(welcomeMessage); // renvoie une erreur

//exemple
let userConnect = true;
let welcomeMessage = ''; // déclarer la variable ici

if (userConnect) {
    welcomeMessage = 'Welcome back!'; // modifier la variable extérieure
} else {
    welcomeMessage = 'Welcome new user!'; // modifier la variable extérieure
}

console.log(welcomeMessage); // imprime 'Welcome back!'

//Switch
let firstUser = {
    name: "Will Alexander",
    age: 33,
    accountLevel: "normal"
};

let secondUser = {
    name: "Sarah Kate",
    age: 21,
    accountLevel: "premium"
};

let thirdUser = {
    name: "Audrey Simon",
    age: 27,
    accountLevel: "mega-premium"
};
//Vous pouvez ici utiliser une instruction   switch  , qui prend la variable à vérifier et une liste de valeurs, comme différents cas :

switch (firstUser.accountLevel) {
case 'normal':
      console.log('You have a normal account!');

break;
case 'premium':
      console.log('You have a premium account!');

break;
case 'mega-premium':
      console.log('You have a mega premium account!');
break;

default:
      console.log('Unknown account type!');
}




const Starscape = ({ densityRatio = 0.5, sizeLimit = 5, defaultAlpha = 0.5 }) => {
    const canvasRef = React.useRef(null)
    const contextRef = React.useRef(null)
    const starsRef = React.useRef(null)
    React.useEffect(() => {
      contextRef.current = canvasRef.current.getContext('2d')
      const LOAD = () => {
        const VMIN = Math.min(window.innerHeight, window.innerWidth)
        const STAR_COUNT = Math.floor(VMIN * densityRatio)
        canvasRef.current.width = window.innerWidth
        canvasRef.current.height = window.innerHeight
        starsRef.current = new Array(STAR_COUNT).fill().map(() => ({
          x: gsap.utils.random(0, window.innerWidth, 1),
          y: gsap.utils.random(0, window.innerHeight, 1),
          size: gsap.utils.random(1, sizeLimit, 1),
          scale: 1,
          alpha: gsap.utils.random(0.1, defaultAlpha, 0.1),
        }))
      }
      const RENDER = () => {
        contextRef.current.clearRect(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        )
        starsRef.current.forEach(star => {
          contextRef.current.fillStyle = `hsla(0, 100%, 100%, ${star.alpha})`
          contextRef.current.beginPath()
          contextRef.current.arc(star.x, star.y, star.size / 2, 0, Math.PI * 2)
          contextRef.current.fill()
        })
      }
      LOAD()
      RENDER()
    }, [])
    return <canvas ref={canvasRef} />
  }