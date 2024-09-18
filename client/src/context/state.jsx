import { createContext, useState } from "react";

// Create the context
export const MyContext = createContext();

// eslint-disable-next-line react/prop-types
export const MyProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // Store the selected item

  const handleModal = (item) => {
    setSelectedItem(item); // Set the selected item
    setOpen(true); // Open the modal
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
