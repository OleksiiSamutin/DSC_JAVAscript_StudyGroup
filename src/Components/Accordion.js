import React,{useState} from 'react'
import arrow from '../images/icon-arrow-down.svg';
import styled,{css} from 'styled-components'
const Wrapper = styled.div`
    border-bottom: 1px solid hsl(240, 5%, 91%);
    padding: 20px 0;
`;
const Arrow = styled.img`

    ${props => !props.arrowClose && css`
        transform: rotateX(180deg);
    `

    }
`
const Answer = styled.div`
    margin-top: 20px;
    ${props => props.hide && css`
        display:none
    `}
`
const QuestionText = styled.div`
    &:hover{
            color: hsl(14, 88%, 65%);
        }
    ${props => props.bold && css`
            color: black;
            font-weight: bold;
        `}

`
const QuestionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    &:hover{
        cursor: pointer;
    }
`
const Accordion = (props) => {
    const [open,toggleOpen] = useState(false);
    const {question,answer} = props;
    return (
        <div>
            <Wrapper>
                <QuestionWrapper onClick={() => toggleOpen(!open)}>
                    <QuestionText bold={open}>
                       { question}
                    </QuestionText>
                    <div>
                        <Arrow src={arrow} arrowClose={!open}/>
                    </div>
                </QuestionWrapper>
                <Answer hide={!open}>
                    {answer}
                </Answer>
            </Wrapper>
        </div>
    )
}

export default Accordion
