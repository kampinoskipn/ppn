/* Powrót do kategorii nadrzędnej */
!(function () {
	var list = document.getElementsByClassName('breadcrumb__item'),
		getSection = document.querySelectorAll('section'),
		index = getSection.length - 1;
	if (list.length !== 0 && getSection.length !== 0) {
		var firstElementClass = getSection[index].className;
		if (firstElementClass !== 'banner') {
			var lastElement = getSection[index];
			var number = list.length;
			var crumb = list[number - 2];
			var hLink = crumb.firstElementChild.href;
			var html =
				'<section class="two-columns block-container container "><a id="backBtn"class="btn btn--white information-block__btn back__btn_user" href="'
					.concat(hLink, '">Wr\xF3\u0107 do kategorii: ')
					.concat(crumb.innerText, '</a></section>');
			lastElement.insertAdjacentHTML('afterend', html);
		}
	}
})();
/* Ustawia domyślny banner na nowej stronie + dodaje tło pod przycisk "przewiń dalej" */
!(function () {
	var e = document.querySelector('.banner__image'),
		n = document.querySelector('.banner__btn-scroll'),
		t = '/uploads/files/65e05bf353037792234443.jpg';
	null !== e &&
		('A' === e.firstElementChild.tagName &&
			e.insertAdjacentHTML(
				'afterbegin',
				'<img src=' + t + ' alt="baner" class="banner__image__inner">',
			),
		e.firstElementChild.src.includes(t) ||
			null === n ||
			'/' === n.pathname ||
			((n.style.padding = '20px'),
			(n.style.background = '#073a3f'),
			(n.style.left = '0'),
			(n.style.bottom = '30px')));
})();

/* Usuwa ikonę bilety z mobile */
!(function () {
	var e = document.querySelector('a.menu__button.menu__button--mobile'),
		t = document.location.pathname;
	if (null !== e) {
		var n = e.parentElement;
		t.includes('/sklep')
			? (n.style.gridTemplateColumns = 'repeat(4,1fr)')
			: (n.style.gridTemplateColumns = 'repeat(3,1fr)'),
			e.remove();
	}
})();

/* Usuwa wdowy z tekstu */
(function () {
	var getHeader = document.querySelectorAll('h2.banner__content__text');
	var getSectTwoCols = document.querySelectorAll('.block__text');

	function removeWidows(blocks) {
		blocks.forEach(function (element) {
			var splited = element.innerHTML.trim().replace('  ', ' ');
			splited = splited.split(' ');
			splited = splited.map(function (item) {
				return item.length <= 2 &&
					!item.includes('.') &&
					!item.includes('<')
					? item + '&nbsp;'
					: item;
			});
			var newStr = splited
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
	var button =
		'<div id="toTop"><a class="btn btn--white information-block__btn back__btn_user"  onclick="lenis.scrollTo(\'top\')"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-angle-up fa-w-10 fa-3x"><path fill="white" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" class=""></path></svg></a></div>';
	var getMain = document.querySelector('main');
	if (myButton == null) {
		getMain.insertAdjacentHTML('beforeend', button);
		myButton = document.querySelector('#toTop');
		myButton.style.display = 'none';
		myButton.style.position = 'fixed';
		myButton.style.bottom = '75px';
		myButton.style.right = '10px';
		myButton.style.zIndex = '9999';
		myButton.children[0].children[0].style.width = '20px';
		myButton.children[0].children[0].style.height = '20px';
		myButton.children[0].style.background = '#073A3F';
		myButton.children[0].style.border = '2px solid #FFF';
	}
	var myButton = document.querySelector('#toTop');

	function scrollFunction() {
		if (document.documentElement.scrollTop > 1100) {
			myButton.style.display = 'block';
		} else {
			myButton.style.display = 'none';
		}
	}
	window.onscroll = function () {
		scrollFunction();
	};
})();
