import styled from "styled-components";

export const All = styled.div`
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
    padding-bottom: 133px;
    .grid{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 24px;
            text-align: center;
            .grid_card{
                border-radius: 12px;
                border: 1.5px solid var(--neutral3);
                width: 307px;
                transition: transform 0.5s ease;
                
                img{
                    width: 306px;
                    height: 250px;
                    object-fit: cover;
                    object-position: center;
                    margin-bottom: 30px;
                    border-radius: 12px 12px 0px 0px;
                }
                h3{
                    color: var(--red);
                    font-size: 24px;
                    font-weight: 700;
                    line-height: 30px;
                    margin-bottom: 15px;
                }
                div{
                    color: var(--neutral7);
                    font-size: 20px;
                    font-weight: 700;
                    line-height: 26px;
                    margin-bottom: 15px;
                }
                p{
                    color: var(--neutral6);
                    font-size: 16px;
                    font-size: 400;
                    line-height: 24px;
                    margin-bottom: 34px;
                }
            }
        }
        .grid_card:hover{
                    transform: scale(1.04);
                    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        }    
`