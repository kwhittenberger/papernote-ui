
import React, { useState, useRef, DragEvent } from 'react';
import { Upload, X } from 'lucide-react';

export interface DropZoneProps {
  /** Callback when files are dropped or selected */
  onDrop: (files: File[]) => void;
  /** Accepted file types (e.g., 'image/*', '.pdf', etc.) */
  accept?: string;
  /** Maximum number of files */
  maxFiles?: number;
  /** Maximum file size in bytes */
  maxSize?: number;
  /** Allow multiple files */
  multiple?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Show file preview */
  showPreview?: boolean;
  /** Custom class name */
  className?: string;
}

export default function DropZone({
  onDrop,
  accept,
  maxFiles,
  maxSize,
  multiple = true,
  disabled = false,
  showPreview = true,
  className = '',
}: DropZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Validate files
  const validateFiles = (fileList: File[]): { valid: File[]; errors: string[] } => {
    const validFiles: File[] = [];
    const newErrors: string[] = [];

    for (const file of fileList) {
      // Check max files
      if (maxFiles && validFiles.length >= maxFiles) {
        newErrors.push(`Maximum ${maxFiles} files allowed`);
        break;
      }

      // Check file size
      if (maxSize && file.size > maxSize) {
        const sizeMB = (maxSize / (1024 * 1024)).toFixed(2);
        newErrors.push(`${file.name} exceeds maximum size of ${sizeMB}MB`);
        continue;
      }

      // Check file type
      if (accept) {
        const acceptedTypes = accept.split(',').map((t) => t.trim());
        const fileExtension = '.' + file.name.split('.').pop();
        const mimeType = file.type;

        const isAccepted = acceptedTypes.some((type) => {
          if (type.startsWith('.')) {
            return fileExtension.toLowerCase() === type.toLowerCase();
          }
          if (type.endsWith('/*')) {
            return mimeType.startsWith(type.replace('/*', ''));
          }
          return mimeType === type;
        });

        if (!isAccepted) {
          newErrors.push(`${file.name} is not an accepted file type`);
          continue;
        }
      }

      validFiles.push(file);
    }

    return { valid: validFiles, errors: newErrors };
  };

  // Handle drop
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (disabled) return;

    const droppedFiles = Array.from(e.dataTransfer.files);
    const { valid, errors: validationErrors } = validateFiles(droppedFiles);

    setErrors(validationErrors);

    if (valid.length > 0) {
      const newFiles = multiple ? [...files, ...valid] : valid;
      setFiles(newFiles);
      onDrop(newFiles);
    }
  };

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files ? Array.from(e.target.files) : [];
    const { valid, errors: validationErrors } = validateFiles(selectedFiles);

    setErrors(validationErrors);

    if (valid.length > 0) {
      const newFiles = multiple ? [...files, ...valid] : valid;
      setFiles(newFiles);
      onDrop(newFiles);
    }

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Remove file
  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    onDrop(newFiles);
  };

  // Drag handlers
  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Format file size
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className={className}>
      {/* Drop Zone */}
      <div
        onDrop={handleDrop}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onClick={() => !disabled && fileInputRef.current?.click()}
        className={`
          relative border-2 border-dashed rounded-lg p-8
          text-center cursor-pointer transition-all
          ${isDragging
            ? 'border-accent-500 bg-accent-50'
            : disabled
            ? 'border-paper-300 bg-paper-100 cursor-not-allowed'
            : 'border-paper-300 hover:border-accent-400 hover:bg-accent-50/50'
          }
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          className="hidden"
        />

        <div className="flex flex-col items-center gap-3">
          <Upload
            className={`h-12 w-12 ${
              isDragging ? 'text-accent-500' : 'text-ink-400'
            }`}
          />
          <div>
            <p className="text-sm font-medium text-ink-900">
              {isDragging ? 'Drop files here' : 'Click to upload or drag and drop'}
            </p>
            <p className="text-xs text-ink-600 mt-1">
              {accept && `Accepted: ${accept}`}
              {maxSize && ` • Max size: ${formatFileSize(maxSize)}`}
              {maxFiles && ` • Max files: ${maxFiles}`}
            </p>
          </div>
        </div>
      </div>

      {/* Errors */}
      {errors.length > 0 && (
        <div className="mt-3 space-y-1">
          {errors.map((error, index) => (
            <p key={index} className="text-xs text-error-600">
              {error}
            </p>
          ))}
        </div>
      )}

      {/* File Preview */}
      {showPreview && files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-paper-50 border border-paper-200 rounded-lg"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-ink-900 truncate">{file.name}</p>
                <p className="text-xs text-ink-600">{formatFileSize(file.size)}</p>
              </div>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="ml-3 text-error-500 hover:text-error-700 transition-colors"
                aria-label="Remove file"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
