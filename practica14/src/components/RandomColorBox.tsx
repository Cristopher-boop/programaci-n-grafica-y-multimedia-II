import React, { useState, useEffect } from 'react';

const RandomColorBox: React.FC = () => {
    const [colorData, setColorData] = useState({ colorValue: '#ffffff' });

    const generateRandomColor = () => {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setColorData({ colorValue: generateRandomColor() });
        }, 2000);

        return () => clearInterval(intervalId);
    }, []); 

    return (
        <section style={{ marginTop: '2rem', padding: '2rem', border: '1px solid #333', borderRadius: '15px', backgroundColor: '#1a1a1a' }}>
            <h3 style={{ color: 'white', marginBottom: '20px' }}>Color Aleatorio cada 2 Segunditos</h3>
            
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div 
                    style={{
                        backgroundColor: colorData.colorValue,
                        width: '150px',
                        height: '150px',
                        borderRadius: '16px',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                        transition: 'background-color 0.5s ease' 
                    }}
                ></div>
                
                <span style={{ color: 'white', fontFamily: 'monospace', fontSize: '1.2rem' }}>
                    {colorData.colorValue.toUpperCase()}
                </span>
            </div>
        </section>
    );
};

export default RandomColorBox;