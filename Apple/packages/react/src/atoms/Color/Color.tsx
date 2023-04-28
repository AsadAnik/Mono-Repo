import React from 'react';

interface ColorProps {
    hexCode: string;
    height: string;
    width: string;
}

const Color: React.FC<ColorProps> = ({ hexCode, height, width }) => {
    return (
        <>
            <div style={{backgroundColor: hexCode, width, height}}></div>
        </>
    );
};

export default Color;