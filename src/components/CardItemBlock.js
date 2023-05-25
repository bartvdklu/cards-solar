import React from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

import { FiEdit2, FiTrash2 } from "react-icons/fi";

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const notify = () => toast.success("Kaart wordt verwijderd...wacht op refresh!", {
  onClose: () => window.location.reload(),
  duration: 2000,
});

const notifyErr = (err) => toast.error("Kaart niet verwijderd, contact webbouwer! Error:" + err, {
  duration: 2000,
});

const CardItemBlock = ({title, id}) => {
  const navigate = useNavigate();

  const onEditClick = ({id}) => {
    navigate(`/admin/edit-card/${id}`);
  }
  
  const onDeleteClick = ({id}) => {
    firebase.firestore().collection('cards').doc(id).delete().then(() => {
      notify();
    }).catch((error) => {
      notifyErr(error);
    });
  }

  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <div>
        <IconBtn onClick={() => onEditClick({id})}><FiEdit2 /></IconBtn>
        <IconBtn onClick={() => onDeleteClick({id})}><FiTrash2/></IconBtn>
      </div>
    </CardContainer>
  )
}

export default CardItemBlock

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #ff7add;
  border: 2px solid #a03bad;
  padding: 8px 10px;
`;

const CardTitle = styled.p`
  font-size: 0.9em;
  margin: 0;
  color: #fff;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 64%;
`;

const IconBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 0,9em;
  margin-left: 10px;
`;
