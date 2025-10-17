import React, { useState } from 'react';
import { Upload, Check, X, Copy, Loader2 } from 'lucide-react';
import { uploadGLBFile } from '../lib/storage';

const GLBUploader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (!selectedFile.name.endsWith('.glb') && !selectedFile.name.endsWith('.gltf')) {
        setError('Por favor selecciona un archivo GLB o GLTF');
        return;
      }
      setFile(selectedFile);
      setFileName(selectedFile.name.replace(/\.(glb|gltf)$/i, ''));
      setError(null);
      setUploadedUrl(null);
    }
  };

  const handleUpload = async () => {
    if (!file || !fileName) {
      setError('Por favor selecciona un archivo y proporciona un nombre');
      return;
    }

    setUploading(true);
    setError(null);

    const result = await uploadGLBFile(file, fileName);

    setUploading(false);

    if (result.error) {
      setError(result.error);
    } else {
      setUploadedUrl(result.url);
      setFile(null);
      setFileName('');
    }
  };

  const handleCopyUrl = () => {
    if (uploadedUrl) {
      navigator.clipboard.writeText(uploadedUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setFile(null);
    setFileName('');
    setUploadedUrl(null);
    setError(null);
    setCopied(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Subir Modelo 3D</h2>
        <p className="text-gray-600">Sube archivos GLB o GLTF para usar en tus productos</p>
      </div>

      {!uploadedUrl ? (
        <div className="space-y-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
            <input
              type="file"
              accept=".glb,.gltf"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <Upload className="w-12 h-12 text-gray-400 mb-4" />
              <span className="text-gray-600 mb-2">
                {file ? file.name : 'Haz clic o arrastra un archivo GLB/GLTF'}
              </span>
              <span className="text-sm text-gray-400">
                Tamaño máximo: 50MB
              </span>
            </label>
          </div>

          {file && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre del archivo (sin extensión)
              </label>
              <input
                type="text"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                placeholder="ejemplo: gps-abeja"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}

          {error && (
            <div className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-lg">
              <X className="w-5 h-5" />
              <span>{error}</span>
            </div>
          )}

          <button
            onClick={handleUpload}
            disabled={!file || !fileName || uploading}
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
          >
            {uploading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Subiendo...</span>
              </>
            ) : (
              <>
                <Upload className="w-5 h-5" />
                <span>Subir Archivo</span>
              </>
            )}
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center gap-2 p-4 bg-green-50 text-green-700 rounded-lg">
            <Check className="w-5 h-5" />
            <span className="font-medium">Archivo subido exitosamente!</span>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              URL pública del modelo:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={uploadedUrl}
                readOnly
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm"
              />
              <button
                onClick={handleCopyUrl}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Copia esta URL y úsala en el campo <code className="bg-gray-100 px-2 py-1 rounded">model3DUrl</code> de tu producto
            </p>
          </div>

          <button
            onClick={handleReset}
            className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Subir Otro Archivo
          </button>
        </div>
      )}

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">Instrucciones:</h3>
        <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
          <li>Selecciona tu archivo GLB o GLTF</li>
          <li>Proporciona un nombre descriptivo (ej: validador-mpos)</li>
          <li>Haz clic en "Subir Archivo"</li>
          <li>Copia la URL generada</li>
          <li>Pega la URL en el campo model3DUrl de tu producto en ProductCatalog.tsx</li>
        </ol>
      </div>
    </div>
  );
};

export default GLBUploader;
