import { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { boxShadowDefault } from 'media/styles/box-shadow'
import { ReactComponent as PlusIcon } from 'media/icons/plus.svg'

const AddImagePlug = ({ onClick, mobileView, innerRef }) => {
    if (mobileView === null) return null
    return (
        <StyledPlug onClick={onClick} mobileView={mobileView} ref={innerRef} >
            <PlusIcon />
            <span>Add an image</span>
        </StyledPlug>
    )
}

AddImagePlug.propTypes = {
    onCLick: PropTypes.func,
    mobileView: PropTypes.oneOfType([
        PropTypes.bool.isRequired,
        PropTypes.oneOf([null]).isRequired,
    ]),
    innerRef: PropTypes.any.isRequired
}

const StyledPlug = styled.div`
    height: 100%;
    width: 270px;
    border-radius: 7px;
    padding: 20px;
    overflow: hidden;
    background-color: #f4f4f459;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #8ddda0;
    flex-shrink: 0;

    ${boxShadowDefault}

    &:hover {
        transform: scale(1.01);
        border-color: #7dc78e;
        cursor: pointer;
        svg {
            transform: scale(1.05) rotate(3deg);
        }
        path {
            fill: #37b038;
        }
    }

    svg {
        margin-right: 12px;
        transition: all 150ms ease-in-out;
        path {
            fill: #74cc75;
            transition: all 150ms ease-in-out;
        }
    }
    span {
        font-size: 14px;
        color: #4bab4c;
        transition: all 150ms ease-in-out;
    }

    ${props => props.mobileView && css`
        transition: none;
        position: fixed;
        padding: 5px;
        width: 60px;
        height: 50px;
        right: -10px;
        top: 150px;
        transform: translate(0, -50%);
        background-color: white;

        @media (max-width: 500px) {
            top: 129px;
        }
        
        span {
            display: none;
        }
        svg {
            margin-right: 10px;
        }
        &:hover {
            transform: translate(-3%, -50%);
        }
    `}

`

export default forwardRef((props, ref) => <AddImagePlug innerRef={ref} {...props} />)