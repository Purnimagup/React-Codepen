import {useContext as UseContext} from 'react';
import{Box,styled} from '@mui/material';
import React from 'react';
import Editor from './editor'; 
//import {useLocalStorage} from './useLocalStorage';
import { DataContext } from '../context/DataProvider';


const Container = styled(Box)`
 display:flex;
 background-color:black;
height:56vh
` 

//const {html,setHtml,css,setCss,js,setJs} = useContext(DataContext);

const code = () => {

   const {html,setHtml,css,setCss,js,setJs} = UseContext(DataContext);

    return (
    <Container>
    <Editor
    heading = "HTML"
    icon="/"
    color="#FF3C41"
    value = {html}
    onchange = {setHtml}
    />
    <Editor
    heading = "CSS"
    icon="*"
    color= "#0EBEFF"
    value = {css}
    onchange = {setCss}
    />
    <Editor
     heading = "JavaScript"
     icon="{}"
     color="#FCD000"
     value = {js}
    onchange = {setJs}
    />
    </Container>
    )
}


export default code;