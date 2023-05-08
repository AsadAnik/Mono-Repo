import React from 'react';
import Button, { ButtonProps } from './Button'; 
import type { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'UI/atoms/Button',
    component: Button,
    args: {
        children: 'Button',
    },
} as Meta<typeof Button>;


const Template = ({ title, children, onClick }: ButtonProps) => (
    <Button title={title} onClick={onClick}>{ children }</Button>
);

export const Primary: StoryObj<ButtonProps> = {
    args: {
        title: 'Primary Button',
        onClick: () => alert('I am Primary Button'),
    },
    render: Template
};