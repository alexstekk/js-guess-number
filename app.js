var secretNum = Math.ceil(Math.random() * 10);
var tries = 0;
console.log('Загадано число:', secretNum);

function guessNum(num) {
	if (tries == 5) return alert('Игра окончена');
	if (secretNum === num) {
		alert('Вы выиграли');
		tries = 5;
	} else {
		alert(`Не угадали, загаданное число ${secretNum > num ? 'больше' : 'меньше'}`);
		tries++;
	}
}
