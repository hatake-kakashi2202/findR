import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import ReactReadMoreReadLess from "react-read-more-read-less";
import {Redirect} from 'react-router';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import './posts.css'
<<<<<<< HEAD
import { height } from '@material-ui/system';
=======
>>>>>>> 8c73e9ea2180e86e2265cc96d29d9a75d733e18a

class Listing extends Component {
  render() {
   
      const { posts, akhil } = this.props;
<<<<<<< HEAD
      const path = akhil ? "http://localhost:5000" : "";
=======
      const path = akhil ? "http://localhost:8000" : "";
>>>>>>> 8c73e9ea2180e86e2265cc96d29d9a75d733e18a
      let listingsOnPage = [];
      let result = [];
              {posts.map((t,index) =>(
                console.log(t.photo_1),
               
                listingsOnPage.push(
<<<<<<< HEAD
                <div key={t.index}>
                   <div className="py-5">
                <h2 className="h4 font-italic mb-4">{t.name+'s house'}</h2>
        <div className="row">
          <div className="col-lg-5">
          <Link to={{pathname:'/profile',state:t.name}}>
            <img src={"http://localhost:5000/"+t.photo_1}  alt="Not loaded" className="w-100 mb-4 border border-md border-white shadow-sm" />
            </Link>
          </div>
          <div className="col-lg-7">
            <p className="font-italic text-muted"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ipsum quaerat, itaque sint odit id beatae, vero aliquam numquam placeat officiis fugiat, consequuntur est ut fugit amet illum obcaecati sed.</p>
            <p className="font-italic text-muted"> div Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur iure dolore dolorum eum ex, expedita voluptate est adipisci repudiandae. Minus tenetur ut veritatis non hic beatae velit? Eius, totam, officia?</p>
            <p className="font-italic text-muted">Enim numquam autem, suscipit repellat vero, voluptas adipisci provident ad quidem dolorum minus, architecto. Nostrum deleniti nesciunt consequatur tempora repudiandae quos quas, animi perspiciatis nam consectetur earum adipisci, repellendus laudantium.</p>
          </div>
        </div>
       
      </div>
      
                  
                     
                         
                     
                     
                  </div>
               
=======
                <div key={t.index} className="posts">
                  <div className=" row all" >
                      <div className="col-4 image1">
                          <Link to={{pathname:'/profile',state:t.name}}>
                            <img src={"http://localhost:8000"+t.photo_1}/>
                          </Link>
                      </div>
                      <div className="col-8 text">
                          <div className="text1">
                              <div className="text2">
                                  {t.bedrooms} BHK {t.housetype}
                              </div>
                          </div>
                          <div className="text1">
                              <div className="text2">
                                  {t.address},{t.city},{t.state}
                              </div>
                          </div>
                          <div className="text6">
                              <div className="text3">
                                  <div className="text4">
                                        Build Up Area
                                  </div>
                                  <div className="text5">
                                        {t.sqft}
                                  </div>
                              </div>
                              <div className="text3">
                                  <div className="text4">
                                        Price
                                  </div>
                                  <div className="text5">
                                        ₹ {t.minprice}/month
                                  </div>
                              </div>
                              <div className="text3">
                                  <div className="text4">
                                        Deposit
                                  </div>
                                  <div className="text5">
                                        ₹ {2*t.minprice}
                                  </div>
                              </div>
                          </div>
                          <div className="text7">
                          <ReactReadMoreReadLess
                                charLimit={50}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}
                                readMoreClassName="read-more-less--more"
                                readLessClassName="read-more-less--less"
                                >
                                  {t.description}
                          </ReactReadMoreReadLess>
                          </div>
                      </div>
                  </div>
                </div>
>>>>>>> 8c73e9ea2180e86e2265cc96d29d9a75d733e18a
              )))}
              for (let i = 0; i < posts.length; i += 1) {
              result.push(
                <div>
                    <Container>
                        {listingsOnPage[i]}
                    </Container>
                </div>
              );
          }
          return (
            <div>
              {result}
            </div>
          )
      }
}
export default Listing;
