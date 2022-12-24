let btn = document.getElementsByClassName('btn')[0];

const handelClickBtn = () => {
  let randomNumber1 = Math.ceil(Math.random() * 6);
  let randomNumber2 = Math.ceil(Math.random() * 6);

  let dice1 = document.getElementById('dice1');
  let dice2 = document.getElementById('dice2');
  let header = document.getElementById('heading');

  dice1?.setAttribute('src', `./images/dice${randomNumber1}.png`);
  dice2?.setAttribute('src', `./images/dice${randomNumber2}.png`);

  if (randomNumber1 > randomNumber2) {
    header.innerText = '🚩 Player 1 wins !';
  } else if (randomNumber1 < randomNumber2) {
    header.innerText = 'Player 2 wins ! 🚩 ';
  } else {
    header.innerText = 'Draw';
  }
};

btn.addEventListener('click', handelClickBtn);
