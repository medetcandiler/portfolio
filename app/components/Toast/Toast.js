const Toast = ({ message, isShowToast, setIsShowToast }) => {
  const handleClose = () => {
    setIsShowToast(false);
  };
  return (
    <div>
      <div
        id="toast-success"
        className={`absolute  bottom-0 left-1/2 -translate-x-1/2 flex items-center p-4 mb-4 bg-transparent rounded-lg shadow shadow-[#4a2771] transition-opacity ease-in duration-500 ${isShowToast ? "opacity-100" : "opacity-0"} md:bottom-5 md:left-5 md:translate-x-0`}
        role="alert"
      >
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-amber-600 bg-[#4a2771] rounded-lg">
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
            />
          </svg>
          <span className="sr-only">Check icon</span>
        </div>
        <div className="ml-3 text-sm font-normal whitespace-nowrap ">{message}</div>
        <button
          type="button"
          onClick={handleClose}
          className="ml-auto -mx-1.5 -my-1.5 text-[#4a2771] p-1.5 inline-flex items-center justify-center h-8 w-8 duration-300 ease-in hover:-translate-y-[3px] hover:opacity-70"
          data-dismiss-target="#toast-success"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;
