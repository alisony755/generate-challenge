import { style } from '@vanilla-extract/css';

export const card = style({
    border: '1px solid #ccc',
    borderRadius: '3px',
    padding: '16px',
    margin: '16px',
    maxWidth: '300px',
    textAlign: 'center',
    ':hover': {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
});

export const cardImage = style({
    width: '100%',
    height: 'auto',
    overflow: 'hidden',
    ':hover': {
        transform: 'scale(1.05)',
        transition: 'transform 0.3s ease-in-out',
    },
});