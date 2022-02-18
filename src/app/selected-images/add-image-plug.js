import styled from 'styled-components'
import { boxShadowDefault } from 'media/styles/box-shadow'
import { ReactComponent as PlusIcon } from 'media/icons/plus.svg'

const AddImagePlug = ({ onAddImage }) => {


    return (
        <StyledPlug onClick={onAddImage}>
            <PlusIcon />
            <span>Add an image</span>
        </StyledPlug>
    )
}

const StyledPlug = styled.div`
    height: 100%;
    width: 270px;
    border-radius: 7px;
    padding: 20px;
    overflow: hidden;
    transition: all 150ms ease-in-out;
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
        width: 30px;
        height: 30px;
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
`

export default AddImagePlug