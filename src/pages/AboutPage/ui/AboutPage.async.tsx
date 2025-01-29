import {lazy} from 'react';

export const AboutPageAsync = lazy(async () => {
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    await new Promise(resolve => setTimeout(resolve, 1500));
    return import('./AboutPage');
});
