(function () {
	document.addEventListener('DOMContentLoaded', () => {
		if (window.location.pathname === '/komunikaty-turystyczne') {
			var imgs = document.querySelectorAll('.information__content img');
			if (imgs.length > 0) {
				imgs.forEach(function (img) {
					let url = img.src;
					let cl = img.className;
					let alt = img.alt;
					var template = `<a href=${url} class="glightbox">
			<img class=${cl} src=${url} alt="${alt}" height="84">
			</a>`;
					img.parentElement.insertAdjacentHTML('beforeend', template);
					img.remove();
				});
				GLightbox();
			}
		}
	});
})();