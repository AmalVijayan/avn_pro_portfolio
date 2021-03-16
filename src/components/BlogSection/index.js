import React from 'react'
import { BlogSectionContainer,
         BlogsWrapper,
         SectionHeading,
         BlogRow,
         BlogCell,
         BlogInfoWrapper,
         ArticleImgWrapper,
         ArticleImg,
         ArticleTitle,
         ArticleDescription,
         TitleWrapper,
         DescriptionWrapper,
         ArticleLink,
         BtnWrapper, 
         CButton
         } from './BlogElements'

const BlogSection = () => {
    return (
        <>
            <BlogSectionContainer id='services'>

            <BlogsWrapper>

                <SectionHeading>Technical Articles</SectionHeading>

                <BlogRow>

                <ArticleLink href='https://analyticsindiamag.com/a-complete-kickstart-guide-to-mongodb/' target='_blank'> 
                    <BlogCell>
                        <BlogInfoWrapper>
                            <ArticleImgWrapper >
                                <ArticleImg src='https://analyticsindiamag.com/wp-content/uploads/2020/04/Mongo_guide_aim-2048x1536.jpg'/>
                            </ArticleImgWrapper>

                            <TitleWrapper>
                                <ArticleTitle>
                                    A Complete Kickstart Guide To MongoDB
                                </ArticleTitle>
                            </TitleWrapper>

                            <DescriptionWrapper>
                                <ArticleDescription>
                                    MongoDB is an open-source cross-platform document-oriented database system developed and supported by MongoDB Inc and initially released in 2009.
                                </ArticleDescription>
                            </DescriptionWrapper>

                        </BlogInfoWrapper>
                    </BlogCell>
                </ArticleLink>

                <ArticleLink href='https://analyticsindiamag.com/step-by-step-guide-to-implement-multi-class-classification-with-bert-tensorflow/' target='_blank'> 
                    <BlogCell>
                        <BlogInfoWrapper>
                            <ArticleImgWrapper >
                                <ArticleImg src='https://analyticsindiamag.com/wp-content/uploads/2019/11/BERT_Inference_Tutorial.png'/>
                            </ArticleImgWrapper>

                            <TitleWrapper>
                                <ArticleTitle>
                                Multi-Class Classification With BERT & TensorFlow
                                </ArticleTitle>
                            </TitleWrapper>

                            <DescriptionWrapper>
                                <ArticleDescription>
                                BERT is a very popular NLP model from Google known for producing state-of-the-art results in a wide variety of NLP tasks.
                                </ArticleDescription>
                            </DescriptionWrapper>

                        </BlogInfoWrapper>
                    </BlogCell>
                </ArticleLink>
              
                <ArticleLink href='https://analyticsindiamag.com/text-classification-using-simple-transformers/' target='_blank'> 
                    <BlogCell>
                        <BlogInfoWrapper>
                            <ArticleImgWrapper >
                                <ArticleImg src='https://analyticsindiamag.com/wp-content/uploads/2019/12/Transformer-04-scaled.jpg'/>
                            </ArticleImgWrapper>

                            <TitleWrapper>
                                <ArticleTitle>
                                    Text Classification Using Simple Transformers ﻿
                                </ArticleTitle>
                            </TitleWrapper>

                            <DescriptionWrapper>
                                <ArticleDescription>
                                The transformer model introduces an architecture that is solely based on attention mechanism and does not use any Recurrent Networks but yet produces results superior in quality to Seq2Seq models.
                                </ArticleDescription>
                            </DescriptionWrapper>

                        </BlogInfoWrapper>
                    </BlogCell>
                </ArticleLink>              
              
                <ArticleLink href='https://analyticsindiamag.com/an-introductory-guide-to-time-series-forecasting/' target='_blank'> 
                    <BlogCell>
                        <BlogInfoWrapper>
                            <ArticleImgWrapper >
                                <ArticleImg src='https://analyticsindiamag.com/wp-content/uploads/2019/08/time-2160154_1920.jpg'/>
                            </ArticleImgWrapper>

                            <TitleWrapper>
                                <ArticleTitle>
                                Introductory Guide To Time Series Forecasting
                                </ArticleTitle>
                            </TitleWrapper>

                            <DescriptionWrapper>
                                <ArticleDescription>
                                Time Series Analysis and Forecasting is the process of understanding and exploring Time Series data to predict or forecast values for any given time interval. 
                                </ArticleDescription>
                            </DescriptionWrapper>

                        </BlogInfoWrapper>
                    </BlogCell>
                </ArticleLink>              
              
                <ArticleLink href='https://analyticsindiamag.com/parameter-tuning-tensorboard/' target='_blank'> 
                    <BlogCell>
                        <BlogInfoWrapper>
                            <ArticleImgWrapper >
                                <ArticleImg src='https://analyticsindiamag.com/wp-content/uploads/2019/11/bls.jpeg'/>
                            </ArticleImgWrapper>

                            <TitleWrapper>
                                <ArticleTitle>
                                    Hyperparameter Tuning With TensorBoard
                                </ArticleTitle>
                            </TitleWrapper>

                            <DescriptionWrapper>
                                <ArticleDescription>
                                    Visualization helps us understand big data with ease. It helps us identify patterns and get deeper insights or at least make the process easier.
                                </ArticleDescription>
                            </DescriptionWrapper>

                        </BlogInfoWrapper>
                    </BlogCell>
                </ArticleLink>              
              
                <ArticleLink href='https://analyticsindiamag.com/a-hands-on-guide-to-regression-with-fast-ai/' target='_blank'> 
                    <BlogCell>
                        <BlogInfoWrapper>
                            <ArticleImgWrapper >
                                <ArticleImg src='https://analyticsindiamag.com/wp-content/uploads/2019/10/Screen-Shot-2019-10-21-at-6.28.50-PM.png'/>
                            </ArticleImgWrapper>

                            <TitleWrapper>
                                <ArticleTitle>
                                    Regression With Fast.ai
                                </ArticleTitle>
                            </TitleWrapper>

                            <DescriptionWrapper>
                                <ArticleDescription>
                                Fastai is a deep learning library focused on simplifying the implementation of Deep Learning networks and making it accessible.
                                </ArticleDescription>
                            </DescriptionWrapper>

                        </BlogInfoWrapper>
                    </BlogCell>
                </ArticleLink>              
              
                <ArticleLink href='https://analyticsindiamag.com/why-use-docker-in-machine-learning-we-explain-with-use-cases/' target='_blank'> 
                    <BlogCell>
                        <BlogInfoWrapper>
                            <ArticleImgWrapper >
                                <ArticleImg src='https://analyticsindiamag.com/wp-content/uploads/2019/07/docker_article_final.jpg'/>
                            </ArticleImgWrapper>

                            <TitleWrapper>
                                <ArticleTitle>
                                    Why Use Docker In ML?
                                </ArticleTitle>
                            </TitleWrapper>

                            <DescriptionWrapper>
                                <ArticleDescription>
                                Docker is a tool that helps users to exploit operating-system-level virtualisation to develop and deliver software in packages called containers.
                                </ArticleDescription>
                            </DescriptionWrapper>

                        </BlogInfoWrapper>
                    </BlogCell>
                </ArticleLink>

                <ArticleLink href='https://analyticsindiamag.com/docker-playground-for-datascience/' target='_blank'> 
                    <BlogCell>
                        <BlogInfoWrapper>
                            <ArticleImgWrapper >
                                <ArticleImg src='https://analyticsindiamag.com/wp-content/uploads/2019/11/banner.jpg'/>
                            </ArticleImgWrapper>

                            <TitleWrapper>
                                <ArticleTitle>
                                    Docker Playground For Data Science
                                </ArticleTitle>
                            </TitleWrapper>

                            <DescriptionWrapper>
                                <ArticleDescription>
                                    Docker is the most trusted and established tool for containerization and so it comes with a lot of pre-built images for all the major frameworks, software and tools for the industry.
                                </ArticleDescription>
                            </DescriptionWrapper>

                        </BlogInfoWrapper>
                    </BlogCell>
                </ArticleLink>

                <ArticleLink href='https://analyticsindiamag.com/how-to-get-started-with-openais-gpt-2-for-text-generation/' target='_blank'> 
                    <BlogCell>
                        <BlogInfoWrapper>
                            <ArticleImgWrapper >
                                <ArticleImg src='https://analyticsindiamag.com/wp-content/uploads/2019/11/gpt_2_docker_banner.jpg'/>
                            </ArticleImgWrapper>

                            <TitleWrapper>
                                <ArticleTitle>
                                    Get Started With OpenAI’s GPT-2
                                </ArticleTitle>
                            </TitleWrapper>

                            <DescriptionWrapper>
                                <ArticleDescription>
                                OpenAI’s GPT-2 or Generative Pre-Training version 2 is a state-of-the-art language model that can generate text like humans. 
                                </ArticleDescription>
                            </DescriptionWrapper>

                        </BlogInfoWrapper>
                    </BlogCell>
                </ArticleLink>

                <ArticleLink href='https://analyticsindiamag.com/tableau-101-a-hands-on-guide-for-beginners/' target='_blank'> 
                    <BlogCell>
                        <BlogInfoWrapper>
                            <ArticleImgWrapper >
                                <ArticleImg src='https://analyticsindiamag.com/wp-content/uploads/2019/08/Carnabotnet_geovideo_lowres.gif'/>
                            </ArticleImgWrapper>

                            <TitleWrapper>
                                <ArticleTitle>
                                Tableau 101: A Hands-On Guide
                                </ArticleTitle>
                            </TitleWrapper>

                            <DescriptionWrapper>
                                <ArticleDescription>
                                ableau is one of the most popular tools for data visualization. As a platform that allows Data Analysts and Data Scientists to portray data effortlessly.
                                </ArticleDescription>
                            </DescriptionWrapper>

                        </BlogInfoWrapper>
                    </BlogCell>
                </ArticleLink>

                <ArticleLink href='https://analyticsindiamag.com/step-by-step-guide-to-audio-visualization-in-python/' target='_blank'> 
                    <BlogCell>
                        <BlogInfoWrapper>
                            <ArticleImgWrapper >
                                <ArticleImg src='https://analyticsindiamag.com/wp-content/uploads/2019/12/spectrograms-scaled.jpg'/>
                            </ArticleImgWrapper>

                            <TitleWrapper>
                                <ArticleTitle>
                                    Audio Visualization In Python
                                </ArticleTitle>
                            </TitleWrapper>

                            <DescriptionWrapper>
                                <ArticleDescription>
                                    Speech Synthesis is one of the growing research areas with a number of real-world applications and has already entered the common households as a powerhouse for many voice-operated devices including virtual assistants like Alexa, Google Assistant, Cortana and Siri.
                                </ArticleDescription>
                            </DescriptionWrapper>

                        </BlogInfoWrapper>
                    </BlogCell>
                </ArticleLink>
  
                <ArticleLink href='https://analyticsindiamag.com/build-a-machine-learning-app/' target='_blank'> 
                    <BlogCell>
                        <BlogInfoWrapper>
                            <ArticleImgWrapper >
                                <ArticleImg src='https://analyticsindiamag.com/wp-content/uploads/2019/12/AIM_Predict_Resale_Price_APP-scaled.jpg'/>
                            </ArticleImgWrapper>

                            <TitleWrapper>
                                <ArticleTitle>
                                    Deploy A Fastai Model Using Flask
                                </ArticleTitle>
                            </TitleWrapper>

                            <DescriptionWrapper>
                                <ArticleDescription>
                                    simple Fastai model to predict the price of a used car deployed as a service that can be accessed by users through a browser. 
                                </ArticleDescription>
                            </DescriptionWrapper>

                        </BlogInfoWrapper>
                    </BlogCell>
                </ArticleLink>
         
                <ArticleLink href='https://analyticsindiamag.com/explainable-ai-with-what-if-tool/' target='_blank'> 
                    <BlogCell>
                        <BlogInfoWrapper>
                            <ArticleImgWrapper >
                                <ArticleImg src='https://analyticsindiamag.com/wp-content/uploads/2019/11/what-if-tool-07-scaled.jpg'/>
                            </ArticleImgWrapper>

                            <TitleWrapper>
                                <ArticleTitle>
                                    Explainable AI With The What-If Tool
                                </ArticleTitle>
                            </TitleWrapper>

                            <DescriptionWrapper>
                                <ArticleDescription>
                                    Explainable AI or shortly XAI is a domain that deals with maintaining transparency to the decision making capability of complex machine learning models and algorithms.
                                </ArticleDescription>
                            </DescriptionWrapper>

                        </BlogInfoWrapper>
                    </BlogCell>
                </ArticleLink>
              
                <ArticleLink href='https://analyticsindiamag.com/guide-to-cracking-machinehacks-predict-the-news-category-hackathon/' target='_blank'> 
                    <BlogCell>
                        <BlogInfoWrapper>
                            <ArticleImgWrapper >
                                <ArticleImg src='https://analyticsindiamag.com/wp-content/uploads/2019/08/banner.jpg'/>
                            </ArticleImgWrapper>

                            <TitleWrapper>
                                <ArticleTitle>
                                MachineHack’s ‘Predict The News Category Hackathon
                                </ArticleTitle>
                            </TitleWrapper>

                            <DescriptionWrapper>
                                <ArticleDescription>
                                Hands-on NLP with Python to solve MachineHack’s Predict The News Category hackathon.
                                </ArticleDescription>
                            </DescriptionWrapper>

                        </BlogInfoWrapper>
                    </BlogCell>
                </ArticleLink>
              
                <ArticleLink href='https://analyticsindiamag.com/how-to-build-a-generative-adversarial-network-in-8-simple-steps/' target='_blank'> 
                    <BlogCell>
                        <BlogInfoWrapper>
                            <ArticleImgWrapper >
                                <ArticleImg src='https://analyticsindiamag.com/wp-content/uploads/2019/08/radek-grzybowski-eBRTYyjwpRY-unsplash.jpg'/>
                            </ArticleImgWrapper>

                            <TitleWrapper>
                                <ArticleTitle>
                                    Build A Generative Adversarial Network In 8 Simple Steps
                                </ArticleTitle>
                            </TitleWrapper>

                            <DescriptionWrapper>
                                <ArticleDescription>
                                    GAN is an architecture developed by Ian Goodfellow and his colleagues in 2014 which makes use of multiple neural networks that compete against each other to make better predictions.
                                </ArticleDescription>
                            </DescriptionWrapper>

                        </BlogInfoWrapper>
                    </BlogCell>
                </ArticleLink>
    
                </BlogRow>
            </BlogsWrapper>

            <BtnWrapper>
                <p> There are over a 100 technical articles!</p>
                <ArticleLink target="_blank" href="https://analyticsindiamag.com/author/amal-nairanalyticsindiamag-com/">
                    <CButton>
                     Browse all
                    </CButton> 
                </ArticleLink>
            </BtnWrapper>
        </BlogSectionContainer>
        </>
    )
}

export default BlogSection
