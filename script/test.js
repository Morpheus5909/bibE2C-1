let targetNumber = Math.floor(Math.random()*100)+1;
console.log(targetNumber);
let userNumber = prompt('Devinez un nombre entre 1 et 100 :');

while(userNumber != targetNumber) {
    
    if(userNumber > targetNumber) {
        alert(`C'est trop grand!`);
    } else {
        alert(`C'est trop petit!`);
    }

    userNumber = prompt('Devinez un nombre entre 1 et 100 :');
}

alert('Bravo, vous n\'avez trouvé!');






/*
let firstname = prompt('Quel est votre prénom?');
let lastname = prompt("Quel est votre nom?");

alert(`Bonjour ${firstname} ${lastname}!`);
*/






