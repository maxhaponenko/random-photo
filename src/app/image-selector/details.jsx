import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ReactComponent as ImageIcon } from 'media/icons/image.svg'

export default function ImageDetails({ user }) {

    const { name, portfolio_url, location, total_photos } = user

    const openAuthorProfile = () => window.open(portfolio_url, '_blank')

    return (
        <StyledImageDetails>
            <span className="name" onClick={openAuthorProfile}>{name}</span>
            <span className="location">{location}</span>
            <span className="total-photos"><ImageIcon />{total_photos}</span>
        </StyledImageDetails>
    )
}

ImageDetails.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        portfolio_url: PropTypes.string,
        location: PropTypes.string,
        total_photos: PropTypes.number,
    })
}

const StyledImageDetails = styled.div`
    width: auto;
    display: inline-flex;
    gap: 15px;
    align-items: center;
    line-height: 25px;

    .name {
        font-weight: 500;
        cursor: pointer;
        &:hover {
            color: green;
            text-decoration: underline;
        }
    }
    .location {

    }
    .total-photos {
        svg {
            width: 13px;
            margin-right: 3px;
            margin-bottom: -1px;
            path {
                fill: green;
            }
        }
    }
    
`