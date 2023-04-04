import React from 'react';
import Logo from "./logo.jpg"
import { AppBar,Toolbar,styled } from '@mui/material';
//import { height } from '@mui/system';


const Container = styled(AppBar)`
    background : black;
    height :9vh
`


const header = () => {

  //  const logo = 'https://in.images.search.yahoo.com/images/view;_ylt=Awr1TkU8jypk540zWR69HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2E1ZGE2OGIyOTkwNDhjYTdkM2Y1ZmFlMDMxMDM4YWE1BGdwb3MDNzUEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dcodepen%2Blogo%26type%3DE211IN826G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26nost%3D1%26tab%3Dorganic%26ri%3D75&w=250&h=250&imgurl=auchenberg.github.io%2Fpresentations%2Ffullfrontal-our-web-development-workflow-is-completely-broken%2Fassets%2Fimages%2Fcodepen.png&rurl=http%3A%2F%2Fauchenberg.github.io%2Fpresentations%2Ffullfrontal-our-web-development-workflow-is-completely-broken%2F&size=+7.4KB&p=codepen+logo&oid=a5da68b299048ca7d3f5fae031038aa5&fr2=piv-web&fr=mcafee&tt=DevTools+becoming+your+editor.&b=61&ni=21&no=75&ts=&tab=organic&sigr=RljRisPzptic&sigb=xxw49wstnj3p&sigi=1bYOHjTDZGlE&sigt=JoVYQkZPAnW1&.crumb=RAswcKmamA1&fr=mcafee&fr2=piv-web&type=E211IN826G0'
    return (
        <Container position='static'>
            <Toolbar>
                <img  src={Logo} alt="logo"  style={{width : 45}}/>
            </Toolbar>
        </Container>

    )
}

export default header;