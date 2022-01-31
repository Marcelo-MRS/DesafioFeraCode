import React, {useEffect, useState} from 'react';

import {useDispatch} from 'react-redux';

import {globalModalTypedSelector} from '~/store/modules/globalModal/reducer';
import {closeModal} from '~/store/modules/globalModal/action';

import {
  Cover,
  Modal,
  ModalContainer,
  ModalContent,
} from './styles';

const ModalGlobalComponent: React.FC = () => {
  const dispatch = useDispatch();

  const [modalCover, setModalCover] = useState(true);

  const {
    visible,
    content,
    cover
  } = globalModalTypedSelector(state => state.globalModal.modalParams);

  useEffect(() => {
    cover !== undefined && cover !== null && setModalCover(cover);
  }, [cover])

  const onCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      {visible && modalCover && <Cover />}
      <Modal
        visible={visible}
        animationType="slide"
        transparent
        onRequestClose={onCloseModal}>
        <ModalContainer>
          <ModalContent>
            {content}
          </ModalContent>
        </ModalContainer>
      </Modal>
    </>
  )
};

export default ModalGlobalComponent;
