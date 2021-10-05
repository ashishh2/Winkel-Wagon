import React from 'react';

const Rating = ({ value, text, color }) => {
    const stars = [];

    for (let i = 1; i <= 5; ++i) {
        if (value >= i) {
            stars.push(<i style={{ color }} className='fas fa-star' />);
        } else if (value >= i - 0.5) {
            stars.push(<i style={{ color }} className='fas fa-star-half-alt' />);
        } else {
            stars.push(<i style={{ color }} className='far fa-star' />);
        }
    }

    return (
        <div className='rating'>
            {stars.map((star, i) => (
                <span key={i}>{star}</span>
            ))}
            <span>{text && text}</span>
        </div>
    );
};

Rating.defaultProps = {
    color: '#f8e825',
};

export default Rating;
