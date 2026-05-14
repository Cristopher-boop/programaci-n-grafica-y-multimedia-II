import React, { useState } from 'react';
import './../styles/ContrastChecker.scss';

const ContrastChecker: React.FC = () => {
    const [bgColor, setBgColor] = useState<string>('646cff')
    return (
        <section className="contrast-tool">
            <h3>Prueba Constraste</h3>
            <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
            />
            <div className="preview-box" style={{backgroundColor: bgColor}}>
                <p style={{color: '#000000'}}>Texto Negro</p>
                <p style={{color: '#ffffff'}}>Texto Blanco</p>
            </div>
        </section>
    );
};

export default ContrastChecker;