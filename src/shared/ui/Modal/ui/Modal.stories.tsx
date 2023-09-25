import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Text',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
