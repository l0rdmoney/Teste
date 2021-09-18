import Glide from '@glidejs/glide';

new Glide(document.querySelector('.glide'), {
	type: 'sliders',
	startAt: 0,
	perView: 2,
	focusAt: 'center',
	keyboard: true,
	gap: 20
}).mount();
