"use client";

import React from "react";
import ImageSelection from "./ImageSelection";
import RoomType from "./RoomType";
import DesignType from "./DesignType";

const CreateNewPageContainer = () => {
  const onHandleInputChange = (
    value: File | null | string,
    fieldName: string
  ) => {
    console.log("🚀 ~ onHandleInputChange ~ fieldName:", fieldName);
    console.log("🚀 ~ onHandleInputChange ~ value:", value);
  };

  return (
    <div>
      <h2 className="font-bold text-4xl text-primary text-center">
        Experience the Magic of AI Remodeling
      </h2>
      <p className="text-center text-gray-500">
        Transform any room with a click. Select a space, choose a style, and
        watch as AI instantly reimagines your environment.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
        <ImageSelection
          selectedImage={(value) => onHandleInputChange(value, "image")}
        />
        <div>
          <RoomType
            selectedRoomType={(value) => onHandleInputChange(value, "roomType")}
          />
          <DesignType />
        </div>
      </div>
    </div>
  );
};

export default CreateNewPageContainer;
