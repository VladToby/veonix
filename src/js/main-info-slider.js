import { BaseSlider } from "@/js/base-slider.js";
import { Splide } from "@splidejs/splide";
import { slidesData } from "@/js/mock/data"

export class MainInfoSlider extends BaseSlider {
    constructor() {
        super();
        this.slides = slidesData;
        this.totalSlides = this.slides.length;

        this.elements = {
            timeValue: document.querySelector('.time-value'),
            timeDetails: document.querySelector('.time-details'),
            slideCounter: document.querySelector('.slide-counter'),
            previewContainer: document.querySelector('.preview-images .splide__list'),
            prevButton: document.querySelector('.navigation-arrows .arrow--prev'),
            nextButton: document.querySelector('.navigation-arrows .arrow--next')
        };

        if (this.elements.prevButton) {
            this.elements.prevButton.setAttribute('aria-label', 'Previous slide');
            this.elements.prevButton.setAttribute('role', 'button');
            this.elements.prevButton.setAttribute('tabindex', '0');
        }

        if (this.elements.nextButton) {
            this.elements.nextButton.setAttribute('aria-label', 'Next slide');
            this.elements.nextButton.setAttribute('role', 'button');
            this.elements.nextButton.setAttribute('tabindex', '0');
        }

        this.init();
    }

    createSlides() {
        const fragment = document.createDocumentFragment();

        this.slides.forEach(slide => {
            const slideElement = document.createElement('li');
            slideElement.className = 'splide__slide';

            slideElement.innerHTML = slide.images.map(image => `
                <div class="preview-image">
                    <img 
                        data-splide-lazy="${image}"
                        alt="House preview"
                        class="preview-image__img"
                    >
                </div>
            `).join('');
            fragment.appendChild(slideElement);
        });

        this.elements.previewContainer.appendChild(fragment);
    }

    initSplide() {
        const desktopOptions = {
            perPage: 3,
            fixedWidth: 256,
            fixedHeight: 280,
            focus: 'center'
        };

        const tabletOptions = {
            perPage: 2,
            fixedWidth: 220,
            fixedHeight: 240
        };

        const mobileOptions = {
            perPage: 1,
            fixedWidth: 200,
            fixedHeight: 220
        };

        this.splide = new Splide('.preview-images', {
            arrows: false,
            type: 'slide',
            gap: 20,
            pagination: false,
            speed: 600,
            trimSpace: false,
            lazyLoad: 'nearby',
            preloadPages: 2,
            rewind: false,
            breakpoints: {
                1024: tabletOptions,
                768: mobileOptions
            },
            ...desktopOptions,
            classes: {
                arrows: 'splide__arrows navigation-arrows',
                arrow: 'splide__arrow arrow',
                prev: 'splide__arrow--prev arrow--prev',
                next: 'splide__arrow--next arrow--next'
            }
        });

        this.splide.on('moved', (newIndex) => {
            this.currentSlide = newIndex;
            this.updateContent(this.currentSlide);
            this.updateArrowStates();
        });

        this.bindEvents();
        this.updateContent(0);
        this.splide.mount();
    }

    goToPrevSlide() {
        if (this.currentSlide > 0) {
            this.splide.go(this.currentSlide - 1);
        }
    }

    goToNextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.splide.go(this.currentSlide + 1);
        }
    }

    updateContent(newIndex) {
        this.currentSlide = newIndex;
        const slide = this.slides[this.currentSlide];

        requestAnimationFrame(() => {
            this.elements.timeValue.innerHTML = `${slide.time.value} <span>${slide.time.unit}</span>`;
            this.elements.timeDetails.innerHTML = `${slide.time.from}<br>${slide.time.route}`;

            const currentSlideNumber = String(this.currentSlide + 1).padStart(2, '0');
            const totalSlides = String(this.totalSlides).padStart(2, '0');

            this.elements.slideCounter.innerHTML = `
                <span class="slide-counter__current">${currentSlideNumber}</span>
                <span class="slide-counter__separator">/</span>
                <span class="slide-counter__total">${totalSlides}</span>
            `;
        });
    }
}
