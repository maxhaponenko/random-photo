import { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const GAP_BETWEEN_ELEMENTS = 15;
const EXTRA_SPACE = 15;
const DESKTOP_PLUG_WIDTH = 270

export function useIsPlugInMobileView(containerRef) {
    
    const [isMobileView, setIsMobileView] = useState(null)

    const computeIsMobileView = useCallback(() => {

        const containerWidth = containerRef.current.offsetWidth
        
        const contentBiggerThanViewport = (containerWidth + DESKTOP_PLUG_WIDTH + GAP_BETWEEN_ELEMENTS + EXTRA_SPACE) >= window.innerWidth
        const contentSmallerThanViewport = (containerWidth + DESKTOP_PLUG_WIDTH + GAP_BETWEEN_ELEMENTS + EXTRA_SPACE) <= window.innerWidth

        if (contentBiggerThanViewport && !isMobileView) {
            setIsMobileView(true)
        } else if (contentSmallerThanViewport && isMobileView) {
            setIsMobileView(false)
        }

        if (isMobileView === null) {
            setIsMobileView(contentBiggerThanViewport ? true : false)
        }

    }, [isMobileView, containerRef])

    
    useEffect(() => {
        window.addEventListener('resize', computeIsMobileView)
        // need to wait a bit while images will be fetched and rendered in DOM
        setTimeout(() => {
            computeIsMobileView()
        }, 500)
        return () => {
            window.removeEventListener('resize', computeIsMobileView)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return isMobileView

}

useIsPlugInMobileView.propTypes = {
    containerRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]).isRequired
}