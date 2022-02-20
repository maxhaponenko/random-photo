import { useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'
import { scrollbarDefault } from 'media/styles/scrollbar'
import { boxShadowDefault } from 'media/styles/box-shadow'
import { ReactComponent as CloseIcon } from 'media/icons/cross.svg'
import AddImagePlug from './add-image-plug'
import { deleteImage, fetchRandomImage } from 'store/image-selector.slice'
import { useIsPlugInMobileView } from './hooks/use-is-plug-in-mobile-view'

export default function SelectedImages() {

    const imagesContainerRef = useRef(null)
    const plugRef = useRef(null)

    const images = useSelector(state => state.imageSelector.items);
    const candidate = useSelector(state => state.imageSelector.candidate)
    const dispatch = useDispatch()

    const loadImage = useCallback(() => {
        dispatch(fetchRandomImage())
    }, [dispatch])

    const isPlugInMobileView = useIsPlugInMobileView(imagesContainerRef)

    const onImageDelete = (id) => {
        dispatch(deleteImage(id))
    }

    return (
        <StyledSection>
            <div className="images-container" ref={imagesContainerRef}>
                {images.map((item, index) => (
                    <StyledImage key={`image-${index}`}>
                        <img src={item.urls.regular} alt={item.description}></img>
                        <CloseIcon onClick={() => onImageDelete(item.id)} />
                    </StyledImage>
                ))}
            </div>
            {!candidate && <AddImagePlug ref={plugRef} onClick={loadImage} mobileView={isPlugInMobileView} />}
        </StyledSection>
    )
}

const StyledSection = styled.div`
    position: relative;
    width: 100%;
    height: 150px;
    overflow-x: scroll;
    display: flex;
    justify-content: flex-start;
    padding: 10px 20px;
    gap: 15px;
    border-bottom: 1px solid rgba(0,0,0,0.1);

    ${scrollbarDefault}

    @media (max-width: 500px) {
        height: 125px;
    }

    .images-container {
        display: flex;
        gap: 15px;
    }
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