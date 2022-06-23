import React , {useState} from 'react';
import UsersList from './usersList';
import MyModal from '../../Modal/myModal';

function Index() {

    let [modalIsOpen, setModalIsOpen] = useState(false)
    const modalHeader = 'کاربر جدید';
    const modalButton = 'اضافه';
    const modalBody = '...';

    function openModal() {
        setModalIsOpen(true)
      }

      function closeModal() {
        setModalIsOpen(false)
      }

      
    return (
        <>
            <MyModal 
                modalIsOpen={modalIsOpen} 
                modalHeader={modalHeader} 
                modalBody={modalBody} 
                modalButton={modalButton}
                closeModal={closeModal}
            />
            <div className="inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md bg-black bg-opacity-40 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    >
                     اضافه کردن کاربر جدید
                </button>
            </div>
            <UsersList />
        </>
       
    )
}


export default Index;