import { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageModal = ({ images, columns = 'lg:grid-cols-3' }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 27) {
        closeModal();
      } else if (event.keyCode === 37) {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      } else if (event.keyCode === 39) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [images.length]);

  return (
    <>
      <div className={`grid grid-cols-1 ${columns} gap-7`}>
        {images.map((image, index) => (
          <div key={index} className="relative h-[80vh] w-full cursor-pointer" onClick={() => openModal(index)}>
            <Image src={typeof image === 'string' ? image : image.src} layout="fill" objectFit="cover" alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative flex flex-col items-center">
            <div className="relative h-[77vh] w-[92vw]">
              <Image src={typeof images[currentIndex] === 'string' ? images[currentIndex] : images[currentIndex].src} layout="fill" objectFit="contain" alt="Modal Image" />
            </div>
            <div className="p-4 text-center text-white text-shadow">
              {images[currentIndex].title && <h2 className="text-2xl font-semibold mb-2">{images[currentIndex].title}</h2>}
              {images[currentIndex].description && <p>{images[currentIndex].description}</p>}
            </div>
          </div>
          <button className="absolute top-4 right-4 text-white text-2xl" onClick={closeModal}>&times;</button>
        </div>
      )}
    </>
  );
};

export default ImageModal;

/* import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const ImageModal = ({ images, columns = 'lg:grid-cols-3' }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  // ... other functions and useEffects
  const imageRef = useRef(null);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 27) {
        closeModal();
      } else if (event.keyCode === 37) {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      } else if (event.keyCode === 39) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [images.length]);

  useEffect(() => {
    const image = new window.Image();
    image.src = typeof images[currentIndex] === 'string' ? images[currentIndex] : images[currentIndex].src;
    image.onload = function() {
      setImageDimensions({ width: this.width, height: this.height });
    };
  }, [currentIndex, images]);

  return (
    <>
      <div className={`grid grid-cols-1 ${columns} gap-7`}>
        {images.map((image, index) => (
          <div key={index} className="relative h-[80vh] w-full cursor-pointer" onClick={() => openModal(index)}>
            <Image src={typeof image === 'string' ? image : image.src} layout="fill" objectFit="cover" alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative flex flex-col items-center">
            <div className="relative" style={{ width: imageDimensions.width, height: imageDimensions.height }}>
              <Image
                src={
                  typeof images[currentIndex] === 'string'
                    ? images[currentIndex]
                    : images[currentIndex].src
                }
                width={imageDimensions.width}
                height={imageDimensions.height}
                objectFit="contain"
                alt="Modal Image"
              />
            </div>
            <div className="p-4 text-center text-white text-shadow">
              {images[currentIndex].title && <h2 className="text-2xl font-semibold mb-2">{images[currentIndex].title}</h2>}
              {images[currentIndex].description && <p>{images[currentIndex].description}</p>}
            </div>
          </div>
          <button className="absolute top-4 right-4 text-white text-2xl" onClick={closeModal}>&times;</button>
        </div>
      )}
    </>
  );
};

export default ImageModal;
 */