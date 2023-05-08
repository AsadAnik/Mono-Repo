import React from 'react';
import { Spacing } from '@apple/foundation/lib';
import "@apple/scss/lib/Utilities.css";
interface ColorProps {
    hexCode: string;
    height?: keyof typeof Spacing;
    width?: keyof typeof Spacing;
}
declare const Color: React.FC<ColorProps>;
export default Color;
