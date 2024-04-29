(function () {
	document.addEventListener('DOMContentLoaded', (e) => {
		let imgs = document.querySelectorAll('.information__content img');
		if (
			window.location.pathname === '/komunikaty-turystyczne' &&
			imgs.length > 0
		) {
			imgs.forEach(function (img) {
				debugger;
				const url = img.src;
				const cl = img.className ? img.className : " ";
				const alt = img.alt ? img.alt : " ";
				var template = `<a href=${url} class="glightbox">
	<img class=${cl} src=${url} alt="${alt}" height="84">
	</a>`;
				img.parentElement.insertAdjacentHTML('beforeend', template);
				img.remove();
			});
			GLightbox();
		}
	});
})();
