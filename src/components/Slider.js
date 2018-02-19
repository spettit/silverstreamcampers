import React from 'react'
import Link from 'gatsby-link'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
// import spartan from './spartan.jpeg'
// import spartansepia from './spartansepia.jpg'
// import spartanpainting from './spartanpainting.jpg'
import styled from 'styled-components'
import Img from 'gatsby-image'

// const Img = styled.img`
//   height: 400px;
//   width: 100vw;
//   object-fit: cover;
//   margin-left: auto;
//   margin-right: auto;
//   margin-bottom: 0;
//   padding-left: 0;
//
// `

const Div = styled.div`
  padding: 15px;
  background-color: white;

  ${'' /* max-height: 400px; */}


`

class SimpleSlider extends React.Component {

  renderImages() {
    console.log(this.props.sizes[0].sizes)
    return this.props.sizes.map((size) => {
      return (
        <Div key={size.id}><Img sizes={size.sizes} style={{height: '400px'}}/></Div>
      )
    })
  }
  render() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true,
      centerMode: true,
      dots: false,
      centerPadding: '0px',
      // adaptiveHeight: true,
    };
    return (
      <Slider {...settings}>
        {/* <Div><Img sizes={this.props.sizes} /></Div> */}
        {/* <Div><Img src={spartan} /></Div>
        <Div><Img src={spartansepia} /></Div> */}
        {this.renderImages()}
      </Slider>
    );
  }
}


export default SimpleSlider
