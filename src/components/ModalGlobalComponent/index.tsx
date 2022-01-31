import React, {useEffect, useState} from 'react';

import {useDispatch} from 'react-redux';

import {globalModalTypedSelector} from '~/store/modules/globalModal/reducer';
import {globalModalActions} from '~/store/modules'

import {
  Cover,
  Modal,
  ModalContainer,
  ModalContent,
  CloseButton,
  CloseIcon
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
    dispatch(globalModalActions.closeModal());
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
            <CloseButton onPress={onCloseModal}>
              <CloseIcon name="x" size={20} />
            </CloseButton>
            {content}
          </ModalContent>
        </ModalContainer>
      </Modal>
    </>
  )
};

export default ModalGlobalComponent;
