import {lazy} from 'react';

export const MainPageAsync = lazy(async () => {
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    await new Promise(resolve => setTimeout(resolve, 1500));
    return import('./MainPage');
});
 