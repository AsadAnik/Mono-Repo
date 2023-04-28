import React from 'react';

const Color = ({ hexCode, height, width }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: { backgroundColor: hexCode, width, height } })));
};

export { Color as default };
//# sourceMappingURL=Color.js.map
