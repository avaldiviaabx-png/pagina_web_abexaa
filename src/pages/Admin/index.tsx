import React from 'react';
import GLBUploader from '../../components/GLBUploader';
import { Settings } from 'lucide-react';

const AdminPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Panel de Administración
          </h1>
          <p className="text-gray-600 text-lg">
            Gestiona los modelos 3D de tus productos
          </p>
        </div>

        <GLBUploader />

        <div className="mt-12 max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Cómo usar los archivos GLB subidos
          </h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold mb-2">1. Después de subir el archivo:</h3>
              <p className="text-sm">
                Copia la URL pública que se genera automáticamente.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">2. Actualiza tu producto:</h3>
              <p className="text-sm mb-2">
                Abre el archivo <code className="bg-gray-100 px-2 py-1 rounded text-xs">src/pages/Products/ProductCatalog.tsx</code>
              </p>
              <p className="text-sm">
                Encuentra el producto que deseas actualizar y pega la URL en el campo <code className="bg-gray-100 px-2 py-1 rounded text-xs">model3DUrl</code>
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Ejemplo:</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto">
{`{
  id: 'GPS ABEJA',
  name: 'GPS ABEJA',
  model3DUrl: 'https://tu-url-de-supabase.com/...', // ← Pega aquí
  // ... resto de campos
}`}
              </pre>
            </div>

            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Nota importante:</strong> Asegúrate de que el bucket "product-models" esté creado en Supabase y configurado como público.
                Visita tu panel de Supabase Storage para verificar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
