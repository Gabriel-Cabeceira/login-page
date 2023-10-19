import { Main, InvalidData, Container } from './styles';
import { InputField } from '../../components/input/input';
import { Button } from '../../components/button/button';
import {MdEmail, MdLock} from 'react-icons/md';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IFormValues } from './types';
import ReactImage from '../../assets/images/react.webp'


const schema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('* Campo obrigatório'),
  password: yup.string().min(5, 'Senha inválida, a senha deve conter no mínimo 5 caracteres.').required('* Campo obrigatório')
})


const Login = () => {

  const navigate = useNavigate();

  const [invalidData, setInvalidData] = useState(false)

  const { handleSubmit, control, formState: { errors } } = useForm<IFormValues>({
    resolver: yupResolver(schema),
    mode: 'onSubmit'
  });


  const onSubmit: SubmitHandler<IFormValues> = async (formData) => {
    try {
      const response = await api.post('login', {
        email: formData.email,
        password: formData.password
      })

      const data = response.data;

      if (data){

        navigate('/feed');
      } else {
          setInvalidData(true);
      }
    } catch (error) {
      setInvalidData(true);
    }
  }

  return (
    <Container>
      <Main>
          <img src={ReactImage} alt="" />
          {invalidData === true? <InvalidData>Email ou Senha inválidos</InvalidData>: null}
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputField control={control} name='email' placeholder='E-mail' inputType='email' errorMessage={errors?.email?.message} leftIcon={<MdEmail/>}/>
            <InputField control={control} name='password' placeholder='Senha' inputType='password' errorMessage={errors?.password?.message} leftIcon={<MdLock/>}/>
            <Button text='Entrar' buttonType='submit'/>
          </form>        
      </Main>
    </Container>
  );
}

export { Login };
