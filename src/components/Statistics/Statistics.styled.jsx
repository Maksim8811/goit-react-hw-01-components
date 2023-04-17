import styled from '@emotion/styled'
import {getRandomHexColor} from "./randomBgColor.js"

export const StatisticsStule = styled.section`
border: solid 1px red;
`
export const Title = styled.h2`
text-align: center;
`

export const StatList = styled.ul`
display: flex;
justify-content: space-around;
padding: 0px;
`

export const Item = styled.li`
list-style: none;
background-color: ${getRandomHexColor};

` 
export const StatLabel = styled.span`

`
export const Percentage = styled.span`
display: block;
`



    