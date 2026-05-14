import React, { useState } from 'react';

const HueSliderColors: React.FC = () => {
    const [hue, setHue] = useState<number>(180);

    const dynamicColorsObject = {
        base: `hsl(${hue}, 70%, 50%)`,
        complementario: `hsl(${(hue + 180) % 360}, 70%, 50%)`,
        triadaA: `hsl(${(hue + 120) % 360}, 70%, 50%)`,
        triadaB: `hsl(${(hue + 240) % 360}, 70%, 50%)`
    };

    const singleSquareStyle: React.CSSProperties = {
        width: '200px',
        height: '200px',
        margin: '0 auto',
        background: `conic-gradient(
            ${dynamicColorsObject.base} 0deg 90deg,
            ${dynamicColorsObject.complementario} 90deg 180deg,
            ${dynamicColorsObject.triadaA} 180deg 270deg,
            ${dynamicColorsObject.triadaB} 270deg 360deg
        )`,
        transition: 'background 0.1s ease'
    };

    return (
        <section style={{ marginTop: '2rem', padding: '2rem', border: '1px solid #333', borderRadius: '15px', backgroundColor: '#1a1a1a' }}>
            <h3 style={{ color: 'white', marginBottom: '20px' }}>Cuadrado con Colores Hue</h3>
            
            <input
                type="range"
                min="0"
                max="360"
                value={hue}
                onChange={(e) => setHue(Number(e.target.value))}
                style={{ width: '100%', maxWidth: '400px', marginBottom: '2rem', cursor: 'pointer' }}
            />
            
            <div style={singleSquareStyle}></div>
            
        </section>
    );
};

export default HueSliderColors;