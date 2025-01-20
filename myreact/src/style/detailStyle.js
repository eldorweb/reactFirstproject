import styled from "styled-components";

export const ContainerDetail = styled.div`
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
    padding-top: 85px;
    padding-bottom: 130px;
    background: var(--neutral2);

    .detail{
        margin-right: auto;
        margin-left: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-right: 260px;
        padding-left: 260px;
        .button-wrap{
            display: flex;
            gap: 30px;
        }

/* CSS */
.button-64 {
    align-items: center;
    background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
    border: 0;
    border-radius: 8px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    box-sizing: border-box;
    color: #FFFFFF;
    display: flex;
    font-family: Phantomsans, sans-serif;
    font-size: 20px;
    justify-content: center;
    line-height: 1em;
    max-width: 100%;
    min-width: 140px;
    padding: 3px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;
    margin-bottom: 30px;
}

.button-64:active,
.button-64:hover {
    outline: 0;
}

.button-64 span {
    background-color: rgb(5, 6, 45);
    padding: 16px 24px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;
}

.button-64:hover span {
    background: none;
}

@media (min-width: 768px) {
    .button-64 {
    font-size: 24px;
    min-width: 196px;
    }
}
        h2{
            font-family: "Playfair Display";
            font-size: 55px;
            font-weight: 500;
            line-height: 60.5px;
            color: var(--neutral7);
            margin-bottom: 62px;
            width: 1030px;
            text-align: center;
        }
        .meal{
            width: 1161px;
            height: 1000px;
            object-fit: cover;
            object-position: center;
            border-radius: 12px 12px 0px 0px;
            margin-bottom: 25px;
            margin-bottom: 48px;
        }
        .wrapper{
            margin-bottom: 48px;
            .subtitle{
                color: var(--neutral7);
                font-size: 24px;
                font-weight: 700;
                margin-bottom: 20px;
            }
            .text{
                font-size: 18px;
                font-weight: 400;
                line-height: 28px;
                color: var(--neutral6);
                margin-bottom: 40px;
            }
            .ul{
                padding-left: 30px;
                margin-bottom: 48px;
                li{
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 28px;
                    color: var(--neutral6);
                }
            }
        }
    }
`