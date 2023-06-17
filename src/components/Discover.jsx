import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Discover({open, setOpen}) {

  const cancelButtonRef = useRef(null);


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
          <div className="flex min-h-full items-center mt-32 lg:mt-10 justify-center p-4 text-center sm:items-center sm:p-0">
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
                <div className="bg-white px-4 pb-4 pt-5 ">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 ">
                      <p className=" text-sm text-pr font-bold">
                        Que pensez-vous du format des cours ?
                      </p>
                      <textarea
                        className="border outline-none w-full p-2 mt-2"
                        name=""
                        id=""
                        cols="30"
                        rows="3"
                      ></textarea>

                      <p className=" text-sm mt-3 text-pr font-bold">
                        Est-ce que les vidéos vous ont aidé à mieux comprendre
                        les cours ?
                      </p>
                      <form>
                        <div className="flex items-center gap-3">
                          {["Yes", "No"].map((option, optionIndex) => (
                            <label
                              key={optionIndex}
                              className="flex items-center justify-between px-4 rounded-md cursor-pointer hover:bg-hvr py-2 mt-3 space-x-2 border"
                            >
                              <span className="text-sm">{option}</span>
                              <input
                                value={option}
                                type="radio"
                                name="radioGroup" // Add a unique name attribute
                                className="w-4 h-4"
                              />
                            </label>
                          ))}
                        </div>
                      </form>
                      <p className=" text-sm mt-3 text-pr font-bold">
                        Qu’est-ce que vous aimez le plus sur la plateforme ?
                      </p>
                      <textarea
                        className="border outline-none w-full p-2 mt-2"
                        name=""
                        id=""
                        cols="30"
                        rows="3"
                      ></textarea>
                      <p className=" text-sm mt-3 text-pr font-bold">
                        Qu’est-ce qu’on devrait améliorer
                      </p>
                      <textarea
                        className="border outline-none w-full p-2 mt-2"
                        name=""
                        id=""
                        cols="30"
                        rows="3"
                      ></textarea>
                      <p className=" text-sm mt-3 text-pr font-bold">
                        Quels sont les matières clés que vous souhaiterez voir
                        sur la plateforme
                      </p>
                      <textarea
                        className="border outline-none w-full p-2 mt-2"
                        name=""
                        id=""
                        cols="30"
                        rows="3"
                      ></textarea>
                      <p className=" text-sm mt-3 text-pr font-bold">
                        Seriez-vous prêt(e)s à payer un abonnement pour avoir
                        tous vos cours avec ce format vidéo ?
                      </p>
                      <form>
                        <div className="flex items-center gap-3">
                          {["Yes", "No"].map((option, optionIndex) => (
                            <label
                              key={optionIndex}
                              className="flex items-center justify-between px-4 rounded-md cursor-pointer hover:bg-hvr py-2 mt-3 space-x-2 border"
                            >
                              <span className="text-sm">{option}</span>
                              <input
                                value={option}
                                type="radio"
                                name="radioGroup" // Add a unique name attribute
                                className="w-4 h-4"
                              />
                            </label>
                          ))}
                        </div>
                      </form>
                      <p className=" text-sm mt-3 text-pr font-bold">
                        Combien serez-vous prêt à payer par mois ?
                      </p>
                      <form>
                        <div className="flex items-center gap-3">
                          {[
                            "1000 Frs",
                            "2000 Frs",
                            "5000 Frs",
                            "10000 Frs",
                          ].map((option, optionIndex) => (
                            <label
                              key={optionIndex}
                              className="flex items-center justify-between px-4 rounded-md cursor-pointer hover:bg-hvr py-2 mt-3 space-x-2 border"
                            >
                              <span className="text-sm">{option}</span>
                              <input
                                value={option}
                                type="radio"
                                name="radioGroup" // Add a unique name attribute
                                className="w-4 h-4"
                              />
                            </label>
                          ))}
                        </div>
                      </form>

                      <button className="px-4 py-2 text-white bg-pr rounded-md mt-4">
                      Soumettre
                      </button>
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
