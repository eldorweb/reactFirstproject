import styled from 'styled-components'

export const ContainerOrder =styled.div`
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
    
    .order{
        margin-right: auto;
        margin-left: auto;
        display: flex;
        align-items: center;
        .text_part{
            margin-right: 122px;
            h2{
                width: 346px;
                font-family: "Playfair Display";
                font-size: 55px;
                font-weight: 500;
                color: var(--neutral7);
                margin-bottom: 20px;
            }
            p{
                width: 346px;
                font-size: 16px;
                font-weight: 400;
                color: var(--neutral6);
            }
        }
        .svg_part{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 40px 24px;
            margin-bottom: 120px;
            img{
                
            }
            .a, .s, .d{
                width: 290px;
                height: 90px;
                border-radius: 12px;
                border: 1px solid var(--neutral2);
                box-shadow: 0px 2.979px 59.574px 0px rgba(0, 0, 0, 0.08);
                padding: 10px 30px;
                position: relative;
                left: 30px;
            }
        }
    }
`
