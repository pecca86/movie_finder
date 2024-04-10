import { useEffect } from 'react';

export const useKey = (key, callback) => {

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code.toLowerCase() === key.toLowerCase()) {
                callback();
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [key, callback]);
};