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
  align-items: center;  
  text-align: cetner;
  ${props => props.button && css`
    cursor: pointer;
  `}
`

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.center && css`
    justify-content: center;
  `}
  ${props => props.top && css`
    justify-content: flex-start;
  `}
  ${props => props.bottom && css`
    justify-content: flex-end;
  `}
  align-items: center;  
  text-align: cetner;
`

export const Input = styled.input`
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
  color: #444;
  font-size: 1rem;
  ${props => props.width && css`
    width: ${props.width}px;
  `}
  &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #aaa;
    opacity: 1; /* Firefox */
  }
  &::-ms-input-placeholder { /* Microsoft Edge */
  color: #aaa;
}
`

export const Submit = styled.input`
  margin: 0 3px;
  // border: solid 1px #444;
  border: none;
  border-radius: 5px;
  padding: 5px 0;
  outline: none;
  background-color: #f5f5f5;
  ${props => props.bgColor && css`
    background-color: ${props.bgColor};
  `}
  color: #eee;
  ${props => props.color && css`
    color: ${props.color};
  `}
  font-size: 1rem;
  ${props => props.width && css`
    width: ${props.width}px;
  `}
  text-align: center;
`

export const DivRound = styled.div`
  ${props => props.width && css`
    width: ${props.width}px;
  `}
  margin: 10px auto 0 auto;
  border-radius: 20px;
  padding: 10px 0;
  background-color: #f5f5f5;
  ${props => props.bgColor && css`
    background-color: ${props.bgColor};
  `}
  ${props => props.color && css`
    color: ${props.color};
  `}
  ${props => props.boxShadow && css`
    box-shadow: ${props.boxShadow};
  `}
  ${props => props.button && css`
    cursor: pointer;
  `}
`

export const ListPages = styled.div`
  ${props => props.width && css`
    width: ${props.width}px;
  `}
  margin: 10px auto 0 auto;
  border-radius: 20px;
  padding: 10px 0;
  background-color: #ddd;
  ${props => props.bgColor && css`
    background-color: ${props.bgColor};
  `}
  ${props => props.boxShadow && css`
    box-shadow: ${props.boxShadow};
  `}
  display: grid;
  grid-template-columns: repeat(${props => props.page}, 1fr);
`

export const PageMarks = styled(FlexColumn)`
  justify-content: flex-start;
  ${props => props.width && css`
    width: ${props.width}px;
  `}
  margin: 10px auto 0 auto;
  border-radius: 20px;
  padding: 10px 0;
  background-color: #f5f5f5;
  ${props => props.bgColor && css`
    background-color: ${props.bgColor};
  `}
  ${props => props.boxShadow && css`
    box-shadow: ${props.boxShadow};
  `}
`

export const GroupMarks = styled.div`
  padding: 0 5px;
  ${props => props.width && css`
    width: ${props.width}px;
  `}
  min-width: 360px;
  display: grid;
  grid-template-columns: repeat(${props => props.item}, 1fr);
  justify-items: center;
  align-items: start;
`

export const Mark = styled.div`
  height: 110px;
  max-width: 80px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;  
  align-items: center;
  text-align: cetner;
  font-size: 12px;
`

export const Icon = styled.div`
  width: 76px;
  height: 76px;
  box-shadow: 1px 1px 6px -1px #ccc;
  margin: 0 0 5px 0;
  border-radius: 12px;
  padding: 5px;
  ${props => props.src && css`
    background-image: url(${props.src});
    background-size: cover;
  `}
  background-color: #fff;
  ${props => props.bgColor && css`
    background-color: ${props.bgColor};
  `}
  color: #444;
  ${props => props.color && css`
    color: ${props.color};
  `}
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  &:hover {
    transform: scale(1.1);
  }
`