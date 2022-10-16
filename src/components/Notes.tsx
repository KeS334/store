import React from 'react';

interface NotesProps{
    text: string
}

const Notes = ({text}: NotesProps) => {
    return (
        <div className="notes">
            <p>{text}</p>
        </div>
    );
};

export default Notes;