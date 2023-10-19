import { ButtonField } from './style'

const Button = ({text, buttonType}: {text: string; buttonType: 'button' | 'submit' | 'reset' }) => {
  return (
    <ButtonField type={buttonType}>
        {text}
    </ButtonField>
  )
}

export { Button }