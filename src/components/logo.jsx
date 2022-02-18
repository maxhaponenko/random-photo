import styled from 'styled-components/macro'

export default function Logo() {
    return <StyledLogo>
        <div></div>
        <span>Random image</span>
    </StyledLogo>
}

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: 7px;

    &:hover { 
        div {
            transform: translate(-4%, 0) rotate(-5deg);
        }
        span {
            color: rgba(0,0,0,0.8);
        }
    }

    div {
        width: 50px;
        height: 50px;
        background-image: url('https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png');
        background-repeat: no-repeat;
        background-size: contain;
        transition: all 150ms ease-in-out;
    }
    span {
        font-size: 19px;
        font-weight: 500;
        transition: all 150ms ease-in-out;
    }
`