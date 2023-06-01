import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
&.active {
    color: ${props => props.theme.colors.lightBlue};
}
`
export const Nav = styled.nav`
display: flex;
align-items: center;
padding-left: 20px;
gap: 20px;
height: 70px;
font-size:20px;
`

export const Head = styled.header`
height: 70px;
margin-bottom: 20px;
box-shadow: ${props => props.theme.shadows.shadow};
`