
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { Component } from "react";

import s from './app.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import  {fetchQuery}  from './Api/Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Btn } from './Button/Button';
import {Modal} from './Modal/Modal';

export class App extends Component {

  state = {
    images: [],
    query: '',
    page: 1,
    loading: false,
    error: null,
    // status: 'idle',
    showModal: false,
  }

  componentDidUpdate(_, prevState) {

    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) { 
          
          this.setState({ loading: true, });
      // this.setState({ status: 'pending' });
          
      fetchQuery(query, page)
        // .then(data => this.setState(prevState => ({
        //   images: [...prevState.images, ...data.hits],
            
        // })))
        .then(({ hits }) => {
          const images = hits.map(({ id, webformatURL, largeImageURL, tags }) => {
            return { id, webformatURL, largeImageURL, tags };
          });
          if (images.length > 0) {
            this.setState(prevState => {
              return {
                images: [...prevState.images, ...images],
              };
            });
          } else {
            toast.error(`По запиту ${query} ми нічого не знайшли.`);
          }
        })

       .catch(error => this.setState({error }))
        .finally(() => this.setState({ loading: false })) 
            
    }
  };
  

  handleFormSubmit = query => {
    this.setState({ query, page: 1, images: [] })
  };

    handleClickBtn = () => {
    this.setState(({page}) => ({ page: page + 1 }))
  };

   toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
  };
  
    onClickImgGallery = showModal => {
        this.setState({ showModal });
  };
  
  

  render() {

    const { images, query, loading, error, showModal } = this.state;
      
  
    return (
      
      <div className={s.App}>
        
           <Searchbar onSubmit={this.handleFormSubmit} />
          {error && <h1>{error.message }</h1>}
        {loading && <Loader visible={true} />}
        
        <>
        
          <ImageGallery
            imgClick={this.onClickImgGallery}
            query={query}
            images={images} 
          />
           
          {images.length > 0 && <Btn onClickBtn={this.handleClickBtn} />}
          {showModal &&
            (<Modal
            onClose={this.toggleModal}
            showModal={showModal}>
            </Modal>)}
          </>
          
          <ToastContainer
            autoClose = {3000}
            theme= {'dark'} 
          />
           
          
          </div>

    )
  }
};


