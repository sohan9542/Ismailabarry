import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Discover() {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  useEffect(() => {
   if(localStorage.getItem("findus")){

   }
   else{
    setOpen(true)
   }
  }, [])
  

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
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

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all max-w-2xl">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <p className="text-center text-sm">
                        Hi there! Could you plese tell us.
                      </p>
                      <h1 className=" text-2xl text-center py-2">
                        How did you discover our company?
                      </h1>
                      <form className="mt-2">
                        <div className="mt-2 ">
                          {["Refarrel", "Social Media", "Another Website", "Search Engine", "Other"].map(
                            (option, optionIndex) => (
                              <label
                              onClick={()=>{
                                localStorage.setItem("findus", option)
                                setOpen(false)
                            }}
                                key={optionIndex}
                                className="flex items-center justify-between px-4 rounded-md cursor-pointer  hover:bg-hvr  py-2 mt-3 space-x-2 border"
                              >
                                <span className=" text-lg">{option}</span>
                                <input
                                  type="radio"
                                  className="w-6 h-6"
                               
                              
                               
                                />
                              </label>
                            )
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
            
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
