import React, { useState } from "react";
import "./actionButtons.css";
import { IoMdMore } from "react-icons/io";
import SeeMore from "../SeeMore/SeeMore";
import { useDispatch } from "react-redux";
import DeleteConform from "../DeleteConform/DeleteConform";
import EditForm from "../EditForm/EditForm";

export default function ActionButtons({ user }) {
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const handleSeeMore = () => {
    dispatch({ type: "IsSeeMoreOpen", payload: user.id });
  };

  const handleEditForm = (e) => {
    e.preventDefault();
    const [firstName, lastName, age, email, company, status] = e.target;
    const newUser = {
      id: user.id,
      firstName: firstName.value,
      lastName: lastName.value,
      age: age.value,
      email: email.value,
      company: company.value,
      status: status.value,
      isSeeMore: false,
      isEdit: false,
    }
    dispatch({type: "USER_CHANGE", payload: newUser});
    e.target.reset();
    setIsEdit(false)
  }
  const handleIsDeleteTrue = () => {
    setIsDelete(true);
  };
  const handleIsEditTrue = () => {
    setIsEdit(true);
  }
  const handleDeleteModalCancel = () => {
    setIsDelete(false);
  }
  const handleEditModalCancel = () => {
    setIsEdit(false);
  }
  const handleIsDeleteModalTrue = () => {
    dispatch({type: "USER_DELETE", payload: user.id});
    setIsDelete(false);
  }

  return (
    <div className="ActionButtons">
      {isDelete && <DeleteConform handleDeleteModalCancel={handleDeleteModalCancel} handleIsDeleteModalTrue={handleIsDeleteModalTrue}/>}
      {isEdit && <EditForm user={user} handleEditModalCancel={handleEditModalCancel} handleEditForm={handleEditForm}/>}
      <button onClick={handleSeeMore} className="SeeMore">
        <IoMdMore className="SeeMoreSVG" />
      </button>
      <div className="SeeMoreModal">
        {user.isSeeMore && <SeeMore handleIsDeleteTrue={handleIsDeleteTrue} handleIsEditTrue={handleIsEditTrue}/>}
      </div>
    </div>
  );
}
