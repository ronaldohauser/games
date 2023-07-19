// Array com emojis para o jogo
const emojis = ["🥸","🥸","🥶","🥶","🤖","🤖","💀","💀","👺","👺","🥳","🥳","🧐","🧐","🤯","🤯"];

// Embaralha os emojis usando uma função de ordenação aleatória
var shuf_emojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);

// Loop para criar as cartas do jogo
for (var i = 0; i < emojis.length; i++) {
	let box = document.createElement('div');
	box.className = 'item';
	box.innerHTML = shuf_emojis[i];

	// Manipulador de evento para quando uma carta é clicada
	box.onclick = function() {
		this.classList.add('boxOpen');
		setTimeout(function() {
			if (document.querySelectorAll('.boxOpen').length > 1) {
				if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {
					document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
					document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');

					document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
					document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');

					if (document.querySelectorAll('.boxMatch').length == emojis.length) {
						alert('PARABÉNS! VOCÊ GANHOU!');
					}
				} else {
					document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
					document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
				}
			}
		}, 500);
	}

	document.querySelector('.jogo').appendChild(box);
}
