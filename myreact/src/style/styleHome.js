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