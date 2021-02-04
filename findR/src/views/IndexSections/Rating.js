import React from 'react'

export const Rating = ({value}) => {
    return (
        <div className='rating'>
            <span>
            <i style={{color:'#FFD700'}} className={
                value >=1
                 ? 'fas fa-star'
                 : value >=0.5
                 ? 'fas fa-star-half-alt'
                 : 'far fa-star'
                 }
            ></i>
            <i style={{color:'#FFD700'}} className={
                value >=2
                 ? 'fas fa-star'
                 : value >=1.5
                 ? 'fas fa-star-half-alt'
                 : 'far fa-star'
                 }
            ></i>
            <i style={{color:'#FFD700'}}  className={
                value >=3
                 ? 'fas fa-star'
                 : value >=2.5
                 ? 'fas fa-star-half-alt'
                 : 'far fa-star'
                 }
            ></i>
            <i style={{color:'#FFD700'}}  className={
                value >=4
                 ? 'fas fa-star'
                 : value >=3.5
                 ? 'fas fa-star-half-alt'
                 : 'far fa-star'
                 }
            ></i>
            <i style={{color:'#FFD700'}}  className={
                value >=5
                 ? 'fas fa-star'
                 : value >=4.5
                 ? 'fas fa-star-half-alt'
                 : 'far fa-star'
                 }
            ></i>
            </span>
        </div>
    )
}
 export default Rating