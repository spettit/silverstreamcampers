import React from 'react'
import Link from 'gatsby-link'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Div = styled.div`
  padding: 15px;
  background-color: white;
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
        {this.renderImages()}
      </Slider>
    );
  }
}

export default SimpleSlider
