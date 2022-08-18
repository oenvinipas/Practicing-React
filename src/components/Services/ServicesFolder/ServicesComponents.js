import React from 'react';
import {
    ServicesContainer,
    ServicesWrapper,
    ServicesImage,
    ServicesInformation,
    ServicesH1,
    ServicesDescription,
    ServicesBtn
} from './ServicesElements';

const ServicesComponents = ({ img, alt, title, description }) => {
  return (
    <ServicesContainer>
        <ServicesWrapper>
            <ServicesImage src={img} alt={alt}></ServicesImage>
            <ServicesInformation>
                <ServicesH1>{title}</ServicesH1>
                <ServicesDescription>{description}</ServicesDescription>
                <ServicesBtn>Learn More</ServicesBtn>
            </ServicesInformation>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default ServicesComponents