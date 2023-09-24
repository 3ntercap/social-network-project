import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Primary: Story = {
    args: {
    },
};

export const Secondary: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
