document.addEventListener('DOMContentLoaded', () => {
	(function () {
		var buttons = document.querySelectorAll(
			'.text-with-images button.js-fullscreen',
		);
		if (buttons != null) {
			buttons.forEach((button) => {
				button.disabled = true;
				button.style.cursor = 'default';
			});
		}
	})();
});