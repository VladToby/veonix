import { BaseSlider } from "@/js/base-slider.js";
import { Splide } from "@splidejs/splide";
import sliderData from "@/js/data/data.json";

export class ProjectsSlider extends BaseSlider {
    constructor() {
        super();
        this.slides = sliderData.projects_slides;
        this.totalSlides = this.slides.length;

        this.initElements();
        this.bindEvents();
    }

    initElements() {
        const houseView = document.querySelector('.house-view');
        const floorPlans = document.querySelector('.floor-plans');

        if (!houseView || !floorPlans) {
            console.warn('Required DOM elements not found for ProjectsSlider');
            return;
        }

        const houseFragment = document.createDocumentFragment();
        const houseContainer = document.createElement('div');
        houseContainer.className = 'house-splide splide';
        houseContainer.innerHTML = `
            <div class="splide__track">
                <ul class="splide__list">
                    ${this.slides.map(slide => `
                        <li class="splide__slide">
                            <img src="${slide.image}" alt="Проект дома ${slide.title}" class="house-view__image">
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
        houseFragment.appendChild(houseContainer);
        houseView.appendChild(houseFragment);

        const plansFragment = document.createDocumentFragment();
        const plansContainer = document.createElement('div');
        plansContainer.className = 'plans-splide splide';
        plansContainer.innerHTML = `
            <div class="splide__track">
                <ul class="splide__list">
                    ${this.slides.map(slide => `
                        <li class="splide__slide">
                            <div class="floor-plans__images">
                                <img src="${slide.plans[0]}" alt="План первого этажа проекта ${slide.title}" class="floor-plans__image-1">
                                ${slide.plans[1] ? `<img src="${slide.plans[1]}" alt="План второго этажа проекта ${slide.title}" class="floor-plans__image-2">` : ''}
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
        plansFragment.appendChild(plansContainer);
        floorPlans.appendChild(plansFragment);

        this.elements = {
            projectInfo: document.querySelector('.project-info'),
            prevButton: document.querySelector('.projects-navigation .arrow--prev'),
            nextButton: document.querySelector('.projects-navigation .arrow--next')
        };

        if (this.elements.prevButton) {
            this.elements.prevButton.setAttribute('aria-label', 'Previous project');
            this.elements.prevButton.setAttribute('role', 'button');
            this.elements.prevButton.setAttribute('tabindex', '0');
        }

        if (this.elements.nextButton) {
            this.elements.nextButton.setAttribute('aria-label', 'Next project');
            this.elements.nextButton.setAttribute('role', 'button');
            this.elements.nextButton.setAttribute('tabindex', '0');
        }

        this.initSliders();
    }

    initSliders() {
        const commonOptions = {
            type: 'fade',
            rewind: true,
            arrows: false,
            pagination: false,
            speed: 600,
            drag: false,
            lazyLoad: 'nearby'
        };

        this.houseSplidе = new Splide('.house-splide', commonOptions).mount();
        this.plansSplidе = new Splide('.plans-splide', commonOptions).mount();

        this.houseSplidе.on('moved', (newIndex) => {
            if (this.plansSplidе) {
                this.plansSplidе.go(newIndex);
            }
            this.currentSlide = newIndex;
            this.updateContent(newIndex);
        });

        this.plansSplidе.on('moved', (newIndex) => {
            if (this.houseSplidе) {
                this.houseSplidе.go(newIndex);
            }
            this.currentSlide = newIndex;
            this.updateContent(newIndex);
        });

        this.updateContent(0);
    }

    goToPrevSlide() {
        const newIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        if (this.houseSplidе) {
            this.houseSplidе.go(newIndex);
        }
    }

    goToNextSlide() {
        const newIndex = (this.currentSlide + 1) % this.slides.length;
        if (this.houseSplidе) {
            this.houseSplidе.go(newIndex);
        }
    }

    updateContent(index) {
        this.currentSlide = index;
        const slide = this.slides[index];

        if (!slide || !this.elements.projectInfo) {
            return;
        }

        requestAnimationFrame(() => {
            this.elements.projectInfo.innerHTML = `
                <h3 class="project-info__square">${slide.square}</h3>
                <h3 class="project-info__title">${slide.title}</h3>
                <div class="project-features">
                    ${slide.features.map(feature => `
                        <div class="feature">
                            <span class="feature__number">${feature.number}</span>
                            <span class="feature__text">${feature.text}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        });
    }

    destroy() {
        super.destroy();

        if (this.houseSplidе) {
            this.houseSplidе.destroy();
        }

        if (this.plansSplidе) {
            this.plansSplidе.destroy();
        }
    }
}
