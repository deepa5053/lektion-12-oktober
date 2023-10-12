/**
 * Slumpa ett tal . 
 * Låt användaren skriva in ett tal 
 * jämför sedan med det slumpade talet. Om det är det samma skriv ut "Rätt gissat" annars säg om det är för högt eller lågt.
 */

/**
 * START
    RANDOM number between 1-10

    user CLICKS on button THEN

    INPUT number from user

    COMPARE user guess with random number

    IF same number THEN print "Rätt gissat" 
    ELSE IF number is higher THEN print "För högt"
    ELSE IF number is lower THEN print "För lågt"

END
 */

console.log(document);

const buttonElem = document.querySelector('.btn'); // Letar efter ett element med klassen css-klassen .btn
const inputElem = document.querySelector('.input');
const resultElem = document.querySelector('p');
const randomNumber = Math.ceil(Math.random() * 10); // Slumpar ett tal mellan 1 - 10 och avrundar det till ett heltal

// När jag klickar på knappen körs koden inom måsvingarna
buttonElem.addEventListener('click', () => {
    const userGuess = inputElem.value; // Hämta vad som finns i inputfältet och spara i en variabel
    console.log('Du gissade: ' + userGuess);
    //console.log('Det slumpade talet: ' + randomNumber);

    if (Number(userGuess) === randomNumber) {
        console.log('Du gissade precis rätt');
        resultElem.innerHTML = 'Du gissade precis rätt'; // Lägger till text i p-taggen.
    } else if (Number(userGuess) > randomNumber) {
        console.log('Du gissade för högt');
        resultElem.innerHTML = 'Du gissade för högt';
    } else if (Number(userGuess) < randomNumber) {
        console.log('Du gissade för lågt');
        resultElem.innerHTML = 'Du gissade för lågt';
    }

});