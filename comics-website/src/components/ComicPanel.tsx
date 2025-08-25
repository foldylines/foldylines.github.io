import React from 'react';

interface ComicPanelProps {
    imageUrl: string;
    altText?: string;
}

const ComicPanel: React.FC<ComicPanelProps> = ({ imageUrl, altText }) => {
    return (
        <div className="comic-panel">
            <img src={imageUrl} alt={altText || 'Comic Panel'} />
        </div>
    );
};

export default ComicPanel;