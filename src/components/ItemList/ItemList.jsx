import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

export default function ItemList({autos}) {
  return (
        <div id='ItemList'>
                {autos?.map(autos => <Item  key={autos.id} autos={autos}/>)}
        </div>
  )
}
