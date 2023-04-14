const { Link } = require('react-router-dom');

const Movies = () => {
  return (
    <div>
      {['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5'].map(dog => (
        <Link key={dog} to={`${dog}`}>
          {dog}
        </Link>
      ))}
    </div>
  );
};

export default Movies;
