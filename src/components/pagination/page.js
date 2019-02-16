import React from 'react'

const Dots = () => <span>...</span>

const Page = ({ page, pageLink, handleClick }) => {
    const Component = page === '...' ? Dots : 'a'  
    return (
        <Component href={pageLink} onClick={handleClick}>
            {page}
        </Component>
    )
}

export default Page