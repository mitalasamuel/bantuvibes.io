const data = [
		{
		id: 0,
		// place: 'Golden Gate Bridge',
		// country: 'California, USA',
		info: 'CXNRVD',
		image:
			'https://mitalasamuel.github.io/bantuvibes.io/assets/My%20project-3.png',
	},

	{
		id: 1,
		// place: 'Hagia Sophia Mosque',
		// country: 'Istanbul, Turkey',
		info: 'RIDYM',
		image:
			'https://mitalasamuel.github.io/bantuvibes.io/assets/My%20project-4.png',
	},
	{
		id: 2,
		// place: 'Eiffel Tower',
		// country: 'Paris, France',
		info: 'KOHEN JAYCEE',
		image:
			'https://mitalasamuel.github.io/bantuvibes.io/assets/My%20project-2.png',
	},
	{
		id: 3,
		// place: 'Taj Mahal',
		// country: 'Agra, India',
		info: "DENESI",
		image:
			'https://mitalasamuel.github.io/bantuvibes.io/assets/My%20project-5%202.png',
	},
];

const imageSlider = document.querySelector('.is__container');
const prevBtn = document.querySelector('.arrow__left');
const nextBtn = document.querySelector('.arrow__right');

let i = 0;
let x = data.length;

const displaySlides = () => {
	imageSlider.innerHTML = `
        <div class="is__container">
            <div class="is__image">
                <img
                    src=${data[i].image}
                    alt=""
                />
            </div>
            <div class="is__content">
                <p>
                ${data[i].info}
                </p>
            </div>
        </div>
    `;
};
window.onload = displaySlides;

nextBtn.addEventListener('click', () => {
	i = (x + i + 1) % x;
	displaySlides();
});

prevBtn.addEventListener('click', () => {
	i = (x + i - 1) % x;
	displaySlides();
});
