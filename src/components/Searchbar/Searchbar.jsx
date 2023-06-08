// import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import style from './Searchbar.module.css';
import { Component } from 'react';







export class Searchbar extends Component {

  state = {
    SearchQuery: '',
  };

  handleQueryChange = e => {
    this.setState({ SearchQuery: e.currentTarget.value.toLowerCase() })
  };

  handleSubmit = e => {
    e.preventDefault();
   
    if (this.state.SearchQuery.trim() === '') {
    return toast.error('Query is not correct', {
      });
      
    }

    this.props.onSubmit(this.state.SearchQuery)

    this.setState({ SearchQuery: '' });
  }

  render() { 
    return (
    <header
    className={style.Searchbar}>
    <form
      onSubmit={this.handleSubmit}
      className={style.SearchForm}>
      <button
        type="submit"
        className={style.button}>
        <ImSearch />
        <span
        className={style.button_label}>Search</span>
    </button>

    <input
      className={style.input}
      type="text"
      autoComplete="off"
      autoFocus
        placeholder="Search images and photos"
        onChange={this.handleQueryChange}
        // value={SearchQuery}
    />
    </form>
  </header> 
  )
  }
}

  


  // hendleChange = event => {
  //   this.setState({ value: event.currentTarget.value.toLowerCase() })
  // };





// export class Searchbar extends Component {
//     state = {
//     value: '',
   

//   };

//   hendleChange = event => {
//     this.setState({ value: event.currentTarget.value.toLowerCase() })
//   };

//   hendleSubmit = e => {
//     e.preventDefault();

//     if (this.state.value.trim() === '') {
//       toast.error("Введіть пошуковий запит");
//       return;
//     }

//     this.props.onSubmit(this.state.value);

//     this.setState({ value: '' })
//   };

   
  
//   render() { 
// return (
//   <header
//     className={style.Searchbar}>
//     <form
//       onSubmit={this.hendleSubmit}
//       className={style.SearchForm}>
//       <button
//         type="submit"
//         className={style.button}>
//         <ImSearch />
//         <span
//         className={style.button_label}>Search</span>
//     </button>

//     <input
//       className={style.input}
//       type="text"
//       autoComplete="off"
//       autoFocus
//         placeholder="Search images and photos"
//         onChange={this.hendleChange}
//         value={this.state.value}
//     />
//     </form>
//   </header> 
//     )
//   }
// };