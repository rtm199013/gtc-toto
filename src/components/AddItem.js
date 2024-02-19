import React from "react";
import { useRef } from "react";

function AddItem({ newItem, setNewItem, handleSubmit }) {
  const inputRef = useRef();

  return (
    <div>
      <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <br />
        <input
          autoFocus
          ref={inputRef}
          id="addItem"
          type="text"
          placeholder="Add Item"
          required
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
          type="submit"
          arial-label="Add Item"
          onClick={() => inputRef.current.focus()}
        >
          Add New
        </button>
      </form>
    </div>
  );
}

export default AddItem;
