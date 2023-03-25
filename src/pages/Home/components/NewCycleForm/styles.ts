export const FormContainer = styled.div`
  width: 100%;
  color: ${(props) => props.theme['gray-100']};
  font-weight: 700;
  font-size: 1.125rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

const BaseInput = styled.input`
  padding: 0 0.5rem;
  height: 2.5rem;
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: 700;
  font-size: 1.125rem;
  color: ${(props) => props.theme['gray-100']};

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
  text-align: center;
`