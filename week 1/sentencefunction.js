let words = ["We", "have", "class", "Wednesday", "night"]
function SentObj(sent) {
    let sententiae = "";
    let i = 0;
    for(i = 0; i < sent.length; i++) {
        sententiae += sent[i]
        if(i == (sent.length - 1)) {
            sententiae += ".";
        }
        else {
            sententiae += " ";
        }
    }
    let sentence = {long: sent.length, text: sententiae}
    return sentence;
}
console.log("Word Count: " + SentObj(words).long + "     Sentence: " + SentObj(words).text);