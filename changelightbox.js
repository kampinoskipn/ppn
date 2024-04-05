document.addEventListener('DOMContentLoaded', () => {
	(function () {
		const host = window.location.host;
		const buttonContainer = document.querySelectorAll(
			'.text-with-images__images',
		);
		if (buttonContainer != null) {
			let imgData = {};
			buttonContainer.forEach((bc) => {
				let buttons = bc.querySelectorAll('button.js-fullscreen');
				buttons.forEach((button, i) => {
					buttons.length != 2
						? (adCl = 'text-with-images__images__full-width-button')
						: (adCl = '');
					imgData = {
						lowImage: button.firstElementChild.src.replace(
							'https://' + host,
							'',
						),
						hiImage: button.dataset.image,
						alt: button.dataset.alt,
						i: i + 1,
						cl: adCl,
					};
				let template = `<button class="js-fullscreen gallery-5093 ${imgData.cl}" tabindex="0"
	                data-image="${imgData.hiImage}"
    	            data-description=""
        	        data-alt="${imgData.alt}" data-start="${imgData.i}"
            	    data-close="Zamknij" data-gallery=".gallery-5093">
                	<a href="${imgData.hiImage}" class="glightbox" data-title="${imgData.alt}">
                    <img src="${imgData.lowImage}"
                        alt="${imgData.alt}"
                        class="text-with-images__images__image">
                	</a>
            		</button>`;
				let buttonParent = button.parentElement;
				button.remove();
				buttonParent.insertAdjacentHTML('beforeend', template);
				});
			});
		}
		GLightbox({
			touchNavigation: true,
			loop: true,
			autoplayVideos: true,
		});
	})();
});
