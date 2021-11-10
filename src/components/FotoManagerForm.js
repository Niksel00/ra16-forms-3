import PropTypes from 'prop-types';

export default function FotoManagerForm({ onChange }) {
  const fileToDataUrl = file => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.addEventListener('load', evt => {
        resolve(evt.currentTarget.result);
      });
      fileReader.addEventListener('error', evt => {
        reject(new Error(evt.currentTarget.error));
      });
      fileReader.readAsDataURL(file);
    });
  }

  const handleChange = async (evt) => {
    const files = [...evt.target.files];
    const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
    onChange(urls);
  }

  return (
    <div className="FotoManager__Form">
      <input type="file"
        className="FotoManager__input"
        onChange={handleChange}
        accept="image/*"
        multiple
      />
      <div className="FotoManager__click">Click to select!</div>
    </div>
  );
}

FotoManagerForm.propTypes = {
  onChange: PropTypes.func.isRequired,
}