import React, { useRef, useState } from 'react';
import { Upload, X, File, FileText, Image as ImageIcon, CheckCircle, AlertCircle } from 'lucide-react';

export interface UploadedFile {
  file: File;
  id: string;
  status: 'uploading' | 'success' | 'error';
  progress?: number;
  error?: string;
}

export interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in bytes
  maxFiles?: number;
  onFilesSelected?: (files: File[]) => void;
  onUpload?: (file: File) => Promise<void>;
  disabled?: boolean;
}

export default function FileUpload({
  accept,
  multiple = false,
  maxSize = 10 * 1024 * 1024, // 10MB default
  maxFiles = 5,
  onFilesSelected,
  onUpload,
  disabled = false,
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) return <ImageIcon className="h-5 w-5" />;
    if (file.type.includes('pdf')) return <FileText className="h-5 w-5" />;
    return <File className="h-5 w-5" />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const validateFile = (file: File): string | null => {
    if (maxSize && file.size > maxSize) {
      return `File size exceeds ${formatFileSize(maxSize)}`;
    }
    if (accept) {
      const acceptedTypes = accept.split(',').map(t => t.trim());
      const fileExtension = '.' + file.name.split('.').pop();
      const isAccepted = acceptedTypes.some(type => {
        if (type.startsWith('.')) return fileExtension === type;
        if (type.endsWith('/*')) return file.type.startsWith(type.replace('/*', ''));
        return file.type === type;
      });
      if (!isAccepted) {
        return 'File type not accepted';
      }
    }
    return null;
  };

  const handleFiles = async (files: FileList) => {
    const fileArray = Array.from(files);

    if (!multiple && fileArray.length > 1) {
      fileArray.splice(1);
    }

    if (uploadedFiles.length + fileArray.length > maxFiles) {
      alert(`Maximum ${maxFiles} files allowed`);
      return;
    }

    const newFiles: UploadedFile[] = fileArray.map(file => ({
      file,
      id: Math.random().toString(36).substring(2, 9),
      status: 'uploading' as const,
      progress: 0,
    }));

    // Validate files
    for (const uploadedFile of newFiles) {
      const error = validateFile(uploadedFile.file);
      if (error) {
        uploadedFile.status = 'error';
        uploadedFile.error = error;
      }
    }

    setUploadedFiles(prev => [...prev, ...newFiles]);
    onFilesSelected?.(fileArray);

    // Upload files
    if (onUpload) {
      for (const uploadedFile of newFiles) {
        if (uploadedFile.status !== 'error') {
          try {
            await onUpload(uploadedFile.file);
            setUploadedFiles(prev =>
              prev.map(f =>
                f.id === uploadedFile.id ? { ...f, status: 'success' as const, progress: 100 } : f
              )
            );
          } catch (error) {
            setUploadedFiles(prev =>
              prev.map(f =>
                f.id === uploadedFile.id
                  ? { ...f, status: 'error' as const, error: (error as Error).message }
                  : f
              )
            );
          }
        }
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (!disabled && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const removeFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== id));
  };

  return (
    <div className="w-full">
      {/* Drop Zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !disabled && fileInputRef.current?.click()}
        className={`
          border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 cursor-pointer
          ${isDragging ? 'border-accent-500 bg-accent-50' : 'border-paper-300 hover:border-paper-400'}
          ${disabled ? 'opacity-40 cursor-not-allowed' : ''}
        `}
      >
        <Upload className="h-10 w-10 text-ink-400 mx-auto mb-3" />
        <p className="text-sm font-medium text-ink-900 mb-1">
          Drop files here or click to browse
        </p>
        <p className="text-xs text-ink-500">
          {accept ? `Accepted: ${accept}` : 'Any file type'} • Max {formatFileSize(maxSize)}
        </p>
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleFileInput}
          disabled={disabled}
          className="hidden"
        />
      </div>

      {/* File List */}
      {uploadedFiles.length > 0 && (
        <div className="mt-4 space-y-2">
          {uploadedFiles.map((uploadedFile) => (
            <div
              key={uploadedFile.id}
              className="flex items-center gap-3 p-3 bg-white bg-subtle-grain border border-paper-200 rounded-lg"
            >
              <div className="flex-shrink-0 text-ink-600">
                {getFileIcon(uploadedFile.file)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-ink-900 truncate">
                  {uploadedFile.file.name}
                </p>
                <p className="text-xs text-ink-500">
                  {formatFileSize(uploadedFile.file.size)}
                  {uploadedFile.status === 'error' && uploadedFile.error && (
                    <span className="text-error-600 ml-2">{uploadedFile.error}</span>
                  )}
                </p>
              </div>
              <div className="flex-shrink-0 flex items-center gap-2">
                {uploadedFile.status === 'success' && (
                  <CheckCircle className="h-5 w-5 text-success-600" />
                )}
                {uploadedFile.status === 'error' && (
                  <AlertCircle className="h-5 w-5 text-error-600" />
                )}
                {uploadedFile.status === 'uploading' && (
                  <div className="h-5 w-5 border-2 border-accent-500 border-t-transparent rounded-full animate-spin" />
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(uploadedFile.id);
                  }}
                  className="text-ink-400 hover:text-ink-600 transition-colors"
                  aria-label="Remove file"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
