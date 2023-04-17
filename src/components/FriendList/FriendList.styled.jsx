import styled from '@emotion/styled'

export const FriendListed = styled.ul`
    padding: 0;
    border: solid 1px green;
   `

export const Item = styled.li`
    display: flex;
    max-width: 200px;
    
    margin: 16px auto 16px auto;
    list-style: none;
    border: solid 1px rgba(193, 192, 192, 0.299);
    box-shadow: 2px 2px 5px 1px rgba(131, 131, 135, 0.2);
    align-items: center;
    `

export const StatysOn = styled.span`
margin-left: 10px;
    margin-right: 10px;
    background-color: green;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    `

export const StatysOff = styled.span`
    margin-right: 10px;
    margin-left: 10px;
    background-color: rgb(250, 4, 45);
    width: 15px;
    height: 15px;
    border-radius: 100%;
`

export const Avatar = styled.img`
    margin-top: 5px;
    margin-bottom: 5px;
    border: solid 1px rgba(193, 192, 192, 0.299);
    border-radius: 4px;
`

export const FriendName = styled.p`
    margin-left: 10px;
    margin-right: 10px;
`