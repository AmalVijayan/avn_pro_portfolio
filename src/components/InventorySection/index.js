import React from 'react'
import { InventorySectionContainer,
         InventorysWrapper,
         SectionHeading,
         InventoryRow,
} from './InventoryElements'

import InventoryItem from './InventoryItem'
import {inventoryArray} from './data'


const InventorySection = () => {

    return (
        <>
        <InventorySectionContainer id='inventory'>
            <InventorysWrapper>

                <SectionHeading>My Arsenal</SectionHeading>
                <InventoryRow>
                    {inventoryArray.map(item => <InventoryItem imgSrc={item.img} inventoryItem={item.title} />)}
                </InventoryRow>
            </InventorysWrapper>
        </InventorySectionContainer>
        </>
    )
}

export default InventorySection