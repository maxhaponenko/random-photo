import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'
import { scrollbarDefault } from 'media/styles/scrollbar'
import { boxShadowDefault } from 'media/styles/box-shadow'
import { ReactComponent as CloseIcon } from 'media/icons/cross.svg'
import AddImagePlug from './add-image-plug'
import { deleteImage } from 'store/images.slice'

export default function SelectedImages() {

    const images = useSelector(state => state.images.items);
    const dispatch = useDispatch()

    const onImageDelete = (url) => {
        dispatch(deleteImage(url))
    }

    return (
        <StyledSection>
            {images.map((item, index) => (
                <StyledImage key={`image-${item}`}>
                    <img src={item} alt={`Selected image number ${index + 1}`}></img>
                    <CloseIcon  onClick={() => onImageDelete(item)}/>
                </StyledImage>
            ))}
            {!images.length && <AddImagePlug />}
        </StyledSection>
    )
}

const StyledSection = styled.div`
    width: 100%;
    height: 150px;
    overflow-x: scroll;
    display: flex;
    justify-content: flex-start;
    padding: 10px 20px;
    gap: 15px;

    ${scrollbarDefault}
`
const StyledImage = styled.div`
    position: relative;
    width: auto;
    height: 100%;
    border-radius: 7px;
    overflow: hidden;
    transition: all 150ms ease-in-out;
    flex-shrink: 0;
    
    ${boxShadowDefault}
    
    img {
        height: 100%;
        width: auto;
    }
    svg {
        position: absolute;
        top: 5px;
        right: 5px;
        width: 17px;
        height: 17px;
        opacity: 0;
        transition: all 100ms ease-in-out;
        cursor: pointer;
        &:hover {
            transform: scale(1.05);
        }
        path {
            fill: #F1F1F1;
        }
    }
    &:hover {
        svg {
            opacity: 1;
            path {
                fill: white;
            }
        }
    }
`