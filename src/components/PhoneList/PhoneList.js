// 경로 : src/components/PhoneList/PhoneList.js

import React from "react";
import "./PhoneList.css";
import PhoneItem from "../PhoneItem";

const PhoneList = ({ list, deleteItem }) => {
  return (
    <div className="phone_list">
      {/* Object.values()를 통해 Json 데이터의 value값으로만 이루어져 있는 배열 만듦 */}
      {Object.values(list).map(item => {
        return <PhoneItem {...item} key={item.id} onClick={deleteItem} />;
      })}
    </div>
  );
};

export default PhoneList;