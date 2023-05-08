import React from 'react';
import { Spacing } from '@apple/foundation/lib';
import '@apple/scss/lib/Utilities.css';

const Color = ({ hexCode, height = Spacing.lg, width = Spacing.xxl }) => {
    const className = `ds1-width-${width} ds1-height-${height}`;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: className, style: { backgroundColor: hexCode, width, height } })));
};

export { Color as default };
//# sourceMappingURL=Color.js.map
