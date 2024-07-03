(function () {
<<<<<<< HEAD
	if (window.location.pathname === '/komunikaty-turystyczne') {
		var imgs = document.querySelectorAll('.information__content img');
		imgs.forEach(function (img) {
			debugger;
			let url = img.src;
			let cl = img.className;
			let alt = img.alt;
			console.log(alt);
			var template = `<a href=${url} class="glightbox">
<img class=${cl} src=${url} alt="${alt}" height="84">
</a>`;
			console.log(template);
			img.parentElement.insertAdjacentHTML('beforeend', template);
			img.remove();
		});
		GLightbox();
	}
})();
=======
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
>>>>>>> 32c54815f32ff286fb51fb0dd557190fea4f0377
