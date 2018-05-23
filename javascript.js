// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement(theWordArray, symbol) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = "";
    let exCount = "";
    for (let i = 0; i < theWordArray.length; i++) {
        if ((i+1) % 3 === 0) {
            buildMeUp = `${buildMeUp} ${theWordArray[i]}`;
            exCount = `${exCount}${symbol}`;
            buildMeUp = `${buildMeUp} ${exCount}`;
        } else {
            buildMeUp = `${buildMeUp} ${theWordArray[i]}`;
        }
        console.log(buildMeUp)
    }

}
// Invoke the function and pass in the array
addExcitement(sentence, "!")




// If the current value of the counter variable can be evenly divided by 3 
// using the JavaScript remainder operator - then add a single exclamation point(!) to the output.