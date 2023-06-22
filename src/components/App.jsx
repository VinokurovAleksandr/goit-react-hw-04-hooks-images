
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { useEffect, useState } from "react";

import s from './app.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import  {fetchQuery}  from './Api/Api';
import  {ImageGallery}  from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Btn } from './Button/Button';
import {Modal} from './Modal/Modal';


export function App() { 
  
 
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
       if ( !query ) {
      return;
    }
      setLoading(true);

    fetchQuery(query, page)
      .then(({ hits }) => {
        if (hits.length > 0) {
          return (
            setImages(prevImages => [...prevImages, ...hits])
          )} else {toast.error(`По запиту ${query} ми нічого не знайшли.`);}
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false))
  }, [page, query]);



  const handleFormSubmit = query => {
    setQuery(query)
    setPages(1)
    setImages([])
  };

    const  handleClickBtn = () => {
      setPages(prevPage => prevPage +1)

  };

  const toggleModal = () => {
     setShowModal(!showModal)
  };

    
    return (
      
      <div className={s.App}>
        
           <Searchbar onSubmit={handleFormSubmit} />
          {error && <h1>{error.message }</h1>}
        {loading && <Loader visible={true} />}
        
        <>
        
          <ImageGallery
            imgClick={setShowModal}
            query={query}
            images={images} 
          />
           
          {images.length > 0 && <Btn onClickBtn={handleClickBtn} />}
          {showModal &&
            (<Modal
            onClose={toggleModal}
            showModal={showModal}>
            </Modal>)}
          </>
          
          <ToastContainer
            autoClose = {3000}
            theme= {'dark'} 
          />
           
          
          </div>

  )
  
};


