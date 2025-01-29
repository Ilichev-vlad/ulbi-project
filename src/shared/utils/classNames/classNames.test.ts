import { classNames } from "./classNames";

describe('classNames', () => {

    test('test with only one param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('test with additional params', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('test with additional params', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(
            classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2'])
        ).toBe(expected);
    });
});