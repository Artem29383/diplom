import React, { useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useResolver from "../../../hooks/useResolver";
import VisualForm from "./VisualForm";

const Form = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required('Имя обязательно'),
    email: yup
      .string()
      .required('E-mail обязателен')
      .email('Вы ввели не e-mail'),
    message: yup.string().required('Заполните сообщение'),
  });

  const resolver = useResolver(formSchema);
  const {
    register,
    handleSubmit,
    errors,
    reset,
    watch,
    setValue,
    clearErrors,
  } = useForm({
    mode: 'onSubmit',
    resolver,
    shouldFocusError: false,
  });

  const name = watch('name');
  const email = watch('email');
  const message = watch('message');

  useEffect(() => {
    if (errors.email && email.trim()) {
      clearErrors('email');
    }
    if (errors.name && name.trim()) {
      clearErrors('name');
    }
    if (errors.message && message.trim()) {
      clearErrors('message');
    }
  }, [name, email, message]);

  useEffect(() => {
    if (errors.name || errors.message || errors.email) {
      if (errors.name) {
        setValue('name', '');
      }
      if (errors.message) {
        setValue('message', '');
      }
      if (errors.email) {
        setValue('email', '');
      }
    }
  }, [errors.name, errors.message, errors.email]);

  const submit = useCallback(data => {
    fetch(
      `/api/messages?email=${data.email}&text=${data.message}&name=${data.name}`
    )
      .then(res => {
        console.info(res)
        return res.json();
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    reset();
  }, []);

  return (
    <VisualForm
      {...errors}
      handleSubmit={handleSubmit}
      register={register}
      submit={submit}
    />
  );
};

export default Form;