import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import SearchForm from './components/SearchForm';
import Loader from './components//Loader'

function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');


  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setImages(data.hits);
        setIsLoading(false);

      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">

      <SearchForm searchText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && <h1 className="text-6xl text-center mt-32">Image not found</h1>}

      {isLoading ? <Loader /> : <div className="grid grid-cols-3">
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
        
      </div>}
    </div>
  );
}

export default App;
