import { RotatingLines } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import s from './Loader.module.css';

export function Loader () {
    return (
        <div className={s.loader}>
             <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
            
        />
        </div>
       
         
    )
};

Loader.popTypes = {
    visible: PropTypes.bool.isRequired,
};
