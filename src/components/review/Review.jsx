import Loader from 'components/loader/Loader';
import { Text } from 'components/text/Text.components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchReview from 'services/fetchReview';

const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    uploadReview(movieId);
  }, [movieId]);

  async function uploadReview(movieId) {
    console.log(movieId);
    setIsLoading(true);
    try {
      const data = await fetchReview(movieId);
      console.log(data);
      const reviews = data.results;
      console.log(reviews);
      if (!reviews.length) {
        throw new Error(`We don't have any reviews for this movie.`);
      } else {
        setReviews(reviews);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  console.log(reviews);
  return (
    <div>
      {isLoading && <Loader />}
      {error && <Text>{error} There are not movies</Text>}
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Review;
