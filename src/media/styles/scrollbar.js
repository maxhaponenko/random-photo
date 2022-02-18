import { css } from 'styled-components'

export const scrollbarDefault = css`
    scrollbar-width: auto;
    scrollbar-color: #D5D5D5 transparent;
    &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: #D5D5D5;
        transition: all 100ms ease-in-out;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #ADADAD;
    }
`