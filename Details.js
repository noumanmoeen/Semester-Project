import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button'
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
            {(value) =>
            {
               const {id,company,img,info,price,title,inCart} = value.detailProduct;
               return  (
                    <div className='container py-5'>
                        {/*title */}
                        <div className='row'>
                            <div className='col-10 mx-auto text-center text slanted text blue my-5'>
                                <h1>{title}</h1>
                            </div>
                        </div>
                        {/*end title */}
                        {/*Product Info */}
                   <div className='row'>
                        <div className='col-10 mx-auto col-md-6 my-3  '>
                            <img src={img} className='img-fluid' />
                        </div> 
                        {/*Product text */}
                        <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
               <h3>Model:{title}</h3>
               <h5 className='text-title text-uppercase text-muted mt -3 mb-2'>made by:<span className='text-uppercase'> {company}</span></h5>
               <h5 className='text-blue'>
                   <strong>
                       Price:<span>Rs.</span>
                       {price}
                   </strong>
               </h5>
               <p className='text-capitalize font-weight-bold mt-3 mb-0'>Some info about tyhe phone</p>
               <p p className='text-muted lead'> {info}</p>
               <div>
                   <Link to='/' >
                       <ButtonContainer>
                           Back to producuts
                       </ButtonContainer>
                   </Link>
                   <ButtonContainer 
                   cart
                   disabled={inCart? true:false } 
                   onClick={()=>
                   {
                       value.addToCart(id);
                       value.openModal(id)
                   }}>
                       {inCart? "in Cart" : "add to Cart" }
                   </ButtonContainer>
               </div>
                        </div>
                    </div>
                    </div>
               )
            }}            
            </ProductConsumer>
        )
    }
}
