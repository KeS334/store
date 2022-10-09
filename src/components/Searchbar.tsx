import React from 'react';



interface SearchbarProps {
    onInput: (event: React.ChangeEvent<HTMLInputElement>)=> void
}

const Searchbar = ({onInput}:SearchbarProps) => {
    return (
        <div className="searchbar">
            <div className="searchbar__container">
                <input
                    type="text"
                    placeholder="Start entering the product title"
                    onChange={(event) => onInput(event)}/>
            </div>
        </div>
    );
};

export default Searchbar;
