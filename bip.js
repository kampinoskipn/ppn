document.addEventListener('DOMContentLoaded', () => {
	(function () {
		const html = `<div class="menu__controls__button-container-bip"><a href="https://bip.kampinoski-pn.gov.pl"
			aria-label="Biuletym informacji publicznej Kampinoskiego Parku Narodowego" target="_blank" rel=”noopener”>
			<img src="/" alt="BIP logo">
		</a></div>`;
		const whiteBIP = '/uploads/files/660d16e0cbcd9361647248.png';
		const redBIP = '/uploads/files/660d0ae3d3e4a349043535.png';
		const getHeader = document.querySelector('header.menu');
		const menuInner = document.querySelector('.menu__controls__inner');
		if (getHeader != null) {
			menuInner.insertAdjacentHTML('beforeend', html);
		}
		const getBip = document.querySelector(
			'.menu__controls__button-container-bip img',
		);
		if (getBip != null) {
			window.location.pathname == '/'
				? (getBip.src = whiteBIP)
				: (getBip.src = redBIP);
		}
		function changeImg(headerClass) {
			window.location.pathname == '/' && headerClass == true
				? (getBip.src = whiteBIP)
				: (getBip.src = redBIP);
		}
		window.addEventListener('scroll', function () {
			let headerClass =
				getHeader.classList.contains('filter-transparent');
			if (headerClass !== null) {
				changeImg(headerClass);
			}
		});
	})();
});
