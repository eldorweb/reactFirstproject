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