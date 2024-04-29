(function () {
	document.addEventListener('DOMContentLoaded', (e) => {
		let imgs = document.querySelectorAll('.information__content img');
		if (
			window.location.pathname === '/komunikaty-turystyczne' &&
			imgs.length > 0
		) {
			imgs.forEach(function (img) {
				const url = img.src;
				const alt = img.alt;
				var template = `<a href=${url} class="glightbox">
	<img src=${url} alt="${alt}" height="84">
	</a>`;
				img.parentElement.insertAdjacentHTML('beforeend', template);
				img.remove();
			});
			GLightbox();
		}
	});
})();
