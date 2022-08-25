import type { ReactElement } from 'react';
import ratingBarsData from '@data/rating.json';
import { RatingBarsItem } from '@components/rating-bars-item/rating-bars-item';

export function RatingBars():ReactElement {
  return (
    <div className="rating-bars">
      {ratingBarsData.map((rating) => {
        const { id, progress, star } = rating;
        return (
          <RatingBarsItem
            key={id}
            progress={progress}
            star={star}
          />
        );
      })}
    </div>
  );
}
