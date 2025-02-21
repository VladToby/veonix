import '@splidejs/splide/css';
import '../styles/styles.scss';
import { MainInfoSlider } from './main-info-slider';
import { ProjectsSlider } from './projects-slider';

let mainSlider = null;
let projectsSlider = null;

/**
 * Инициализация слайдеров
 */
function initSliders() {
    if (document.querySelector('.main-info')) {
        mainSlider = new MainInfoSlider();
    }

    if (document.querySelector('.projects')) {
        projectsSlider = new ProjectsSlider();
    }
}

/**
 * Инициализация прокрутки
 */
function initScrolling() {
    const scrollButton = document.querySelector('.btn--scroll');
    const projectsSection = document.querySelector('.projects');

    if (scrollButton && projectsSection) {
        scrollButton.addEventListener('click', () => {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
}

/**
 * Функция для очистки ресурсов при необходимости
 */
function cleanupSliders() {
    if (mainSlider) {
        mainSlider.destroy();
        mainSlider = null;
    }

    if (projectsSlider) {
        projectsSlider.destroy();
        projectsSlider = null;
    }
}

/**
 * Инициализация при загрузке DOM
 */
document.addEventListener('DOMContentLoaded', () => {
    initSliders();
    initScrolling();
});

/**
 * Очистка ресурсов при выгрузке страницы
 */
window.addEventListener('beforeunload', cleanupSliders);
