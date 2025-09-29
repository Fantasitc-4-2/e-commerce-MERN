import React, { useState } from "react";

const StarRating = ({ handleRating, rating }) => {
  const [hover, setHover] = useState(0); // hover effect

  return (
    <div className="flex space-x-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => handleRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          className={`text-2xl transition-colors ${
            (hover || rating) >= star ? "text-yellow-400" : "text-gray-400"
          }`}
        >
          ★
        </button>
      ))}
    </div>
  );
};

export default StarRating;
