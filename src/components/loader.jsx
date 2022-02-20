import { SquareLoader } from "react-spinners"; 
import styled from 'styled-components/macro'

export default function Loader() {
    return <StyledLoader>
        <SquareLoader color="#37B038" />
    </StyledLoader>
}

const StyledLoader = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`