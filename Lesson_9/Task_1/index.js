const peopleWaiting = [
  "Кристина",
  "Олег",
  "Кирилл",
  "Мария",
  "Светлана",
  "Артем",
  "Глеб",
];

magicSequence("Кирилл"); // Вводим пользователя на котором наступил обед.

function magicSequence(userOfPause) {
  for (i = 0; i < peopleWaiting.length; ) {
    if (peopleWaiting[i] === userOfPause) {
      for (j = peopleWaiting.length - 1; j > i; j--) {
        if (peopleWaiting[j] === userOfPause) break;
        leaveQueueWithoutParcel(peopleWaiting);
      }
      giveParcel(peopleWaiting);
    } else {
      giveParcel(peopleWaiting);
    }
  }
}

function giveParcel(sequence) {
    if (sequence.length > 1)
      console.log(
        `${sequence.shift()} получил(а) посылку. В очереди осталось ${
          sequence.length
        } человек.`
      );
    else
      console.log(
        `${sequence.shift()} получил(а) посылку. В очереди нет никого.`
      );
  }
  
  function leaveQueueWithoutParcel(sequence) {
    console.log(`${sequence.pop()} не получил(а) посылку и ушел из очереди`);
  }
