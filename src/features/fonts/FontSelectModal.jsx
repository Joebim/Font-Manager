import React from 'react'
import { Fragment, useCallback, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { allFonts, fetchFonts, getFontStatus } from './fontSlice'

export default function FontSelectModal(props) {

  const dispatch = useDispatch()
  const fonts = useSelector(allFonts)
  const fontsStatus = useSelector(getFontStatus)


  const cancelButtonRef = useRef(null)


useEffect(() => {
    if(fontsStatus === 'idle') {
        dispatch(fetchFonts())
    }
}, [fontsStatus, dispatch])


  return (
    <Transition.Root show={props.open} as={Fragment}>
    <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={props.setOpen}>
        <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto flex justify-center items-center">
            <div className="flex min-h-full w-[600px] items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:ma min-h-[320px] max-h-[500px]">
                    </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
  )
}
