import React from 'react';
import { Button } from '@mui/material';
import AvatarEditor from 'react-avatar-editor';
import { AVATAR_UPLOAD_URL } from '../../assets/links';
import { ButtonsWrapper, FileInput, UploaderWrapper } from './styled';

class AvatarUploader extends React.Component {
  state = {
    image: ''
  };

  onImageSave = async () => {
    if (this.editor) {
      const canvasScaled = this.editor.getImageScaledToCanvas();
      const convertedFile = await canvasScaled.toDataURL();

      const response = await fetch(`${AVATAR_UPLOAD_URL}/${this.props.id}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'image': convertedFile
        })
      })
      if (response?.statusText === "OK") console.log("uploaded");
    }
  }

  setEditorRef = (editor) => (this.editor = editor);
  setInputRef = (input) => (this.input = input);

  render() {
    return (
      <UploaderWrapper>
        <div>
          <AvatarEditor
            ref={this.setEditorRef}
            image={this.state.image}
            width={200}
            height={200}
            border={40}
            scale={1.8}
            rotate={0}
          />
          <ButtonsWrapper>
            <FileInput
              ref={this.setInputRef}
              name="file"
              type="file"
              onChange={(e) => this.setState({ image: e.target.files[0] })}
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

{/* <Input
        ref={uploadRef}
        onChange={e => { onChange([...e.target.files]) }}
        type="file"
        fileUploader
        multiple
      />
      <Button 
        round
        fileUploader
        onClick={() => uploadRef.current.click()}
      ></Button> */}