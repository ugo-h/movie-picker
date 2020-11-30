import React from 'react';
import './Genres.css';

const options = ({options, onChange, filter}) => {
    return (
        <select onChange={onChange} className="Genres-list">
            <option value="0" data-set>Любой</option>
            {options.map((option, index) => <option key={index} value={option.id} className="Genres-list__item">{`${option[filter]} `}</option>)}
        </select>
    )
}

export default options;