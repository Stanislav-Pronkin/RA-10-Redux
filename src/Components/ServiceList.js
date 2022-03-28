import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeEditId, changeServiceField, clearServiceFields, removeService } from "../actions/actionService";

function ServiceList() {
    const items = useSelector((state) => state.serviceList.data);
    const filtered = useSelector((state) => state.serviceList.filter);
    const filteredItems = (filtered && filtered.length > 0) ? items.filter((item) => item.name.toLowerCase().indexOf(filtered.toLowerCase()) > -1) : items;
    const editId = useSelector((state) => state.serviceAdd.editId);
    const dispatch = useDispatch();
  
    const handleRemove = (id) => {
      if (!editId || editId !== id) {
        dispatch(removeService(id));
      }
      dispatch(clearServiceFields());
    }
  
    const handleEdit = (item) => {
      const {id, name, price} = item;
      dispatch(changeServiceField('name', name));
      dispatch(changeServiceField('price', price));
      dispatch(changeEditId(id))
    }
  
    return (
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name} {item.price}
            <button onClick={() => handleEdit(item)}>✎</button>
            <button onClick={() => handleRemove(item.id)}>✕</button>
          </li>
        ))}
      </ul>
    )
  }
  
  export default ServiceList