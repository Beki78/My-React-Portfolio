import React, { useContext, useRef, useState } from "react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { MyContext } from "../context/state";

export const AnimatedModalDemo = () => {
  const { open, selectedItem, handleCloseModal } = useContext(MyContext);
  const refModal = useRef(null);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true); // Loading state

  const close = (e) => {
    if (refModal.current && refModal.current === e.target) {
      handleCloseModal();
      setCurrentImageIndex(0); // Reset index on close
    }
  };

  const handlePrev = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
      setLoading(true); // Set loading when changing image
    }
  };

  const handleNext = () => {
    if (
      selectedItem.images &&
      currentImageIndex < selectedItem.images.length - 1
    ) {
      setCurrentImageIndex(currentImageIndex + 1);
      setLoading(true); 
    }
  };

  const handleImageLoad = () => {
    setLoading(false); 
  };

  if (!selectedItem) return null; 

  return (
    open && (
      <div
        ref={refModal}
        onClick={close}
        className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md z-[1001] flex items-center justify-center"
      >
        <div className="relative border border-slate-500 mx-7 w-full lg:w-1/2 bg-slate-950 text-white rounded-xl">
          {/* Close Icon */}
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>

          <div className="p-8 max-h-[90vh] overflow-y-auto">
            <h1 className="text-xl font-bold mb-4">{selectedItem.title}</h1>
            <p className="py-2 pb-8">{selectedItem.longdesc}</p>
            <div className="relative">
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <p className="text-white">Loading...</p>
                </div>
              )}
              <img
                src={selectedItem.images[currentImageIndex]}
                alt={selectedItem.title}
                className="max-h-96 w-full object-contain"
                onLoad={handleImageLoad} 
              />
            </div>

            <div className="flex justify-center gap-10 w-full pt-7">
              <div
                onClick={handlePrev}
                className="flex items-center cursor-pointer"
              >
                <ArrowLongLeftIcon className="h-10 w-10 text-purple-500" />
                <p className="ml-2 text-white">Prev</p>
              </div>
              <div
                onClick={handleNext}
                className="flex items-center cursor-pointer"
              >
                <p className="ml-2 text-white">Next</p>
                <ArrowLongRightIcon className="h-10 w-10 text-purple-500" />
              </div>
            </div>
            <p>
              {currentImageIndex + 1}/{selectedItem.images.length}
            </p>
          </div>

          <div className="flex justify-between items-center px-12 rounded-br-xl rounded-bl-xl bg-slate-900 h-16">
            <div>
              <div className="flex items-center">
                {selectedItem.technology.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-10 h-10 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * techIndex + 2}px)`,
                    }}
                  >
                    <img src={tech} alt="Technology Icon" className="p-2" />
                  </div>
                ))}
              </div>
            </div>
            <div className="gap-4 flex text-center">
              <a
                href={selectedItem.github}
                className="px-2 py-1 bg-gray-200 text-black dark:bg-slate-950 dark:border-black font-bold dark:text-white border border-gray-300 rounded-md text-sm w-28"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {!selectedItem.inProgress && (
                <a
                  href={selectedItem.live}
                  className="bg-black text-white dark:bg-purple-400 dark:text-black text-sm font-bold px-2 py-1 rounded-md border border-black w-28"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};
