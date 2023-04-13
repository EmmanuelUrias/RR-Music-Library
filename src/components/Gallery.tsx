import GalleryItemPropsItem from '../models/GalleryItemPropsItem'
import GalleryItem, { GalleryItemPropsNewDataItem } from './GalleryItem'


interface GalleryProps {
    data: GalleryItemPropsItem[],
}

interface GalleryArrayType {
    newDataItem: GalleryItemPropsNewDataItem,
    dataItem: GalleryItemPropsItem
}

function Gallery(props: GalleryProps){

    const display = props.data.map((item: GalleryItemPropsItem, index: number) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })
    // const handleOnClick = (e, viewState) => {
    //     setView(!viewState)
    //     return 0
    // } 

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
