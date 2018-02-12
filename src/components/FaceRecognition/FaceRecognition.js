import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className="center">
            <img src={imageUrl} alt="Face Recognition" />
        </div>
    );
}

export default FaceRecognition;