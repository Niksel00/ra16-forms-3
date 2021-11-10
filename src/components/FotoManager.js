import { useState } from 'react';
import { nanoid } from 'nanoid';
import FotoManagerForm from './FotoManagerForm';
import FotoManagerContainer from './FotoManagerContainer';

export default function FotoManager() {
  const [images, addImages] = useState([]);

  const handleChange = (urls) => {
    const urlsIndex = urls.map((url) => ({ url, id: nanoid() }));
    addImages(prev => [...prev, ...urlsIndex]);
  }

  const handleDelete = (id) => {
    return () => {
      addImages(prev => prev.filter((image) => image.id !== id));
    }
  }

  return (
    <div className="FotoManager">
      <FotoManagerForm onChange={handleChange} />
      <div className="FotoManager__uploaded">
        {images.map((image) =>
          <FotoManagerContainer image={image} onClick={handleDelete} key={image.id} />
        )}
      </div>
    </div>
  );
}