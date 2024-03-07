      //1 - задати масив з 4 слова на 4 букви кожне
      //2 - випадковим методом показати одне зі слів
      //3 - запитувати в користувача букву
      //4 - якщо буква присутня- вивести її у відповідь (alert)

      let sharada = ["Cake", "Moon", "Book", "Lamp"];
      let randomNumber = Math.round(Math.random() * 4);
      let chosenWord = sharada[randomNumber];
      let letter = prompt("Give me a letter");
      if (chosenWord.includes(letter)) {
        alert('Yes, you guess. The word contains "' + letter + '"');
      } else {
        alert("Sorry, you don't guess");
      }