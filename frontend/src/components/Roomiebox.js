import React from 'react'
import { Link } from 'react-router-dom'
import img from './images/picc5.jpg'
import { Card } from 'react-bootstrap'
const Roomiebox = ({ roommate }) => {
  return (
    <Card className='shadow-sm border-0 my-3 p-3 rounded lg-8 md-6 sm-12'>
      <Link to={`/roommates/${roommate._id}`}>
        <Card.Img src={img} variant='top' className='p-0 w-100' />
      </Link>
      <Card.Body>
        <Link to={`/roommates/${roommate._id}`}>
          <Card.Title as='div'>
          <h5 class="mb-0">{roommate.name}</h5>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <div className='my-3 small text-muted'>
            {roommate.gender},{roommate.roomtown}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Roomiebox
