const grayscale = document.querySelector('#grayscale');
const contrast = document.querySelector('#contrast');
const brightness = document.querySelector('#brightness');
const sepia = document.querySelector('#sepia');
const saturate = document.querySelector('#saturate');
const img = document.querySelector('#photo');

const defaults = {
	grayscale: 0,
	contrast: 100,
	brightness: 100,
	sepia: 0,
	saturate: 100
}


grayscale.addEventListener('input', updateFilterValue);
contrast.addEventListener('input', updateFilterValue);
brightness.addEventListener('input', updateFilterValue);
sepia.addEventListener('input', updateFilterValue);
saturate.addEventListener('input', updateFilterValue);


function updateFilterValue() {
	reset.disabled = false;
	img.style.filter = `
	grayscale(${grayscale.value}%)
	contrast(${contrast.value}%)
	brightness(${brightness.value}%)
	sepia(${sepia.value}%)
	saturate(${saturate.value}%)
	`
}