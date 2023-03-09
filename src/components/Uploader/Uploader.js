import React, { useState } from "react";
import './Uploader.css'

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
        setPetName('Error con el servicio consultado');
        console.error('Error:', error);
      });
  };

  const clear = () => {
    setSelectedImage(null);
    setPetName(null);
  }

  return (
    <div class="imgUploader">
      <h1>Selecciona una imagen para darle nombre</h1>

      {selectedImage && (
        <div>
          <img
            alt="not found"
            class='imgLoad'
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button id='removeButton' className="buttonLoad" onClick={() => clear()}>Remover</button>
        </div>
      )}
      <div class='petName'>{petName}</div>
      <br />
      <br />
      <form onSubmit={setImageAction}>
        <label for="myFile" class="customButton">Seleccionar imagen</label>
        <input
        type="file"
        name="myImage"
        id="myFile"
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
        }}
        />
        <br />
        <br />
        <button className="buttonLoad" type="submit" name="upload">
        Predecir
        </button>
    </form>

      
    </div>
  );
};

export default UploadAndDisplayImage;