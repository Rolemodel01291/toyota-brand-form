import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { Files } from '../../../../api';
import {
  Box,
  Card,
  CardContent,
  Chip,
  LinearProgress,
  Typography,
} from '@material-ui/core';
import { useEffect } from 'react';

const FileUpload = ({
  id,
  title,
  value,
  setValue,
  validate,
  multiple,
  required,
}) => {
  const submission = useSelector((store) => store.user);
  const maxSize = 10000000; // 10 Megabytes
  const [uploadPercent, setUploadPercent] = useState();
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (files.length === 0) {
      const savedFiles = (Array.isArray(value) ? value : [value]).filter(
        (file) => !!file
      );
      if (savedFiles.length > 0) {
        setFiles(savedFiles);
      }
    }
  }, [value]);

  const updateFileList = (updatedFiles) => {
    setFiles(updatedFiles);
    setValue(id, multiple ? updatedFiles : updatedFiles[0], {
      [Object.keys(validate)[0]]: updatedFiles.length > 0,
    });
  };

  const handleDelete = (deleteId) => () => {
    updateFileList(files.filter(({ id }) => id !== deleteId));
  };

  const onDrop = useCallback(
    async (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setUploadPercent(0);
        const formData = new FormData();
        acceptedFiles.forEach((file) => {
          formData.append('file', file);
        });
        const result = await Files.upload(
          submission.id,
          formData,
          (progressEvent) => {
            setUploadPercent(
              (progressEvent.loaded / progressEvent.total) * 100
            );
          }
        );
        const newFiles = result.map(({ id, filename }) => ({ id, filename }));
        updateFileList(multiple ? [...files, ...newFiles] : newFiles);
      }
    },
    [files]
  );

  const {
    isDragActive,
    getRootProps,
    getInputProps,
    isDragReject,
    rejectedFiles,
  } = useDropzone({
    onDrop,
    multiple: !!multiple,
    accept: ['image/*', 'application/pdf'],
    minSize: 0,
    maxSize,
  });

  const isFileTooLarge =
    rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;

  return (
    <Box mt={4}>
      <Card>
        <CardContent {...getRootProps()}>
          <Box>
            <input {...getInputProps()} />
            <Typography
              align={'center'}
              gutterBottom
              style={{ cursor: 'pointer' }}
            >
              {!isDragActive &&
                title + ': Click here or drop a file to upload!'}
              {isDragActive && !isDragReject && 'Drop the file to upload!'}
              {isDragReject && 'File type not accepted, sorry!'}
            </Typography>
            {isFileTooLarge && (
              <Typography color={'error'} align={'center'}>
                File is too large.
              </Typography>
            )}
          </Box>
          <Box align={'center'}>
            {files.map((file) => (
              <Chip
                label={file.filename}
                onDelete={handleDelete(file.id)}
                key={file.id}
              />
            ))}
          </Box>
          {required && files.length === 0 && (
            <p className="field-error">
              {multiple
                ? 'At least one document must be provided.'
                : 'You are required to provide this document as a minimum to proceed with the form.'}
            </p>
          )}
        </CardContent>
        {uploadPercent !== undefined && (
          <LinearProgress variant="determinate" value={uploadPercent} />
        )}
      </Card>
    </Box>
  );
};

export default FileUpload;
