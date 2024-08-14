import React from 'react';
import { Button, message, Popconfirm } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function BntHistoria(){
    const navigate = useNavigate();

    const handleNavigation = () => {
      navigate('/sobre-nos');
    };
  
    const confirm = (e) => {
        handleNavigation()
      };
      const cancel = (e) => {
        console.log(e);
        message.error('Click on No');
      };
      return(
        <Popconfirm
          title="Ao clicar em SIM você será redirecionado para nossa página"
          description="Voce tem certeza disso?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Sim"
          cancelText="Não"
        >
          <Button >Conhecer mias sobre nossa história</Button>
        </Popconfirm>
      );
}