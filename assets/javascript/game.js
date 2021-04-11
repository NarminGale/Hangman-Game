let students = [
  'ali',
  'aytac',
  'cavad',
  'emil',
  'kamran',
  'narmin',
  'nazrin',
  'nihat',
  'rasim',
  'soltan',
  'zeynal',
]

let word = document.querySelector('#word p')
let guess = document.getElementById('guesses')
let loss = document.getElementById('losses')
let guessedLetters = document.getElementById('guessedLetters')

let userWord = []
let guessedLetter = []

let randomNumber = Math.floor(Math.random() * students.length)
let student = students[randomNumber]

for (let i = 0; i < student.length; i++) {
  userWord.push('_')
}
word.innerHTML = userWord.join(' ')

let guesses = 9
let losses = 0

guess.innerHTML = guesses
loss.innerHTML = losses

window.onkeypress = function (e) {
  let userInput = e.key

  if (!student.includes(userInput) && !guessedLetter.includes(userInput)) {
    guessedLetter.push(userInput)
    guessedLetters.innerHTML = guessedLetter.join(', ')
  }

  let a = checkIndex(userInput, student)

  if (a.length === 0 || a.length === 1) {
    if (student.includes(userInput)) {
      let index = student.indexOf(userInput)
      userWord[index] = student[index]
      // console.log(userWord)
      // console.log(index)
      // console.log(student[index])
      word.innerHTML = userWord.join(' ')
    } else {
      guesses -= 1
      guess.innerHTML = guesses
      if (guesses === 0) {
        guesses = 9
        losses += 1
        loss.innerHTML = losses
        guess.innerHTML = guesses
      }
    }
  } else if (a.length > 1) {
    for (let i = 0; i < a.length; i++) {
      console.log(a[i])
      if (student.includes(userInput)) {
        // let index = student.indexOf(userInput)
        userWord[a[i]] = student[a[i]]
        // console.log(userWord)
        // console.log(index)
        // console.log(student[index])
        word.innerHTML = userWord.join(' ')
      } else {
        guesses -= 1
        guess.innerHTML = guesses
        if (guesses === 0) {
          guesses = 9
          losses += 1
          loss.innerHTML = losses
          guess.innerHTML = guesses
        }
      }
    }
  }
}

function checkIndex(userInput, student) {
  let indexArr = []
  for (let i = 0; i < student.length; i++) {
    if (userInput === student[i]) {
      indexArr.push(i)
    }
  }
  return indexArr
  // console.log(indexArr.length)
}
