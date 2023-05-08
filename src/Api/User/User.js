import { state } from "../../components/Form/Form";
import { API } from "../Connect/connect";

export const getData = () => {
  // Using fetch(promise) to get data
  fetch(`${API}/user/v1/userData`)
    .then((data) => data.json())
    .then((userData) => state.dispaich({ type: "getdata", payload: userData }));
};

export const deleteUser = (id) => {
  // Deleting a user
  fetch(`${API}/user/v1/deleteUser/${id}`, {
    method: "DELETE",
  })
    // Making null edit state after completion of edit operation
    .then(() => state.dispaich({ type: "delete", payload: null }))
    .then(() => getData());
};

export const editUser = (id, editValues) => {
  fetch(`${API}/user/v1/editData/${id}`, {
    method: "PUT",
    body: JSON.stringify(editValues),
    headers: { "Content-Type": "application/json" },
  }) // After completion of posting data get function will call
    .then(() => getData());
  return false;
};

export const createUser = (value) => {
  fetch(`${API}/user/v1/userData`, {
    method: "POST",
    body: JSON.stringify(value),
    headers: { "Content-Type": "application/json" },
  }) // After completion of posting data get function will call
    .then(() => getData());
};
