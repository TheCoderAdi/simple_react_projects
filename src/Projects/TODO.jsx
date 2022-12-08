import React, { useEffect, useState } from "react";
import "./Project_Styles/todo.css";
import { AiOutlineEdit } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const getLocalItmes = () => {
  let list = localStorage.getItem("lists");
  console.log(list);

  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};
const TODO = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalItmes());
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const addItem = () => {
    if (!inputData) {
      toast.error("पहले कुछ भरें");
    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );
      setToggleSubmit(true);

      setInputData("");

      setIsEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  // delete the items
  const deleteItem = (index) => {
    const updateditems = items.filter((elem) => {
      return index !== elem.id;
    });

    setItems(updateditems);
  };

  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });
    console.log(newEditItem);

    setToggleSubmit(false);

    setInputData(newEditItem.name);

    setIsEditItem(id);
  };

  // remove all
  const removeAll = () => {
    setItems([]);
  };

  // add data to localStorage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>

          <div className="addItems">
            <input
              className="todoForm"
              type="text"
              placeholder="✍ Add Items..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            {toggleSubmit ? (
              <IoMdAdd
                style={{
                  fontSize: "2rem",
                  color: "#000",
                  transform: "translate(-45px,10px)",
                  cursor: "pointer",
                }}
                title="Add Item"
                onClick={addItem}
              />
            ) : (
              <AiOutlineEdit
                style={{
                  fontSize: "2rem",
                  color: "#000",
                  transform: "translate(-45px,10px)",
                  cursor: "pointer",
                }}
                title="Update Item"
                onClick={addItem}
              />
            )}
          </div>

          <div className="showItems">
            {items.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <p style={{ width: "80%" }}>{elem.name}</p>
                  <div className="todo-btn">
                    <AiOutlineEdit
                      title="Edit Item"
                      className="editBtnTODO"
                      onClick={() => editItem(elem.id)}
                      style={{
                        fontSize: "2.2rem",
                        cursor: "pointer",
                      }}
                    />
                    <MdDeleteOutline
                      style={{ fontSize: "2.2rem", cursor: "pointer" }}
                      className="deleteBtnTODO"
                      title="Delete Item"
                      onClick={() => deleteItem(elem.id)}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* clear all button  */}
          <div className="showItems">
            <button
              className="btn-remove"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              Remove All
            </button>
          </div>
        </div>
      </div>
      <div className="goToPage">
        <Link to="/projects">
          <button className="goBtn">
            <BiArrowBack style={{ fontSize: "1.5rem" }} />
          </button>
        </Link>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default TODO;
