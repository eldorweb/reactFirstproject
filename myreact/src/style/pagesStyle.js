import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ContainerArticle = styled.div`
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
    padding-top: 68px;
    margin-bottom: 133px;
    background-color: var(--neutral2);
    .article{
        margin-right: auto;
        margin-left: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h1{
            font-family: "Playfair Display";
            color: var(--neutral7);
            font-size: 100px;
            font-weight: 400;
            margin-bottom: 24px;
        }
        .subtitle{
            font-size: 18px;
            font-weight: 400;
            color: var(--neutral6);
            line-height: 28px;
            margin-bottom: 72px;
            width: 632px;
            text-align: center;
        }
        .grid{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 32px 24px;
            .link{
                border-radius: 12px;
                border: 1px solid var(--neutral2);
                box-shadow: 0px 2.979px 59.574px 0px rgba(0, 0, 0, 0.08);
                width: 307px;
                transition: transform 0.5s ease;
                img{
                    width: 306px;
                    height: 250px;
                    border-radius: 12px 12px 0px 0px;
                    margin-bottom: 20px;
                    object-fit: cover;
                    object-position: center;
                }
                p{
                    padding-left: 25px;
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--neutral5);
                    margin-bottom: 5px;
                }
                .div{
                    padding-left: 25px;
                    font-size: 20px;
                    font-weight: 500;
                    line-height: 26px;
                    color: var(--neutral7);
                    padding-bottom: 25px;
                    width: 288px;
                }
            }
        }
        .link:hover{
            transform: scale(1.04);
                    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        }
    }

`

export const ArtcileLink = styled(Link)`
text-decoration: none;
color: inherit;
`