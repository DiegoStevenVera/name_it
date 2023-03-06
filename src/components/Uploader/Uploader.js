import React, { useState } from "react";

const UploadAndDisplayImage = () => {

  const [selectedImage, setSelectedImage] = useState(null);
  const [petName, setPetName] = useState(null);

  const setImageAction = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", selectedImage);

    fetch("http://127.0.0.1:8000/API/V1/name/predict", {
      method: "post",
      body: formData
    })
    .then(response => response.json())
    .then(result => {
        setPetName(result.name);
        console.log('Success:', result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const clear = () => {
    setSelectedImage(null);
    setPetName(null);
  }

  return (
    <div>
      <h1>Selecciona una imagen para darle nombre</h1>

      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => clear()}>Remove</button>
        </div>
      )}
      <div>{petName}</div>
      <br />
      <br />
      <form onSubmit={setImageAction}>
        <input
        type="file"
        name="myImage"
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
        }}
        />
        <br />
        <br />
        <button type="submit" name="upload">
        Upload
        </button>
    </form>

      
    </div>
  );
};

export default UploadAndDisplayImage;