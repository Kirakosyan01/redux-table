import React, { useState } from "react";
import "./actionButtons.css";
import { IoMdMore } from "react-icons/io";
import SeeMore from "../SeeMore/SeeMore";
import { useDispatch, useSelector } from "react-redux";
import DeleteConform from "../DeleteConform/DeleteConform";

export default function ActionButtons({ user }) {
  const [isDelete, setIsDelete] = useState(false);
  const dispatch = useDispatch();
  const handleSeeMore = () => {
    dispatch({ type: "IsSeeMoreOpen", payload: user.id });
  };
  const handleIsDeleteTrue = () => {
    setIsDelete(true);
  };
  const handleDeleteModalCancel = () => {
    setIsDelete(false)
  }
  const handleIsDeleteModalTrue = () => {
    dispatch({type: "USER_DELETE", payload: user.id});
    setIsDelete(false)
  }

  return (
    <div className="ActionButtons">
      {isDelete && <DeleteConform handleDeleteModalCancel={handleDeleteModalCancel} handleIsDeleteModalTrue={handleIsDeleteModalTrue}/>}
      <button onClick={handleSeeMore} className="SeeMore">
        <IoMdMore className="SeeMoreSVG" />
      </button>
      <div className="SeeMoreModal">
        {user.isSeeMore && <SeeMore handleIsDeleteTrue={handleIsDeleteTrue} />}
      </div>
    </div>
  );
}
