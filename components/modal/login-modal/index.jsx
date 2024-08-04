"use client";

import * as React from 'react';
import PropTypes from 'prop-types';
import { Modal, Fade } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import { Zamok, Kalit } from '@/public/assets';
import Image from 'next/image';
import Link from 'next/link';
import { Formik, Field, Form } from 'formik';
import { Login } from '@/service/auth'; 
import loginValidationSchema from '@/utils/validation';
import ForgotPasswordModal from '../forgot-modal/index';

const Backdrop = React.forwardRef((props, ref) => {
  const { open, ...other } = props;
  return (
    <Fade in={open}>
      <div ref={ref} {...other} />
    </Fade>
  );
});

Backdrop.propTypes = {
  open: PropTypes.bool,
};

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled('div')(
  ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === 'dark' ? '#303740' : '#fff'};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === 'dark' ? '#434D5B' : '#E5EAF2'};
    box-shadow: 0 4px 12px ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
    padding: 24px;
    color: ${theme.palette.mode === 'dark' ? '#F3F6F9' : '#000'};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === 'dark' ? '#B0B8C4' : '#434D5B'};
      margin-bottom: 4px;
    }
  `,
);

export default function TransitionsModal({ open, toggle }) {
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(false);

  const handleForgotPasswordModalToggle = () => {
    setIsForgotPasswordModalOpen(!isForgotPasswordModalOpen);
  };

  const handleSubmit = async (values) => {
    try {
      const response = await Login(values);
      if (response && response.status === 200) {
        closeModal();
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const closeModal = () => {
    toggle(); 
  };

  return (
    <div className='container'>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={toggle}
        closeAfterTransition
        components={{ Backdrop: StyledBackdrop }}
      >
        <Fade in={open}>
          <ModalContent sx={style} className='bg-white mt-[50px]'>
            <div className="register flex flex-col mb-[26px] gap-[26px]">
              <button onClick={toggle} className='flex justify-end p-1 text-[#000]'>X</button>
              <li className='flex flex-col gap-[7px]'>
                <h1 className='text-[#000] text-[24px] not-italic font-medium leading-normal'>Вход в аккаунт</h1>
                <p className='text-[#000] text-[12px]'>Если Вы не зарегистрированы, нажмите кнопку <button className='text-[#FBD029]'>" Регистрация "</button></p>
              </li>
              <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={loginValidationSchema}
              >
                {({ errors, touched }) => (
                  <Form className='flex flex-col gap-[13px]' id='form'>
                    <li className='flex items-center px-[7px] py-[11px] bg-[#F2F2F2] gap-[4px] rounded-[5px]'>
                      <Image src={Zamok} alt='nimadur' width={24} height={24} />
                      <Field
                        type="text"
                        name="email"
                        placeholder='Login'
                        className='bg-transparent border-none outline-none w-full h-full placeholder:text-[12px] placeholder:text-[#000]'
                      />
                      {errors.email && touched.email ? <div className="text-red-500 text-sm">{errors.email}</div> : null}
                    </li>
                    <li className='flex items-center px-[7px] py-[11px] bg-[#F2F2F2] gap-[4px] rounded-[5px]'>
                      <Image src={Kalit} alt='nimadur' width={24} height={24} />
                      <Field
                        type="password"
                        name="password"
                        placeholder='Password'
                        className='bg-transparent border-none outline-none w-full h-full placeholder:text-[12px] placeholder:text-[#000]'
                      />
                      {errors.password && touched.password ? <div className="text-red-500 text-sm">{errors.password}</div> : null}
                    </li>
                    <Link href="#" onClick={handleForgotPasswordModalToggle} className='text-[12px] text-[#917BFF]'> Забыли пароль!</Link>
                    <button type='submit' className='py-[12px] px-[35px] bg-[#FBD029] rounded-[4px] w-[160px] text-[#000]'>Войти</button>
                  </Form>
                )}
              </Formik>
            </div>
          </ModalContent>
        </Fade>
      </Modal>
      <ForgotPasswordModal open={isForgotPasswordModalOpen} toggle={handleForgotPasswordModalToggle} />
    </div>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
};
