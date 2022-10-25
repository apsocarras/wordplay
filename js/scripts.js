// UI Logic 

// Business Logic

window.addEventListener("load", function() {
  let form = document.getElementById("form");
  form.addEventListener("submit", function () {
    event.preventDefault();
    let sentence = document.getElementById("sentence").value;
    let noDot = sentence.split(".").join("");
    let words = noDot.split(" ");

       // remove non alphabet characters from elements in words: 
    // words.forEach(function(word) {
    //   word = word.replace(/[^a-z]/,"");
    //   console.log(word);
    // });

    let newArray = [];

    

    console.log(words);

    words.forEach(function(word) {
      if(word.length >= 3) {
        newArray.push(word);
      }
    });

    let reversed = newArray.reverse();
    let newSentence =  reversed.join(" ");
    let h1 = document.createElement("h1");
    h1.append(newSentence);
    form.after(h1);
  });      
});