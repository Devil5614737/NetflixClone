import React from 'react'
import styled from 'styled-components'


const Grid=styled.div`
color:white;
display: grid;
text-transform: capitalize;
grid-template: repeat(2, auto)/ repeat(4,20%);
max-width: 1000px;
grid-gap: 19px;
grid-column-gap: 22px;
/* margin:52px auto; */
@media(max-width:778px){
    display: grid;
    grid-row-gap: 12px;
    grid-column-gap: 52px;
    grid-template: repeat(2, auto)/ repeat(3,10%);
    /* padding:0 4rem; */
}
@media(max-width:650px){
    grid-template: repeat(2, auto)/ repeat(3,14%);
}
@media(max-width:570px){
    grid-template: repeat(2, auto)/ repeat(3,8%);
}
`

const GridContent=styled.p`
font-size: 1.3rem;
color:#757575;
cursor: pointer;
&:nth-of-type(1){
    grid-column: 1/span 4;
}
`

function Footer() {
    return (
        <Grid>
          <GridContent>Questions? Call 000-800-040-1843</GridContent>
          <GridContent>FAQ</GridContent>
          <GridContent>investor reference</GridContent>
          <GridContent>privacy</GridContent>
          <GridContent>speed test</GridContent>
          <GridContent>help centre</GridContent>
          <GridContent>jobs</GridContent>
          <GridContent>cookie preferences</GridContent>
          <GridContent>legal notices</GridContent>
          <GridContent>account</GridContent>
          <GridContent>ways to watch</GridContent>
          <GridContent>corporate information</GridContent>
          <GridContent>only on netflix</GridContent>
          <GridContent>media centre</GridContent>
          <GridContent>terms of use</GridContent>
          <GridContent>contact us</GridContent>

        </Grid>
    )
}

export default Footer
