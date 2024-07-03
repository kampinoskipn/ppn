(function () {
	document.addEventListener('DOMContentLoaded', () => {
		if (
			window.location.pathname === '/komunikaty-turystyczne' &&
			imgs.length > 0
		) {
			let imgs = document.querySelectorAll('.information__content img');
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