import { useState, useCallback } from 'react';
import { toJson, JsonCells } from '../to-json';
import { useDropzone } from 'react-dropzone';
import { Container, Paper, Typography, Box } from '@mui/material';
import MonacoEditor from '@monaco-editor/react';

const XlsxToJson: React.FC = () => {
	const [cells, setCells] = useState<Partial<JsonCells>>({});

	const onDrop = useCallback((acceptedFiles: File[]) => {
		const file = acceptedFiles[0];
		const reader = new FileReader();

		reader.onload = async (e: ProgressEvent<FileReader>) => {
			if (e.target?.result instanceof ArrayBuffer) {
				const jsonCells = await toJson(e.target.result);
				setCells(jsonCells);
			}
		};

		reader.readAsArrayBuffer(file);
	}, []);

	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	return (
    <Container>
      <Paper
        {...getRootProps()}
        sx={{
          border: "2px dashed #007bff",
          padding: "40px",
          textAlign: "center",
          cursor: "pointer",
          marginBottom: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          transition: "background-color 0.3s",
          "&:hover": {
            backgroundColor: "#e0f7fa",
          },
        }}
      >
        <input {...getInputProps()} />
        <Typography
          variant="h6"
          color="textSecondary"
          sx={{ fontWeight: "bold" }}
        >
          여기에 파일을 드롭하거나 클릭하여 파일을 선택하세요.
        </Typography>
      </Paper>

      <Box sx={{ height: "400px", marginTop: "20px" }}>
        <MonacoEditor
          theme="vs-dark"
          height="80vh"
          language="json"
          value={JSON.stringify(cells, null, 2)}
          options={{
            readOnly: false,
            minimap: { enabled: false },
          }}
        />
      </Box>
    </Container>
  );
}

export default XlsxToJson;