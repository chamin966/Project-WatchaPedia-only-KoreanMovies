import LoginModal from './LoginModal/LoginModal';
import './ModalBasic.css';

function ModalBasic({ setModalOpen }) {
  const closeModal = (e) => {
    if (e.target !== e.currentTarget) return;
    setModalOpen(false);
  };
  return (
    <div className='basic-modal__background' onClick={closeModal}>
      <div className='basic-modal'>
        <LoginModal />
      </div>
    </div>
  );
}

export default ModalBasic;
