import styled from "styled-components";

export const ContainerLogin = styled.div`
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
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    padding-right: 150px;
    padding-left: 150px;
    flex-direction: column;
    width: 100%;
    .login{
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 75px;
        padding-bottom: 125px;
        h1{
            color: var(--neutral7);
            font-family: "Playfair Display";
            font-size: 100px;
            font-weight: 400;
            margin-bottom: 24px;
        }
        .text{
            font-family: "DM Sans";
            color: var(--neutral6);
            font-size: 18px;
            font-weight: 400;
            margin-bottom: 72px;
            width: 545px;
            text-align: center;
        }
        form{
            padding: 40px;
            border-radius: 16px;
            background: var(--white);
            box-shadow: 0px 2.979px 59.574px 0px rgba(0, 0, 0, 0.08);
            .name_emailDiv{
                display: flex;
                margin-bottom: 24px;
                gap: 24px;
                .nameDiv, .emailDiv{
                    display: flex;
                    flex-direction: column;
                    label{
                    font-size: 16px;
                    font-weight: 700;
                    color: var(--neutral7);
                    margin-bottom: 8px;
                    margin-left: 5px;
                }
                input{
                    width: 350px;
                    padding: 0px 24px;
                    border-radius: 72px;
                    border: 1px solid var(--neutral3);
                    background: var(--white);
                    height: 60px;
                    font-size: 20px;
                    &::placeholder{
                        font-size: 16px;
                        font-weight: 400;
                        color: var(--neutral5);
                        text-transform: capitalize;
                    }
                }
                }
                
            }
            .subject{
                margin-bottom: 24px;
                display: flex;
                flex-direction: column;
                label{
                    font-size: 16px;
                    font-weight: 700;
                    color: var(--neutral7);
                    margin-bottom: 8px;
                    margin-left: 5px;
                }
                input{
                    padding: 0px 24px;
                    border-radius: 72px;
                    border: 1px solid var(--neutral3);
                    background: var(--white);
                    height: 60px;
                    font-size: 20px;
                    &::placeholder{
                        font-size: 16px;
                        font-weight: 400;
                        color: var(--neutral5);
                        &::first-letter{
                            text-transform: uppercase;
                        }
                    }
                }
            }
            .messageDiv{
                display: flex;
                flex-direction: column;
                margin-bottom: 24px;
                label{
                    font-size: 16px;
                    font-weight: 700;
                    color: var(--neutral7);
                    margin-bottom: 8px;
                    margin-left: 5px;
                }
                textarea{
                    padding: 24px;
                    border-radius: 16px;
                    border: 1px solid var(--neutral3);
                    background: var(--white);
                    height: 156px;
                    font-size: 18px;
                    &::placeholder{
                        font-size: 16px;
                        font-weight: 400;
                        color: var(--neutral5);
                        
                    }
                }
            }
            .submit{
                display: flex;
                width: 100%;
                padding: 20px 32px;
                border-radius: 118px;
                background-color: var(--red);
                color: var(--white);
                border: none;
                font-size: 16px;
                font-weight: 700;
                cursor: pointer;
                transition: transform 0.5s ease;
                &:hover{
                    transform: scale(0.98);
                    background-color: var(--neutral6);
                    color: black;
                    font-size: 18px;
                }
            }
            margin-bottom: 83px;
        }
        .callUs{
            display: flex;
            align-items: start;
            justify-content: space-between;
            width: 100%;
            .first{
                h3{
                    font-size: 20px;
                    font-weight: 700;
                    color:var(--neutral7);
                    margin-bottom: 24px;
                }
                p{
                    color: var(--red);
                    font-size: 24px;
                    font-weight: 700;
                }
            }
            .second{
                h3{
                    font-size: 20px;
                    font-weight: 700;
                    color:var(--neutral7);
                    margin-bottom: 24px;
                }
                p{
                    color: var(--neutral7);
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 28px;
                }
            }
            .third{
                h3{
                    font-size: 20px;
                    font-weight: 700;
                    color:var(--neutral7);
                    margin-bottom: 24px;
                }
                p{
                    color: var(--neutral7);
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 28px;
                }
            }
        }
    }
`