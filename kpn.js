(function () {
	document.addEventListener('DOMContentLoaded', (e) => {
		const pathname = document.location.pathname;
		if (
			!pathname.includes('bip') &&
			!pathname.includes('sklep') &&
			!pathname.includes('/mapa-parku')
		) {
			!(function () {
				const el = document.querySelector('.menu-icon-eu');
				if (el != null) {
					const wrapper = document.createElement('a');
					wrapper.setAttribute('href', '/projekty-unijne');
					wrapper.setAttribute('aria-label', 'Projekty unijne');
					el.parentNode.insertBefore(wrapper, el);
					wrapper.appendChild(el);
				}
			})();
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
			(() => {
				const getHeader = document.querySelectorAll(
					'h2.banner__content__text',
				);
				const getSectTwoCols =
					document.querySelectorAll('.block__text');

				const formatTypo = (blocks, widows) => {
					blocks.forEach((element) => {
						let splited = element.innerHTML
							.trim()
							.replace(
								/&nbsp;|\s{2,}|<br><br>|<\/div>/g,
								(match) => {
									switch (match) {
										case '&nbsp;':
											return ' ';
										case '<br><br>':
											return ' <br><br> ';
										case '</div>':
											return ' </div>';
										default:
											return ' ';
									}
								},
							)
							.split(' ');
						if (widows) {
							const indices = splited
								.reduce(
									(acc, element, index) =>
										element.includes('<br>') ||
										element.includes('</p>') ||
										element.includes('</div>')
											? [...acc, index]
											: acc,
									[],
								)
								.reverse();
							indices.forEach((idx) =>
								splited.splice(
									idx - 2,
									0,
									splited.splice(idx - 2, 2).join('&nbsp;'),
								),
							);
							splited.splice(
								splited.length - 2,
								2,
								splited
									.slice(splited.length - 2)
									.join('&nbsp;'),
							);
						}
						const newStr = splited
							.map((item) =>
								item.length <= 2 &&
								!item.includes('.') &&
								!item.includes('<') &&
								!item.endsWith(';')
									? item + '&nbsp;'
									: item,
							)
							.join(' ')
							.replace(/&nbsp; | r\.| w\./g, (match) => {
								if (match === '&nbsp; ') {
									return '&nbsp;';
								} else if (match.trim().endsWith('.')) {
									return `&nbsp;${match.trim()}`;
								}
							});
						element.innerHTML = newStr;
					});
				};
				if (getHeader !== null) {
					formatTypo(getHeader, false);
				}
				if (getSectTwoCols !== null) {
					formatTypo(getSectTwoCols, true);
				}
			})();
			(function () {
				let ofBtn = document.querySelector('a.btn-skip.btn-skip--base');
				if (ofBtn === null || ofBtn.clientHeight === 0) {
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
					window.addEventListener('scroll', scrollFunction);
				}
			})();
		}
	});
})();
