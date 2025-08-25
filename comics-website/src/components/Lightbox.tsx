import React from 'react';
import { useHistory } from 'react-router-dom';

interface LightboxProps {
    comicPanels: string[];
    currentComicIndex: number;
    onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ comicPanels, currentComicIndex, onClose }) => {
    const history = useHistory();

    const handleNext = () => {
        if (currentComicIndex < comicPanels.length - 1) {
            history.push(`/comics/${currentComicIndex + 1}`);
        }
    };

    const handlePrevious = () => {
        if (currentComicIndex > 0) {
            history.push(`/comics/${currentComicIndex - 1}`);
        }
    };

    return (
        <div className="lightbox">
            <button className="close" onClick={onClose}>Close</button>
            <div className="lightbox-content">
                {comicPanels.map((panel, index) => (
                    <img key={index} src={panel} alt={`Comic panel ${index + 1}`} />
                ))}
            </div>
            <button className="arrow left" onClick={handlePrevious} disabled={currentComicIndex === 0}>Previous</button>
            <button className="arrow right" onClick={handleNext} disabled={currentComicIndex === comicPanels.length - 1}>Next</button>
        </div>
    );
};

export default Lightbox;