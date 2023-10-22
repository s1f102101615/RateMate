/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Button, Paper, Typography } from '@mui/material';
import { useCallback, useState } from 'react';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file !== null && file !== undefined && file.type.startsWith('image/')) {
      setSelectedFile(file);
    }
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file !== null && file !== undefined && file.type.startsWith('image/')) {
      setSelectedFile(file);
    }
  };

  const onUploadClick = useCallback(() => {
    // ここで実際のアップロード処理を行う
    if (selectedFile) {
      console.log('Uploading:', selectedFile);
      // 通常はAPIへのPOSTリクエストなど
    }
  }, [selectedFile]);

  return (
    <div>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="raised-button-file"
        type="file"
        onChange={onFileChange}
      />
      <label htmlFor="raised-button-file">
        <Button component="span">画像を選択</Button>
      </label>
      <Paper
        variant="outlined"
        onDragOver={onDragOver}
        onDrop={onDrop}
        style={{
          height: 200,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid black',
        }}
      >
        {selectedFile ? (
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="uploaded image"
            style={{ height: 200 }}
          />
        ) : (
          <Typography>ここに画像をドロップ</Typography>
        )}
      </Paper>
      <Button variant="contained" color="primary" onClick={onUploadClick} disabled={!selectedFile}>
        アップロード
      </Button>
    </div>
  );
};

export default ImageUpload;
