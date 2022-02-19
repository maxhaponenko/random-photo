import { useCallback, useLayoutEffect, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const GAP_BETWEEN_ELEMENTS = 15;
const EXTRA_SPACE = 15;
const DESKTOP_PLUG_WIDTH = 270

export function useIsPlugInMobileView(containerRef) {
    
    const [containerWidth, setContainerWidth] = useState(0)
    const [isMobileView, setIsMobileView] = useState(false)

    const computeIsMobileView = useCallback(() => {

        const containerWidth = containerRef.current.offsetWidth
        const contentBiggerThanViewport = (containerWidth + DESKTOP_PLUG_WIDTH + GAP_BETWEEN_ELEMENTS + EXTRA_SPACE) >= window.innerWidth
        const contentSmallerThanViewport = (containerWidth + DESKTOP_PLUG_WIDTH + GAP_BETWEEN_ELEMENTS + EXTRA_SPACE) <= window.innerWidth

        if (contentBiggerThanViewport && !isMobileView) {
            debugger
            setIsMobileView(true)
        } else if (contentSmallerThanViewport && isMobileView) {
            debugger
            setIsMobileView(false)
        }

    }, [isMobileView])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (containerRef.current) {
            const newContainerWidth = containerRef.current.offsetWidth
            if (containerWidth !== newContainerWidth) {
                computeIsMobileView()
            }
        }
    })

    useEffect(() => {
        console.log('triggered')
        window.addEventListener('resize', computeIsMobileView)
        const timer = setTimeout(() => {
            computeIsMobileView()
        }, 1000)
        return () => {
            window.removeEventListener('resize', computeIsMobileView)
            clearTimeout(timer)
        }
    }, [])

    return isMobileView

}

useIsPlugInMobileView.propTypes = {
    containerRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]).isRequired
}