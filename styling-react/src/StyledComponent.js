import styled, { css } from "styled-components";
import CustomButton from "./CustomButton";

const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
`;

const Button = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: cneter;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;

    &:hover {
        background: #333;
    }
    ${props => props.border &&
                css`
                background: none;
                border: 2px solid white;
                color: white;
                &:hover {
                    background: white;
                    color: black;
                }
            `};
            & + button {
                margin-left: 1rem;
            }
    
    
    }
`

const CButton = styled(CustomButton)`
        border: 2px solid green;
        color: white;
`

const StyledComponent = () => {
  return <Box color="red">
    <Button >안녕하세요!</Button>
    <Button border={true}>안녕하세요!</Button>
    <CButton>안녕하세요!</CButton>
  </Box>;
};

export default StyledComponent;
