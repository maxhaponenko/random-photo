import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'
import { scrollbarDefault } from 'media/styles/scrollbar'
import { boxShadowDefault } from 'media/styles/box-shadow'
import { ReactComponent as CloseIcon } from 'media/icons/cross.svg'
import AddImagePlug from './add-image-plug'

export default function SelectedImages() {

    const images = useSelector(state => [
        'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
        'https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY='
    ]);

    return (
        <StyledSection>
            {images.map((item, index) => (
                <StyledImage key={`image-${item}`}>
                    <img src={item} alt={`Selected image number ${index + 1}`}></img>
                    <CloseIcon />
                </StyledImage>
            ))}
            <AddImagePlug />
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
        transform: scale(1.01);
        svg {
            opacity: 1;
            path {
                fill: white;
            }
        }
    }
`