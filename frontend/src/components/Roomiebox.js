import React from 'react'
import { Link } from 'react-router-dom'
import img from './images/picc5.jpg'
import { Card } from 'react-bootstrap'
const Roomiebox = ({ roommate }) => {
  return (
<<<<<<< HEAD
    <Card className='my-3 p-3 rounded'>
      <Link to={`/roommates/${roommate._id}`}>
        <Card.Img src={img} variant='top' />
=======
    <Card className='shadow-sm border-0 my-3 p-3 rounded lg-8 md-6 sm-12'>
      <Link to={`/roommates/${roommate._id}`}>
        <Card.Img src={img} variant='top' className='p-0 w-100' />
>>>>>>> 8c73e9ea2180e86e2265cc96d29d9a75d733e18a
      </Link>
      <Card.Body>
        <Link to={`/roommates/${roommate._id}`}>
          <Card.Title as='div'>
<<<<<<< HEAD
            <strong>{roommate.name}</strong>
=======
          <h5 class="mb-0">{roommate.name}</h5>
>>>>>>> 8c73e9ea2180e86e2265cc96d29d9a75d733e18a
          </Card.Title>
        </Link>

        <Card.Text as='div'>
<<<<<<< HEAD
          <div className='my-3'>
=======
          <div className='my-3 small text-muted'>
>>>>>>> 8c73e9ea2180e86e2265cc96d29d9a75d733e18a
            {roommate.gender},{roommate.roomtown}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Roomiebox
