import {Link, NavLink} from 'react-router-dom'
import './GalleryNavigation.css'


function GalleryNavigation (galleries) {
    console.log(galleries)
    let mappedgalleries = galleries.map(gallery => {
        <NavLink to={`/${gallery.id}`}>{gallery.name}</NavLink>
    }) 
    return (
        <nav>{mappedgalleries}</nav>
    )
}

export default GalleryNavigation