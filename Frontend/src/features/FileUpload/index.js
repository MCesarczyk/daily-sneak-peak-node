import { useState } from "react";

const FileUpload = ({ id }) => {
  const [image, setImage] = useState({ preview: '', data: '' });
  const [status, setStatus] = useState('idle');

  const handleFileChange = e => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData()
    formData.append('file', image.data)
    const response = await fetch(`/api/put/children/${id}/add-picture`, {
      method: 'POST',
      body: formData,
      type: 'image/jpeg'
    })
    if (response) setStatus(response.statusText)
  }

  return (
    <div>
      {image.preview && <img src={image.preview} />}
      <form onSubmit={handleSubmit}>
        <input type='file' name='file' onChange={handleFileChange}></input>
        <button type='submit'>Uplodas</button>
        {status && <span>{status}</span>}
      </form>
    </div>
  )
};

export default FileUpload;