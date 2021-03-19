import React from 'react'
import { ServiceSectionContainer,
         ServicesWrapper,
         SectionHeading,
         ServiceRow,
         ServiceCell,
         ServiceInfoWrapper,
         ServiceImgWrapper,
         ServiceImg,
         ServiceTitle,
         ServiceDescription
} from './ServiceElements'

const Services = () => {
    return (
        <>
        <ServiceSectionContainer id='services'>
            <ServicesWrapper>

                <SectionHeading>Services</SectionHeading>
                <ServiceRow>

                  <ServiceCell>
                    <ServiceInfoWrapper>
                        <ServiceImgWrapper >
                            <ServiceImg src={require('../../images/development.svg').default} />
                        </ServiceImgWrapper>

                        <ServiceTitle>
                            Web Developement
                        </ServiceTitle>

                        <ServiceDescription>
                            Writes clean and secure REST API's in Python using Django backend. Frontend developement using HTML,CSS, JS and React.
                        </ServiceDescription>

                    </ServiceInfoWrapper>
                  </ServiceCell>

                  <ServiceCell>
                    <ServiceInfoWrapper>
                        <ServiceImgWrapper >
                            <ServiceImg src={require('../../images/data-science.svg').default} />
                        </ServiceImgWrapper>

                        <ServiceTitle>
                            Data Science & Machine Learning
                        </ServiceTitle>

                        <ServiceDescription>
                            Scrapes, cleans, processes and visualizes datasets and creates ML predictive models. Hands on experience with various ML frameworks and libraries in Python. 
                        </ServiceDescription>

                    </ServiceInfoWrapper>
                  </ServiceCell>

                  <ServiceCell>
                    <ServiceInfoWrapper>
                        <ServiceImgWrapper >
                            <ServiceImg src={require('../../images/cloud.svg').default} />
                        </ServiceImgWrapper>

                        <ServiceTitle>
                            Server Management
                        </ServiceTitle>

                        <ServiceDescription>
                            Creates, scales, and manages cloud infrastructure on AWS. Also familiar with Google Cloud services and APIs.
                        </ServiceDescription>

                    </ServiceInfoWrapper>
                  </ServiceCell>

                  <ServiceCell>
                    <ServiceInfoWrapper>
                        <ServiceImgWrapper >
                            <ServiceImg src={require('../../images/version-control.svg').default} />
                        </ServiceImgWrapper>

                        <ServiceTitle>
                            Version Control
                        </ServiceTitle>

                        <ServiceDescription>
                            Writes and maintains clean code repositories in GitHub. Expertise in using Git CLI and services. Also familiar with Tortoise SVN.
                        </ServiceDescription>

                    </ServiceInfoWrapper>
                  </ServiceCell>

                  <ServiceCell>
                    <ServiceInfoWrapper>
                        <ServiceImgWrapper >
                            <ServiceImg src={require('../../images/container.svg').default} />
                        </ServiceImgWrapper>

                        <ServiceTitle>
                            Containerizing Applications
                        </ServiceTitle>

                        <ServiceDescription>
                            Containerizes web applications using docker for ease of deployment. Hands-on experience in building docker images and serving applications in containers.
                        </ServiceDescription>

                    </ServiceInfoWrapper>
                  </ServiceCell>

                  <ServiceCell>
                    <ServiceInfoWrapper>
                        <ServiceImgWrapper >
                            <ServiceImg src={require('../../images/app-deploy.svg').default} />
                        </ServiceImgWrapper>

                        <ServiceTitle>
                            Application Deployment
                        </ServiceTitle>

                        <ServiceDescription>
                            Deploys various types of applications using cloud infrastructures and AWS services like S3, Elastic Beanstalk, Elastic Container Service , Elastic Compute .,etc.
                        </ServiceDescription> 

                    </ServiceInfoWrapper>
                  </ServiceCell>

               

                </ServiceRow>
            </ServicesWrapper>
        </ServiceSectionContainer>
        </>
    )
}

export default Services