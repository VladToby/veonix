export class BaseSlider {
    constructor() {
        this.currentSlide = 0;
        this.elements = {};
        this.eventHandlers = {};
    }

    /**
     * Initialize the slider
     */
    init() {
        this.createSlides();
        this.initSplide();
        this.bindEvents();
        this.updateArrowStates();
    }

    /**
     * Create slides content - to be implemented by subclasses
     */
    createSlides() {
    }

    /**
     * Initialize Splide slider - to be implemented by subclasses
     */
    initSplide() {
    }

    /**
     * Update navigation arrow states based on current slide
     */
    updateArrowStates() {
        const { prevButton, nextButton } = this.elements;
        const isFirstSlide = this.currentSlide === 0;
        const isLastSlide = this.currentSlide === this.totalSlides - 1;

        if (prevButton) {
            prevButton.style.opacity = isFirstSlide ? '0.5' : '1';
            prevButton.style.pointerEvents = isFirstSlide ? 'none' : 'auto';
            prevButton.setAttribute('aria-disabled', isFirstSlide);
        }

        if (nextButton) {
            nextButton.style.opacity = isLastSlide ? '0.5' : '1';
            nextButton.style.pointerEvents = isLastSlide ? 'none' : 'auto';
            nextButton.setAttribute('aria-disabled', isLastSlide);
        }
    }

    /**
     * Update content based on current slide index - to be implemented by subclasses
     * @param {number} index - Index of the current slide
     */
    updateContent(index) {
    }

    /**
     * Bind event listeners for navigation
     */
    bindEvents() {
        const { prevButton, nextButton } = this.elements;

        if (prevButton) {
            this.eventHandlers.prevClick = () => this.goToPrevSlide();
            prevButton.addEventListener('click', this.eventHandlers.prevClick);
            prevButton.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.goToPrevSlide();
                }
            });
        }

        if (nextButton) {
            this.eventHandlers.nextClick = () => this.goToNextSlide();
            nextButton.addEventListener('click', this.eventHandlers.nextClick);
            nextButton.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.goToNextSlide();
                }
            });
        }
    }

    /**
     * Navigate to the previous slide
     */
    goToPrevSlide() {
    }

    /**
     * Navigate to the next slide
     */
    goToNextSlide() {
    }

    /**
     * Clean up event listeners when slider is destroyed
     */
    destroy() {
        const { prevButton, nextButton } = this.elements;

        if (prevButton && this.eventHandlers.prevClick) {
            prevButton.removeEventListener('click', this.eventHandlers.prevClick);
        }

        if (nextButton && this.eventHandlers.nextClick) {
            nextButton.removeEventListener('click', this.eventHandlers.nextClick);
        }

        if (this.splide) {
            this.splide.destroy();
        }
    }
}
