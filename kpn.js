(function () {
	document.addEventListener('DOMContentLoaded', (e) => {
		const pathname = document.location.pathname;
		if (
			!pathname.includes('bip') &&
			!pathname.includes('sklep') &&
			!pathname.includes('/mapa-parku')
		) {
			// Add EU projects link
			!(function () {
				const el = document.querySelector('.menu-icon-eu');
				const svgTitles = el.querySelectorAll('title');
				if (el != null) {
					const wrapper = document.createElement('a');
					wrapper.setAttribute('href', '/projekty-unijne');
					wrapper.setAttribute('aria-label', 'Projekty unijne');
					el.parentNode.insertBefore(wrapper, el);
					wrapper.appendChild(el);
				}
				svgTitles.forEach((title) => {
					title.innerHTML = 'Projekty unijne';
				});
			})();
			// Add back button to breadcrumbs
			// This function adds a "back to category" button to the last section of the page
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

			//Remove sklep link from mobile menu
			// This function removes the "sklep" link from the mobile menu
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
			// Add scroll to top button
			// This function adds a "scroll to top" button to the page
			(function () {
				let ofBtn = document.querySelector('a.btn-skip.btn-skip--base');
				if (ofBtn === null || ofBtn.clientHeight === 0) {
					const button =
						'<div id="toTop"><a id="scrollToTop" href="#main-content" class="btn btn--white information-block__btn back__btn_user" aria-label="przejdź do początku strony" onclick="lenis.scrollTo(\'top\')"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-angle-up fa-w-10 fa-3x"><path fill="white" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" class=""></path></svg></a></div>';
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
			//Add "Opublikowano" to the page
			!(function () {
				if (pathname === '/aktualnosci' || pathname === '/') {
					elementObserve = window.document.querySelector(
						'.articles-grid.js-pagination-result-container-news',
					);

					if (elementObserve) {
						var observer = new MutationObserver(function () {
							addText();
						});
						observer.observe(elementObserve, {
							subtree: true,
							characterData: false,
							childList: true,
							attributes: false,
						});
					}

					function addText() {
						var pub_date = document.querySelectorAll(
							'time.article-tile__publication-date',
						);

						if (pub_date.length > 0) {
							pub_date.forEach(function (date) {
								if (
									date.hasAttribute('datetime') &&
									!date.innerText.includes('Opublikowano: ')
								) {
									date.innerText =
										'Opublikowano: ' + date.dateTime;
								}
							});
						}
					}
					addText();
				}
			})();
			//Cloak email addresses
			!(function () {
				var mails = document.querySelectorAll('a[href^="mailto:"');
				if (mails.length > 0) {
					mails.forEach(function (mail) {
						var email = mail
							.getAttribute('href')
							.replace('mailto:', '');
						mail.innerHTML = mail.innerHTML.replace(
							'@',
							'<span>&#64;</span>',
						);
						mail.setAttribute('href', '#');
						mail.addEventListener('click', function (e) {
							e.preventDefault();
							mailTo(email);
						});
					});
				}
				function mailTo(email) {
					window.location.href = 'mailto:' + email;
				}
			})();
			//Remove "multikonto"
			var k = document.querySelector(
				'a.menu__button.menu__button--desktop',
			);
			if (k != null) {
				k.remove();
			}
			//Remove button to form from "załatw sprawę"
			if (pathname.includes('/zalatw-sprawe')) {
				var form = document.querySelector('.information-block__btn');
				if (form != null) {
					form.remove();
				}
			}
		}
		//Map legend correction
		if (pathname.includes('/mapa-parku')) {
			var trail = document.querySelector('label[for="hiking_trail"]');
			var pr_traiId = document.getElementById('pieszy/rowerowy');
			var pn_traiId = document.getElementById('pieszy/narciarski');

			if (trail) {
				trail.textContent = 'Pieszy/Rowerowy';
				var icon =
					'<path d="M6.68212 24.3727C8.48423 24.3727 9.96633 23.0421 10.2358 21.3074H5.94107C5.73897 21.3074 5.53686 21.1895 5.45265 21.0042C5.36844 20.819 5.38528 20.6 5.52002 20.4316L7.96212 17.4169C7.55791 17.2653 7.13686 17.1811 6.68212 17.1811C4.69476 17.1811 3.07791 18.7979 3.07791 20.7853C3.07791 22.7727 4.69476 24.3895 6.68212 24.3895M11.3811 19.6906C11.3811 19.5895 11.4148 19.4885 11.4484 19.4042L11.5158 19.2695L10.219 16.3727L9.59581 17.1474C10.4379 17.8211 11.0442 18.7811 11.2632 19.8758C11.2969 19.8085 11.3305 19.7579 11.3811 19.7074M13.0316 15.9011H11.179L12.1053 17.9727L13.0316 15.9011ZM13.52 14.8232L13.6548 14.5369H12.1726C12.1726 14.6379 12.139 14.739 12.1053 14.8232H13.5369H13.52ZM17.04 15.9011H15.2884L13.9748 18.9158L17.0569 15.9011H17.04ZM18.6569 14.9074C18.5053 13.9306 18.4548 12.2127 18.6063 11.2358L13.9242 8.13688C13.9074 8.38951 11.92 11.5895 11.5326 12.3306H14.7495C14.7495 12.3306 14.8 12.3306 14.8169 12.3306C15.0358 12.2969 15.2716 12.3306 15.5074 12.4148C16.1137 12.6506 16.4505 13.2064 16.2653 13.6779L15.7769 14.8064H18.3874C18.4884 14.8064 18.6063 14.84 18.6905 14.8906M8.95581 17.9727L7.12002 20.2464H10.2863C10.1516 19.32 9.66318 18.5285 8.97265 17.9727M17.7811 20.7853C17.7811 22.7727 19.3979 24.3727 21.3853 24.3727C23.3727 24.3727 24.9895 22.7558 24.9895 20.7853C24.9895 18.8148 23.3727 17.1811 21.3853 17.1811C21.0653 17.1811 20.7453 17.2316 20.4421 17.3158C21.0653 19.1348 21.84 20.4821 21.8569 20.5158L20.9137 21.0548C20.8463 20.9537 20.0884 19.6064 19.4484 17.7537C18.4548 18.3937 17.7811 19.5053 17.7811 20.7853ZM6.73265 16.1032C7.44002 16.1032 8.1137 16.2716 8.72002 16.5579L9.7137 15.3285H9.5116C9.00633 15.3285 8.60212 14.9242 8.60212 14.419C8.60212 14.3011 8.61897 14.2 8.65265 14.099C8.33265 13.8127 8.13054 13.3916 8.13054 12.9369V12.9032C8.13054 12.9032 8.13054 12.7348 8.16423 12.6506V12.6169C8.36633 11.7242 11.2463 6.80635 11.2463 6.80635C11.7348 5.56004 12.5263 5.84635 13.52 6.23372C13.6211 6.2674 13.7221 6.33477 13.8232 6.40214L19.5663 10.0737C19.9369 10.2253 20.1221 10.6632 19.9537 11.0506C19.9032 11.1853 19.819 11.2864 19.7011 11.3537H19.7348C19.5326 12.7348 19.7516 14.9579 20.139 16.3053C20.5432 16.1874 20.9642 16.12 21.4021 16.12C23.979 16.12 26.0842 18.2253 26.0842 20.8021C26.0842 23.379 23.979 25.4842 21.4021 25.4842C18.8253 25.4842 16.72 23.3958 16.72 20.8021C16.72 19.0506 17.6969 17.5179 19.1284 16.7095C19.0274 16.3558 18.9432 16.019 18.859 15.6485C18.8421 15.6821 18.8253 15.699 18.7916 15.7327L14.8169 19.6232C15.1032 19.6906 15.3221 19.8253 15.3221 20.0948C15.3221 20.4653 14.9348 20.7685 14.48 20.7685H13.6548L13.2337 21.1895C13.1326 21.2906 12.9979 21.3411 12.8632 21.3411H11.4148C11.1453 23.6653 9.17475 25.4842 6.76633 25.4842C4.18949 25.4842 2.08423 23.3958 2.08423 20.8021C2.08423 18.2085 4.18949 16.12 6.76633 16.12" fill="white"></path>\n        <path d="M14.0422 5.86319C13.2506 5.86319 12.6106 5.22319 12.6106 4.43161C12.6106 3.64003 13.2506 3.00003 14.0422 3.00003C14.8338 3.00003 15.4738 3.64003 15.4738 4.43161C15.4738 5.22319 14.8338 5.86319 14.0422 5.86319Z" fill="white"></path>';
				trail.previousElementSibling.childNodes[3].innerHTML = icon;
			}
			if (pr_traiId && pn_traiId) {
				pr_traiId.parentElement.remove();
				pn_traiId.parentElement.remove();
			}
		}
	});
})();
