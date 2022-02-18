import styled, { css } from 'styled-components';

// TODO: Remove useless button styles

export default function Button({ children, ...rest }) {
    return (
        <StyledButton {...rest} >
            {children}
        </StyledButton>
    );
}

const StyledButton = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1;
    min-height: ${props => props.size === 'large' ? '44px' : props.size === 'small' ? '32px' : '36px'};
    padding: 10px 15px;
    transition: all 100ms ease-in-out;
    cursor: pointer;
    

    

    ${props => (props.type === 'primary' || !props.type) && css`
        color: #fff;
        border: 1px solid #0E9655;
        background-color:#0E9655;
        &:hover {
            background: #0a673b;
            border-color: #0a673b;
        }
        i {
            color: white;
        }
    `};
    ${props => (props.type === 'secondary') && css`
        background: #F3FAF6;
        border: 1px solid #C3E6D5;
        border-radius: 5px; 
        color: #0E9655;
        &:hover {
            background: #e9f0ece4;
            border-color: #a3c9b7;
        }
        i {
            color: #0E9655;
        }
    `};
    ${props => (props.type === 'secondary-transparent') && css`
        background-color: transparent;
        border: 1px solid #C3E6D5;
        border-radius: 5px; 
        color: #0E9655;
        &:hover {
            border-color: #a3c9b7;
        }
        i {
            color: #0E9655;
        }
    `};
    ${props => (props.type === 'light') && css`
        background: #FFFFFF;
        border: 1px solid #E7E9F2;
        color: #131A36;
        &:hover {
            opacity: 0.9;
        }
        i {
            color: #0E9655;
        }
    `};
    ${props => props.type === 'text' && css`
        color: #0E9655;
        border: 1px solid transparent;
        background: transparent;
        &:hover {
            opacity: 0.9;
        }
        i {
            color: #0E9655;
        }
    `};
    ${props => props.type === 'success' && css`
        background: #F3FAF6;
        border: 1px solid #C3E5D5;
        color: #131A36;
        &:hover {
            opacity: 0.9;
        }
        i {
            color: #0E9655;
        }
    `};

    ${props => props.type === 'info' && css`
        background: #F3FAF6;
        border: 1px solid #0E9655;
        color: #131A36;
        &:hover {
            opacity: 0.9;
        }
        i {
            color: #0E9655;
        }
    `};

    ${props => props.type === 'successlight' && css`
        background: #FFFFFF;
        border: 1px solid #C3E5D5;
        color: #0E9655;
        &:hover {
            opacity: 0.9;
        }
        i {
            color: #0E9655;
        }
    `};

    ${props => props.type === 'primarylight' && css`
        background: #fff;
        border: 1px solid #C3E5D5;
        color: #131A36;
        &:hover {
            opacity: 0.9;
        }
        i {
            color: #0E9655;
        }
    `};

    ${props => props.type === 'transparent' && css`
        background: #FFFFFF;
        opacity: 0.4;
        border: 1px solid #E7E9F2;
        pointer-events: none;
        color: #131A36;
        i {
            color: #131A36;
        }
    `};
    
    ${props => props.disabled && css`
        background: #EEEEF4;
        border: 1px solid #EEEEF4;
        color: #B3B3C0;
        &:hover {
            background: #EEEEF4;
            border: 1px solid #EEEEF4;
            color: #B3B3C0;
        }
        i {
            color: #B3B3C0;
        }
    `};
`;
