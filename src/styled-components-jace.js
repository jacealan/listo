import styled, {css} from "styled-components"

export const Flex = styled.div`
  display: flex;
  ${props => props.center && css`
    justify-content: center;
  `}
  ${props => props.spaceBetween && css`
    justify-content: space-between;
  `}
  ${props => props.spaceAround && css`
    justify-content: space-around;
  `}
  align-items: center
`

export const Input = styled.input`
  margin: 0 3px;
  border: solid 1px #444;
  border-radius: 5px;
  padding: 5px;
  outline: none;
  background-color: #f5f5f5;
  ${props => props.bgColor && css`
    background-color: ${props.bgColor};
  `}
  color: #444;
  font-size: 1rem;
  ${props => props.width && css`
    width: ${props.width}px;
  `}
`

export const Submit = styled.input`
  margin: 0 3px;
  // border: solid 1px #444;
  border: none;
  border-radius: 5px;
  padding: 5px;
  outline: none;
  background-color: #f5f5f5;
  ${props => props.bgColor && css`
    background-color: ${props.bgColor};
  `}
  color: #eee;
  font-size: 1rem;
  ${props => props.width && css`
    width: ${props.width}px;
  `}
`

export const DivRound = styled.div`
  margin: 5px;
  border-radius: 5px;
  padding: 5px;  
  background-color: #f5f5f5;
  ${props => props.bgColor && css`
    background-color: ${props.bgColor};
  `}
`