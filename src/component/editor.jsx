import React from 'react';
import { useState as UseState} from 'react';
import { Box, styled } from '@mui/system';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from 'react-codemirror2';
// npm i react-codemirror2 --legacy-peer-deps or --force  internally resolve version dependencies
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import '../App.css'

const Container = styled(Box)`
  flex-grow: 1;
  flex-basic:0;
  display: flex;
  flex-direction: column;
  padding:0px 8px 8px;

`

const Heading = styled(Box)`
 background:#1d1e22;
 display: flex;
padding : 5px 12px
`
const Header = styled(Box)`
 background : #060606;
 display: flex;
 color : #AAAEBC;
 justify-content :space-between;
 font-weight : 700;
`

const editor = ({heading,icon,color,value,onchange})=> {
  
  const [open , setOpen] = UseState(true);

    const handlechange = (Editor,data,value)=>{
       onchange(value);
    }

    return (
        <Container style={open ? null : {flexGrow : 0}}>
            <Header>
           <Heading>
            <Box component="span" style={{
                background : color,
                height: 20,
                width: 20,
                display:'flex',
                placeContent:'center',
                borderRadius:5,
                marginRight:5,
                paddingBottom:2,
                color: '#fff',
                }}>{icon}</Box>
           {heading}
           </Heading>
           <CloseFullscreenIcon
           fontSize='small'
           style ={{alignSelf: 'center'}}
              onClick= {()=>setOpen (prevState => !prevState)}
           />
           </Header>
           <ControlledEditor className='controlled-editor'
             value={value}
          onBeforeChange = {handlechange}
            options={{
                theme:'material',
                lineNumbers:true,

            }}
           />
        </Container>
    )
}



export default editor; 