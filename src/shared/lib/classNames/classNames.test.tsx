import { classNames } from './classNames';

describe('classNames', () => {
    test('with one class', () => {
        expect(classNames('testClass')).toBe('testClass');
    });

    test('with additional classes', () => {
        const expected = 'class1 class2 class3 class4';
        expect(classNames('class1', {}, ['class2', 'class3', 'class4'])).toBe(expected);
    });

    test('with additional classes and mods', () => {
        const expected = 'class1 class2 class3 class4 collapsed hovered';
        expect(classNames('class1', { collapsed: true, hovered: true }, ['class2', 'class3', 'class4'])).toBe(expected);
    });

    test('with additional classes and mods where some mod is false', () => {
        const expected = 'class1 class2 class3 class4 collapsed';
        expect(classNames('class1', { collapsed: true, hovered: false }, ['class2', 'class3', 'class4'])).toBe(expected);
    });
});
