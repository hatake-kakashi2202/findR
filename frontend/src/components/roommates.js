import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../bootstrap.min.css'
import { Row, Col, Container } from 'react-bootstrap'
import Roomiebox from '../components/Roomiebox.js'
const roommates = () => {
  const [data, setRoommates] = useState([])

  useEffect(() => {
    const fetchRoommates = async () => {
      const { data } = await axios.get('http://localhost:5000/api/roommates')
      setRoommates(data)
    }
    fetchRoommates()
  }, [])
  return (
    <div class='roomie'>
      <Container>
        <br />
        <br />
        <br />
        <br />
        <h1>Roommates</h1>
        <Row>
          {data.map((roommate) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Roomiebox roommate={roommate} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default roommates
