import React from 'react';
import { Button } from '@mui/material';
import AvatarEditor from 'react-avatar-editor';
import Dropzone from 'react-dropzone'
import { AVATAR_UPLOAD_URL } from '../../assets/links';
import { ButtonsWrapper, FileInput, UploaderWrapper } from './styled';

class AvatarUploader extends React.Component {
  state = {
    image: '',
    fileName: ''
  };

  avatarFileName = `${Date.now().toString()}-${Math.random().toString().substring(2)}`;

  onImageSelect = (e) => {
    this.setState({
      image: e.target.files[0],
      fileName: this.avatarFileName
    });
  };

  onImageDrop = (dropped) => {
    this.setState({
      image: dropped[0],
      fileName: this.avatarFileName
    })
  };

  onImageSave = async () => {
    if (this.editor) {
      const canvasScaled = this.editor.getImageScaledToCanvas();
      const convertedFile = await canvasScaled.toDataURL();

      const response = await fetch(AVATAR_UPLOAD_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'image': convertedFile,
          'name': this.state.fileName
        })
      })

      if (response?.statusText === "OK") {
        this.props.onAvatarChange(this.state.fileName);
      }
    }
  };

  setEditorRef = (editor) => (this.editor = editor);
  setInputRef = (input) => (this.input = input);

  render() {
    return (
      <UploaderWrapper>
        <div>
          <Dropzone
            onDrop={this.onImageDrop}
            noClick
            noKeyboard
            style={{ width: "350px", height: "350px" }}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <AvatarEditor
                  ref={this.setEditorRef}
                  image={this.state.image}
                  width={200}
                  height={200}
                  border={40}
                  scale={1.8}
                  rotate={0}
                />
                <input {...getInputProps()} />
              </div>
            )}
          </Dropzone>
          <ButtonsWrapper>
            <FileInput
              ref={this.setInputRef}
              name="file"
              type="file"
              onChange={this.onImageSelect}
            />
            <Button onClick={() => this.input.click()}>SELECT FILE</Button>
            <Button onClick={this.onImageSave}>UPLOAD</Button>
          </ButtonsWrapper>
        </div>
      </UploaderWrapper>
    )
  }
}

export default AvatarUploader;