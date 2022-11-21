import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { FaTimes } from 'react-icons/fa'
const Modal = ({ isOpen, closeModal, children, heading, isHeightAuto }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        open={isOpen}
        onClose={closeModal}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Full-screen scrollable container */}
        <div className="fixed inset-0 overflow-y-auto">
          {/* Container to center the panel */}
          <div className="flex items-center justify-center min-h-full p-4">
            {/* The actual dialog panel  */}
            <Dialog.Panel className="mx-auto bg-white rounded max-w-[600px] w-full p-5 relative">
              <Dialog.Title className="mb-5 text-lg text-center">{heading}</Dialog.Title>

              <div className={`${isHeightAuto ? `h-auto` : `h-[400px]`} flex items-center justify-center overflow-y-scroll`}>
                {children}
              </div>

              <div
                onClick={closeModal}
                className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full bg-red-400 absolute right-4 top-4 flex items-center justify-center cursor-pointer'>
                <FaTimes />
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal