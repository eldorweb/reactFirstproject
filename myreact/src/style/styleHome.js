import styled from "styled-components";
import headerLogo from "../img/jpg/header_bgimg.png"

export const ContainerNavtop = styled.div`
:root{
    --blue100: #DBEAFE;
    --neutral2:  #F9F9F7;
    --white: #fff;
    --neutral3: #DBDFD0;
    --neutral4: #ADB29E;
    --neutral5: #737865;
    --neutral6: #414536;
    --neutral7: #2C2F24;
    --neutral8: #182226;
    --templateColor: #4D592B;
    --red: #AD343E;
    --logo_title: #474747;
    --svg_color: #F9F9F71F;
    --hover_color: #DBDFD0;
}
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    padding-right: 150px;
    padding-left: 150px;
    width: 100%;
    background: var(--logo_title);

    .nav_top{
    display: flex;
    padding-top: 11px;
    padding-bottom: 11px;
    color: var(--white);
    width: 100%;

    .nav_top_left{
    display: flex;
    align-items: center;
    margin-right: auto;

    .nav_top_left1{
    display: flex;
    margin-right: 25px;
}
.nav_top_left1 img, .nav_top_left2 img{
    margin-right: 8px;
    width: 18px;
}
.nav_top_left2{
    display: flex;
}
.nav_top_left1 p, .nav_top_left2 p{
    color: var(--neutral2);
    font-size: 16px;
    font-weight: 400;
}
}
}
`
export const ContainerNavBottom = styled.div`
:root{
    --blue100: #DBEAFE;
    --neutral2:  #F9F9F7;
    --white: #fff;
    --neutral3: #DBDFD0;
    --neutral4: #ADB29E;
    --neutral5: #737865;
    --neutral6: #414536;
    --neutral7: #2C2F24;
    --neutral8: #182226;
    --templateColor: #4D592B;
    --red: #AD343E;
    --logo_title: #474747;
    --svg_color: #F9F9F71F;
    --hover_color: #DBDFD0;
}
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    padding-right: 150px;
    padding-left: 150px;
    width: 100%;

    .nav_bottom{
    padding-top: 29px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    width: 100%;
}
.logodiv{
    display: flex;
    align-items: center;
    flex: 30%;
    cursor: pointer;
}
.logodiv img{
    width: 56px;
    margin-right: 10px;
}
.logodiv p{
    font-family: "Playfair Display";
    font-size: 42.667px;
    font-style: italic;
    font-weight: 600;
    line-height: 29.333px;
    letter-spacing: -0.4px;
    color: var(--logo_title);
}
.nav_bottom_list{
    display: flex;
    gap: 20px;
    flex: 50%;
}
.nav_bottom_list p{
    color: var(--neutral7);
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    padding: 4px 16px;
    border-radius: 34px;
}
.nav_bottom_list p:hover{
    background-color: var(--hover_color);
    cursor: pointer;
}
.nav_bottom_btn{
    color: var(--neutral8);
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    padding: 12px 24px;
    border-radius: 118px;
    border: 1.5px solid var(--neutral7);
    background-color: transparent;
    cursor: pointer;
}
.nav_bottom_btn:hover{
    border-color: var(--neutral7);
    background-color: var(--neutral7);
    color: var(--white);
}
`

export const ContainerHeader = styled.div`
:root{
    --blue100: #DBEAFE;
    --neutral2:  #F9F9F7;
    --white: #fff;
    --neutral3: #DBDFD0;
    --neutral4: #ADB29E;
    --neutral5: #737865;
    --neutral6: #414536;
    --neutral7: #2C2F24;
    --neutral8: #182226;
    --templateColor: #4D592B;
    --red: #AD343E;
    --logo_title: #474747;
    --svg_color: #F9F9F71F;
    --hover_color: #DBDFD0;
}
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    padding-right: 150px;
    padding-left: 150px;
    width: 100%;
    justify-content: center;
    background-image: url(${headerLogo});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .header{
    flex-direction: column;
    align-items: center;
    padding-top: 200px;
    padding-bottom: 200px;
    display: flex;
}
.header h1{
    color: var(--neutral7);
    text-align: center;
    font-family: "Playfair Display";
    font-size: 100px;
    font-weight: 400;
    line-height: 96px;
    width: 667px;
    margin-bottom: 32px;
}
.header p{
    width: 537px;
    color: var(--neutral7);
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    margin-bottom: 40px;
}
.header_btndiv{
    display: flex;
    gap: 16px;
}
.header_btndiv button{
    padding: 20px 32px;
    border-radius: 118px;
    background-color: transparent;
    border: 1.5px solid var(--neutral7);
    color: var(--neutral8);
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
}
.header_btndiv button:hover{
    border-color: var(--red);
    background-color: var(--red);
    color: var(--white);
}
`

export const ContainerBrowser = styled.div`
    :root{
    --blue100: #DBEAFE;
    --neutral2:  #F9F9F7;
    --white: #fff;
    --neutral3: #DBDFD0;
    --neutral4: #ADB29E;
    --neutral5: #737865;
    --neutral6: #414536;
    --neutral7: #2C2F24;
    --neutral8: #182226;
    --templateColor: #4D592B;
    --red: #AD343E;
    --logo_title: #474747;
    --svg_color: #F9F9F71F;
    --hover_color: #DBDFD0;
}
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    padding-right: 150px;
    padding-left: 150px;
    width: 100%;
    .browse{
        padding-top: 92px;
        padding-bottom: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        text-align: center;
    }
    h2{
        font-family: "Playfair Display";
        color: var(--neutral7);
        font-size: 55px;
        font-weight: 500;
        line-height: 60.5px;
        margin-bottom: 64px;
    }
    .browse_wrapper{
        display: flex;
        gap: 24px;
    }
    .browse_card{
        padding: 40px 32px;
        border-radius: 12px;
        border: 1.5px solid var(--neutral3);
        background-color: var(--white);
    }
    .browse_card img{
        width: 100px;
        margin-bottom: 30px;
    }
    .browse_card div{
        font-family: "DM Sans";
        color: var(--neutral7);
        font-weight: 700;
        font-size: 24px;
        letter-spacing: -0.72px;
        line-height: 30px;
        margin-bottom: 15px;
    }
    .browse_card p{
        font-family: "DM Sans";
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: var(--neutral6);
        line-height: 24px;
        margin-bottom: 30px;
        width: 236px;
    }
    .browse_card a{
        font-family: "DM Sans";
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        color: var(--red);
    }
`

export const ContainerProvide = styled.div`
    :root{
    --blue100: #DBEAFE;
    --neutral2:  #F9F9F7;
    --white: #fff;
    --neutral3: #DBDFD0;
    --neutral4: #ADB29E;
    --neutral5: #737865;
    --neutral6: #414536;
    --neutral7: #2C2F24;
    --neutral8: #182226;
    --templateColor: #4D592B;
    --red: #AD343E;
    --logo_title: #474747;
    --svg_color: #F9F9F71F;
    --hover_color: #DBDFD0;
}
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    padding-right: 150px;
    padding-left: 150px;
    width: 100%;
    padding-top: 120px;
    padding-bottom: 120px;
    background-color: var(--neutral2);
    
    .provide{
        display: flex;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
    }
    .provide_imgwrapper{
        display: flex;
    }
    .provide_imgwrapper img{
        border-radius: 12px;
        width: 599px;
    }
    .visitcard_container{
        margin-top: auto;
    }
    .provide_visitcard{
        position: relative;
        bottom: -50px;
        right: 350px;
        z-index: 1;
        padding: 50px;
        border-radius: 12px;
        background-color: var(--logo_title);
        color: var(--white);

        h3{
        font-family: "DM Sans";
        font-size: 24px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: -0.72px;
        margin-bottom: 45px;
        }

        .visit_tel, .visit_email, .visit_location{
            display: flex;
            gap: 20px;

            img{
                width: 24px;
            }

            p{
                font-family: "DM Sans";
                font-size: 16px;
                font-weight: 400;
            }
        }
        .visit_tel, .visit_email{
            margin-bottom: 25px;
        }
        .visit_location{
            p{
                width: 267px;
            }
        }

    }

    .provide_right{
        margin-left: -250px;

        h2{
            font-family: "Playfair Display";
            font-size: 55px;
            font-weight: 500;
            line-height: 60.5px;
            width: 557px;
            margin-bottom: 24px;
        }

        .provide_right_text1{
            font-family: "DM Sans";
            font-size: 18px;
            font-weight: 500;
            color: var(--neutral7);
            line-height: 28px;   
            margin-bottom: 24px;       
        }
        .provide_right_text2{
            font-family: "DM Sans";
            font-size: 16px;
            font-weight: 400;
            color: var(--neutral6);
            line-height: 24px; 
            margin-bottom: 40px;
        }

        button{
            padding: 20px 32px;
            border-radius: 118px;
            border: 1.5px solid var(--neutral7) ;
            background: transparent;
            font-family: "DM Sans";
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            color: var(--neutral8);
        }
    }
`

export const ContainerEvents = styled.div`
    :root{
    --blue100: #DBEAFE;
    --neutral2:  #F9F9F7;
    --white: #fff;
    --neutral3: #DBDFD0;
    --neutral4: #ADB29E;
    --neutral5: #737865;
    --neutral6: #414536;
    --neutral7: #2C2F24;
    --neutral8: #182226;
    --templateColor: #4D592B;
    --red: #AD343E;
    --logo_title: #474747;
    --svg_color: #F9F9F71F;
    --hover_color: #DBDFD0;
}
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    padding-right: 150px;
    padding-left: 150px;
    width: 100%;

    .events{
        margin-right: auto;
        margin-left: auto;
        padding-top: 120px;
        padding-bottom: 120px;

        h2{
            font-family: "Playfair Display";
            font-size: 55px;
            font-weight: 500;
            line-height: 60.5px;
            color: var(--neutral7);
            margin-bottom: 64px;
        }
        .events_wrapper{
            display: flex;
            align-items: center;
            width: 100%;
            gap: 80px;
        }
        .events_card{
            img{
                border-radius: 12px;
                width: 306px;
                margin-bottom: 30px;
            }
            div{
                font-family: "DM Sans";
                font-size: 24px;
                color: var(--neutral7);
                font-weight: 700;
                line-height: 30px;
                margin-bottom: 10px;
            }
            p{
                font-family: "DM Sans";
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                color: var(--neutral6);
                width: 280px;
            }
        }
    }
`

export const ContainerDelivery = styled.div`
    :root{
    --blue100: #DBEAFE;
    --neutral2:  #F9F9F7;
    --white: #fff;
    --neutral3: #DBDFD0;
    --neutral4: #ADB29E;
    --neutral5: #737865;
    --neutral6: #414536;
    --neutral7: #2C2F24;
    --neutral8: #182226;
    --templateColor: #4D592B;
    --red: #AD343E;
    --logo_title: #474747;
    --svg_color: #F9F9F71F;
    --hover_color: #DBDFD0;
}
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    padding-right: 150px;
    padding-left: 150px;
    width: 100%;
    padding-top: 120px;
    padding-bottom: 120px;
    background-color: var(--neutral2);
    .delivery{
        display: flex;
        align-items: center;
    }

    .delivery_imgwrapper{
        display: flex;
        gap: 24px;
            .delivery_imgcart{
                position: relative;
                bottom: -60px;
            }
    }
    .delivery_textwrapper{
        h2{
            font-family: "Playfair Display";
            font-size: 55px;
            font-weight: 500;
            line-height: 60.5px;
            color: var(--neutral7);
            margin-bottom: 20px;
            width: 461px;
        }
        .delivery_p{
            font-family: "DM Sans";
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            color: var(--neutral6);
            margin-bottom: 52px;
        }
        .delivery_iconcard{
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            img{
                background-color: var(--red);
                border-radius: 50%;
                padding: 7px;
                margin-right: 20px;
            }
            p{
                font-family: "DM Sans";
                font-size: 20px;
                font-weight: 500;
                line-height: 20px;
                color: var(--neutral7);
            }
        }
    }
`

export const ContainerComment = styled.div`
    :root{
    --blue100: #DBEAFE;
    --neutral2:  #F9F9F7;
    --white: #fff;
    --neutral3: #DBDFD0;
    --neutral4: #ADB29E;
    --neutral5: #737865;
    --neutral6: #414536;
    --neutral7: #2C2F24;
    --neutral8: #182226;
    --templateColor: #4D592B;
    --red: #AD343E;
    --logo_title: #474747;
    --svg_color: #F9F9F71F;
    --hover_color: #DBDFD0;
}
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    padding-right: 150px;
    padding-left: 150px;
    width: 100%;
    padding-top: 100px;
    padding-bottom: 135px;
    
    .comment{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h2{
            font-family: "Playfair Display";
            font-size: 55px;
            font-weight: 500;
            color: var(--neutral7);
            margin-bottom: 64px;
        }
        .comment_wrapper{
            display: flex;
            gap: 24px;

            .comment_card{
                padding: 45px 35px;
                border-radius: 12px;
                background-color: var(--neutral2);
                h3{
                    color: var(--red);
                    font-family: "DM Sans";
                    font-size: 24px;
                    font-weight: 700;
                    line-height: 30px;
                    margin-bottom: 24px;
                }
                p{
                    font-family: "DM Sans";
                    font-size: 18px;
                    color: var(--neutral6);
                    font-weight: 400;
                    line-height: 28px;
                    margin-bottom: 64px;
                }
                .comment_card_people{
                    display: flex;
                    align-items: center;
                    img{
                        margin-right: 20px;
                        width: 70px;
                    }
                    div{
                        display: flex;
                        flex-direction: column;
                        
                    }
                }

            }

        }
    }
`