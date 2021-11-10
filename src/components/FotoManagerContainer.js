import PropTypes from 'prop-types';

export default function FotoManagerContainer({ image, onClick }) {
  return (
    <div className="FotoManager__container">
      <img className="FotoManager__image" src={image.url} alt="uploaded" />
      <div className="FotoManager__delete" onClick={onClick(image.id)} />
    </div>
  );
}

FotoManagerContainer.propTypes = {
  image: PropTypes.exact({
    url: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
}