import PropTypes from 'prop-types';
import s from './Button.module.css'

export const Btn = ({ onClickBtn }) => {
    return (
         
        <button className={s.Button}
            type="button"
            onClick={onClickBtn}>
            Load more
        </button>
   
    )
};

Btn.propTypes = { 
    onClickBtn: PropTypes.func.isRequired,
}