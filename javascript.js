// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let betterSentence = ['I', 'gave', 'hugo', 'a', 'treat', 'and', 'he', 'spit', 'it', 'out', 'because', 'it', 'had', 'a', 'pill', 'in', 'it'];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
    */
   // Each time the for loop executes, you're going to add one more word to this string
function addExcitement(theWordArray, symbol) {
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
addExcitement(betterSentence, "!")




// If the current value of the counter variable can be evenly divided by 3 
// using the JavaScript remainder operator - then add a single exclamation point(!) to the output.