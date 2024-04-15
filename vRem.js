const path = window.location.pathname;
if (path.includes('akcje-wolontariackie') || path.includes('wolontariat')) {
	const buttons = document.querySelectorAll('a.menu__button');
	buttons.forEach((button) => {
		if (button.href.includes('wolontariat/konto')) {
			button.remove();
		}
	});
}
