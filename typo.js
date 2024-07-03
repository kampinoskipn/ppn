document.addEventListener('DOMContentLoaded', () => {
	(() => {
		const getHeader = document.querySelectorAll('h2.banner__content__text');
		const getSectTwoCols = document.querySelectorAll('.block__text');

		const formatTypo = (blocks, widows) => {
			blocks.forEach((element) => {
				if (!element.innerHTML.includes('<table')) {
					let splited = element.innerHTML
						.trim()
						.replace(/&nbsp;|\s{2,}|<br><br>|<\/div>/g, (match) => {
							switch (match) {
								case '&nbsp;':
									return '';
								case /\s{2,}/g:
									return ' ';
								case '<br><br>':
									return ' <br><br>';
								case '<br>':
									return ' <br>';
								case '</div>':
									return ' </div>';
								default:
									return ' ';
							}
						})
						.split(' ');

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
				}
			});
		};
		if (getHeader !== null) {
			formatTypo(getHeader, false);
		}
		if (getSectTwoCols !== null) {
			formatTypo(getSectTwoCols, true);
		}
	})();
});
