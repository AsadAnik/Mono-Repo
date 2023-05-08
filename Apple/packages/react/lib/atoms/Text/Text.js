import React from 'react';
import { FontSize } from '@apple/foundation';

const Text = ({ size = FontSize.base, children }) => {
    const className = `ds1-text ds1-text-${size}`;
    return (React.createElement(React.Fragment, null,
        React.createElement("p", { className: className }, children)));
};

export { Text as default };
//# sourceMappingURL=Text.js.map
