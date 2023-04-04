import React, { useState as UseState,useEffect as UseEffect  } from 'react';
import { Box, styled } from '@mui/system';
import { useContext as UseContext } from 'react';
import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
 height:41vh
`

const result = () => {

    const [src,SetSrc] = UseState('');

    const {html,css,js} = UseContext(DataContext);
// iframe to display code
    const srcCode =`
     <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
     </html>
    `
 
    UseEffect(()=>{
    const timeout = setTimeout(()=>{
     SetSrc(srcCode);
    },1000)
    return () => clearTimeout(timeout);
    },[html,css,js])

    return(
         <Container>
         <iframe
          srcDoc= {src}
          title='Output'
          sandbox='allow-scripts'
          frameBorder={0}
          width="100%"
          height="100%"
         />
    </Container>
    );
}


export default result;