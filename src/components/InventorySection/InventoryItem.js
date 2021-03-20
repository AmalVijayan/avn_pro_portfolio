import React from 'react'
import {
    InventoryCell,
    InventoryInfoWrapper,
    InventoryImgWrapper,
    InventoryImg,
    InventoryTitleWrapper,
    InventoryTitle
} from './InventoryElements'

const InventoryItem = ( {imgSrc, inventoryItem } ) => {
    return (
        <InventoryCell>
                    <InventoryInfoWrapper>
                        <InventoryImgWrapper >
                            <InventoryImg src= {imgSrc} />
                    </InventoryImgWrapper>
                    <InventoryTitleWrapper>
                        <InventoryTitle>
                            { inventoryItem }
                        </InventoryTitle>
                    </InventoryTitleWrapper>
                    </InventoryInfoWrapper>
        </InventoryCell>
    )
}

export default InventoryItem
