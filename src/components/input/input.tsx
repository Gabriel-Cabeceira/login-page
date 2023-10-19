import { Input, DivInput, ErrorText } from './style';
import { Controller } from 'react-hook-form';

const InputField = ({ name, control, leftIcon, inputType, placeholder, errorMessage, ...rest }: { name: string; leftIcon: any; control: any; inputType: string; placeholder: string; errorMessage: any}) => {
  return (<>
    {errorMessage ? <ErrorText>{errorMessage}</ErrorText>: null}
    <DivInput>
        {leftIcon}
        <Controller 
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input type={inputType} placeholder={placeholder} {...field} {...rest}/>}
        />
    </DivInput>
    </>
  );
}

export { InputField };
