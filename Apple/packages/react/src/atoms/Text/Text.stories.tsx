import React from 'react';
import Text, { TextProps } from './Text'; 
import type { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'UI/atoms/Text',
    component: Text,
    args: {
        children: 'The Text Typography',
    },
    tags: ['autodocs'],
} as Meta<typeof Text>;


const Template = ({ size, children }: TextProps) => (
    <Text size={size}>{ children }</Text>
);

export const Primary: StoryObj<TextProps> = {
    args: {
        size: "xl",
        children: 'The Primary Text',
    },
    render: Template
};

export const Secondary: StoryObj<TextProps> = {
    args: {
        size: "lg",
        children: 'The Secondary Text',
    },
    render: Template
};

export const Base: StoryObj<TextProps> = {
    args: {
        size: "base",
        children: 'The Base Text',
    },
    render: Template
};

export const Small: StoryObj<TextProps> = {
    args: {
        size: "sm",
        children: 'The Smaller Text',
    },
    render: Template
};