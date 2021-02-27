import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Card } from 'semantic-ui-react'

const items = [
  {
    header: 'Today’s Total Order’s Count', meta: '200',
    
    header: 'Current Week Total Order’s Count', meta: '450',
    
  },
  {
    header: 'Today’s Total Order’s Amount', meta: '20000',
    
    header: 'Current Week Total Order’s Amount', meta: '45000',

  },
  {
    header: 'Current Month Total Order’s Count', meta: '400',
    
    header: 'Last Month Total Order’s Count', meta: '200',
    
  },
  {
    header: 'Current Month Total Order’s Amount', meta: '65000',
    
    header: 'Last Month Total Order’s Amount', meta: '45000',
    
  }
]

const TileCard = () => <Card.Group items={items} />


export default TileCard;