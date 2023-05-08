import React from 'react';
import { Spacing } from '@apple/foundation/lib';
import "@apple/scss/lib/Utilities.css";

interface ColorProps {
    hexCode: string;
    height?: keyof typeof Spacing;
    width?: keyof typeof Spacing;
}

const Color: React.FC<ColorProps> = ({ hexCode, height = Spacing.lg, width = Spacing.xxl }) => {
    const className = `ds1-width-${width} ds1-height-${height}`;

    return (
        <>
            <div className={className} style={{backgroundColor: hexCode, width, height}}></div>
        </> 
    );
};

export default Color;