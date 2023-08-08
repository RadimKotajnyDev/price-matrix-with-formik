import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useRef} from 'react'
import {AiFillCheckCircle, AiFillCloseCircle} from "react-icons/ai";

interface ModalProps {
  errorModal: boolean,
  showState: boolean,
  closeModal: (value: boolean) => void,
  openModal: (value: boolean) => void,
}

export default function ResponseModal(props: ModalProps) {
  //fixed "There are no focusable elements inside the <FocusTrap />"
  const modalRef = useRef(null);

  return (
    <>
      <Transition appear show={props.showState} as={Fragment}>
        <Dialog
          initialFocus={modalRef}
          as="div" className="relative z-50" onClose={props.closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25"/>
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 gap-2 flex-row items-center flex"
                  >
                    {!props.errorModal ? (<>
                      <AiFillCheckCircle size={30} className="text-green-500"/>
                      Price Matrix submitted successfully!
                    </>) : (
                      <>
                        <AiFillCloseCircle size={30} className="text-red-500"/>
                        Price Matrix submit failed! <br /> Check for unfilled inputs.
                      </>
                    )}
                  </Dialog.Title>
                  <span ref={modalRef} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
