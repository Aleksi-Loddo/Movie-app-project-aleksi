import './MovieCard.css';
export const MovieCard = ({ movie }) => {
  return (
      <div className='card-container'>
          <span>{movie.budget}</span>
      </div>
  );
};