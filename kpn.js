(function () {
	document.addEventListener('DOMContentLoaded', (e) => {
		const pathname = document.location.pathname;
		if (!pathname.includes('bip') || !pathname.includes('sklep')) {
			!(function () {
				let el = document.querySelector('.menu-icon-eu');
				let wrapper = document.createElement('a');
				wrapper.setAttribute('href', '/projekty-unijne');
				wrapper.setAttribute('aria-label', 'Projekty unijne');
				el.parentNode.insertBefore(wrapper, el);
				wrapper.appendChild(el);
			})();
			/* Powrót do kategorii nadrzędnej */
			!(function () {
				const list =
						document.getElementsByClassName('breadcrumb__item'),
					getSection = document.querySelectorAll('section'),
					index = getSection.length - 1;
				if (list.length !== 0 && getSection.length !== 0) {
					const firstElementClass = getSection[index].className;
					if (firstElementClass !== 'banner') {
						const lastElement = getSection[index];
						const number = list.length;
						const crumb = list[number - 2];
						const hLink = crumb.firstElementChild.href;
						const html =
							'<section class="two-columns block-container container "><a id="backBtn"class="btn btn--white information-block__btn back__btn_user" href="'
								.concat(hLink, '">Wr\xF3\u0107 do kategorii: ')
								.concat(crumb.innerText, '</a></section>');
						lastElement.insertAdjacentHTML('afterend', html);
					}
				}
			})();
			/* Ustawia domyślny banner na nowej stronie */
			!(function () {
				const bannerImage = document.querySelector('.banner__image');
				const html =
					'<img src="/uploads/files/65e05bf353037792234443.jpg" alt="baner" class="banner__image__inner">';
				if (
					bannerImage !== null &&
					bannerImage.childElementCount === 0
				) {
					bannerImage.insertAdjacentHTML('beforeend', html);
				}
			})();

			/* Usuwa ikonę bilety z mobile */
			!(function () {
				const e = document.querySelector(
						'a.menu__button.menu__button--mobile',
					),
					t = document.location.pathname;
				if (null !== e) {
					const n = e.parentElement;
					t.includes('/sklep')
						? (n.style.gridTemplateColumns = 'repeat(4,1fr)')
						: (n.style.gridTemplateColumns = 'repeat(3,1fr)'),
						e.remove();
				}
			})();

			/* Usuwa wdowy z tekstu */
			(function () {
				const getHeader = document.querySelectorAll(
					'h2.banner__content__text',
				);
				const getSectTwoCols =
					document.querySelectorAll('.block__text');

				function removeWidows(blocks) {
					blocks.forEach(function (element) {
						let splited = element.innerHTML
							.trim()
							.replace('  ', ' ');
						splited = splited.split(' ');
						splited = splited.map(function (item) {
							return item.length <= 2 &&
								!item.includes('.') &&
								!item.includes('<')
								? item + '&nbsp;'
								: item;
						});
						let newStr = splited
							.join(' ')
							.replaceAll('&nbsp; ', '&nbsp;')
							.replaceAll(' r.', '&nbsp;r.')
							.replaceAll(' w.', '&nbsp;w.');
						element.innerHTML = newStr;
					});
				}

				if (getHeader !== null) {
					removeWidows(getHeader);
				}

				if (getSectTwoCols !== null) {
					removeWidows(getSectTwoCols);
				}
			})();

			/* Dodaje przycisk "do góry" */
			(function () {
				const button =
					'<div id="toTop"><a class="btn btn--white information-block__btn back__btn_user"  onclick="lenis.scrollTo(\'top\')"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-angle-up fa-w-10 fa-3x"><path fill="white" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" class=""></path></svg></a></div>';
				const getMain = document.querySelector('main');
				let myButton = document.querySelector('#toTop');
				if (myButton == null) {
					getMain.insertAdjacentHTML('beforeend', button);
				}
				myButton = document.querySelector('#toTop');
				function scrollFunction() {
					if (document.documentElement.scrollTop > 1000) {
						myButton.style.display = 'block';
					} else {
						myButton.style.display = 'none';
					}
				}
				window.onscroll = function () {
					scrollFunction();
				};
			})();
		}
	});
})();
