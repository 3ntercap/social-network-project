import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
    test('in document', () => {
        render(<Button>TEST BTN</Button>);
        expect(screen.getByText('TEST BTN')).toBeInTheDocument();
    });
    test('in document with class', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST BTN</Button>);
        expect(screen.getByText('TEST BTN')).toHaveClass('clear');
        screen.debug();
    });
});
