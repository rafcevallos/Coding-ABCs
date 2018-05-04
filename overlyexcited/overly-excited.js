// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let nextSentence = ["What", "is", "the", "damn", "point", "of", "this?"]

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
const addExcitement = theWordArray => {  /*Turned addExcitement into an ARROW function */

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""
    let punctCount = 0


    sentence.forEach((word, i) => {  /* used a forEACH loop instead of a regular FOR loop */

        // for (let i = 0; i < theWordArray.length; i++) {

        // Concatenate the new word onto buildMeUp

        // buildMeUp += theWordArray[i];   /* NOTE:  += acts as a STRING OPERATOR to CONCATENATE(add) strings */

        buildMeUp += `${theWordArray[i]}`

        if ((i + 1) % 3 === 0 && i !== 0) {    /* % is a REMAINDER operator */
            punctCount++   /* for each iteration of 3, add a ! */
            buildMeUp += "!"
        }
        buildMeUp += " "

        // Print buildMeUp to the console
        console.log(buildMeUp)
    })
}
// Invoke the function and pass in the array
addExcitement(sentence)