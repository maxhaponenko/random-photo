import { useState } from 'react'
import styled from 'styled-components/macro'; //TODO improve class naming
import { boxShadowDefault } from 'media/styles/box-shadow'

export default function AddImage(props) {

    const [isInitialState, setIsInitialState] = useState(true);

    return (
        <Styled>

            <div className="plug">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" strokeWidth="2px"><path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" /></svg>
                <span>Add an image</span>
            </div>
        </Styled>
    )
}

const Styled = styled.div`
    margin-top: 50px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${boxShadowDefault}

    .plug {
        width: 400px;
        height: 400px;
        border: 1px solid red;
        border-radius: 7px;
        transition: all 150ms ease-in-out;
        background-color: #f4f4f459;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #8ddda0;
        &:hover {
            transform: scale(1.01);
            border-color: #7dc78e;
            cursor: pointer;
            svg {
                transform: scale(1.45) rotate(3deg);
            }
            path {
                fill: #37b038;
            }
        }
        svg {
            margin-right: 20px;
            transform: scale(1.4);
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
    }
`

// Notice about the ".plug" className:
// I allow myself to use such a common and utilitary nested classNames because there are no utilitary & generic classes in this project.
// Styled components unique hash gives me an assurance that this .plug className will have higher specificity.