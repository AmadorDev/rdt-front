import { Children } from "react/cjs/react.production.min";

export default function ModalDefault({ showModal, setShowModal ,children}) {
  return (
    <>
      {showModal ? (
        <>
          <div style={{zIndex:100}} className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-end justify-end p-1 border-b border-solid border-slate-200 rounded-t">
                  
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-gray-500 opacity-4 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                x
                  </button>
                </div>
               
                <div className="relative p-0 flex-auto">
                  {children}
                </div>
               
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
