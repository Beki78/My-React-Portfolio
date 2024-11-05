import { createContext, useState } from "react";


export const MyContext = createContext();

// eslint-disable-next-line react/prop-types
export const MyProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); 

  const handleModal = (item) => {
    setSelectedItem(item); 
    selected item
    setOpen(true); 
  };

  const handleCloseModal = () => {
    setOpen(false); // Close the modal
    setSelectedItem(null); // Clear the selected item
  };

  return (
    <MyContext.Provider
      value={{ open, selectedItem, handleModal, handleCloseModal }}
    >
      {children}
    </MyContext.Provider>
  );
};
