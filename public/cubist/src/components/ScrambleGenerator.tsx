import { generateScrambles } from '../scripts/scramble.ts';
import '../styles/scrambleGenerator.css';

import { useEffect, useState } from 'react';

interface ScrambleGeneratorProps {
    updateScramble: boolean;
    updateScrambleReseter: () => void;
}

function ScrambleGenerator({ updateScramble, updateScrambleReseter }: ScrambleGeneratorProps) {
    const [scrambles, setScrambles] = useState<string[]>([generateScrambles(3)?.join(" ") || ""]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const generateNewScramble = () => {
        const newScramble = generateScrambles(3) || [];
        setScrambles([...scrambles.slice(0, currentIndex + 1), newScramble.join(" ")]);
        setCurrentIndex(currentIndex + 1);
    };

    const goToPreviousScramble = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const goToNextScramble = () => {
        if (currentIndex < scrambles.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            generateNewScramble();
        }
    };

    useEffect(() => {
        if (updateScramble) {
            generateNewScramble();
            updateScrambleReseter();
        }
    }, [updateScramble]);

    return (
        <div className='container'>
            <button onClick={goToPreviousScramble}><i className='fa-solid fa-caret-left'></i></button>
            <h1>{scrambles[currentIndex]}</h1>
            <button onClick={goToNextScramble}><i className='fa-solid fa-caret-right'></i></button>
        </div>
    );
}

export default ScrambleGenerator;