import styled from "styled-components";
import bgImg from '../img/about/about_video.mp4'

const AboutVideoStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-right:auto;
margin-left: auto;
.video{
    padding-top: 100px;
    padding-bottom: 95px;
    margin-right: auto;
    margin-left: auto;
    .bg_video{
        background-image: url(${bgImg});
        position: relative;
        z-index: 100;
        margin-bottom: 100px;
        video{
            width: 100%;
            z-index: -1;
        }
        .play_div{
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            transform: translateY(-50%), translateX(-50%);
            background: linear-gradient(0deg, rgba(44, 47, 36, 0.84) 0%, rgba(44, 47, 36, 0.84) 100%), url(<path-to-image>) lightgray 0px -1337.591px / 100% 350.026% no-repeat;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 84%;
            flex-direction: column;
            .play{
                width: 106px;
                height: 106px;
                margin-bottom: 34px;
                opacity: 1;
            }
            h2{
                opacity: 1;
                color: #fff;
                font-family: "Playfair Display";
                font-size: 55px;
                font-weight: 500;
                width: 596px;
            }
            }
    }
    .video_bottom{
        display: flex;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        width: 75%;
        gap: 87px;
        .card{
            display: flex;
            img{
                width: 48px;
                height: 48px;
                margin-right: 24px;
            }
            .car-wrapper{
                width: 294px;
                h4{
                    font-size: 20px;
                    font-weight: 700;
                    color: #2C2F24;
                    margin-bottom: 16px;
                }
                p{
                    font-size: 16px;
                    font-weight: 400;
                    color: #414536;
                }
            }
        }
    }

}
`

export default AboutVideoStyle