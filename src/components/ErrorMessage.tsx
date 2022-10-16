import React from 'react';

interface ErrorMessageProps{
    error: string
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
    return (
        <div className="error">
            <p>{error}</p>
        </div>
    );
};

export default ErrorMessage;