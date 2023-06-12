// import axios from "axios";




const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31471213-f4e1fbc14dde5738e14f2abfa';


 export const fetchQuery = (query, page = 1) => {
     return fetch(
         `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
     .then(r => r.json())
        
        
};




// запит через axios

// export  const fetchQuery = async ({ searchText, page = 1 }) => {
//     const response = await axios.get(BASE_URL, {
//         params: {
//             q: searchText,
//             key: API_KEY,
//             page,
//             image_type: 'photo',
//             orientation: 'horizontal',
//             per_page: 12,

//         }
//     });
//     return response.data.hits;
// };


