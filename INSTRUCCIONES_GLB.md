# Guía: Cómo Subir y Usar Archivos GLB en tu Aplicación

## Método 1: Usando el Panel de Administración (Recomendado)

### Paso 1: Configurar Supabase Storage

1. Ve a tu panel de Supabase: https://0ec90b57d6e95fcbda19832f.supabase.co
2. Navega a **Storage** en el menú lateral
3. Crea un nuevo bucket llamado `product-models`
4. **Importante**: Marca el bucket como **público**
5. Configura las políticas de acceso:
   - Permite lectura pública: `SELECT` para `public`
   - Permite escritura para usuarios autenticados (opcional)

### Paso 2: Subir Archivos GLB

#### Opción A: Usar el Panel de Administración Web

1. Navega a: `http://localhost:5173/admin` (o tu dominio en producción)
2. Selecciona tu archivo GLB o GLTF
3. Proporciona un nombre descriptivo (ejemplo: `gps-abeja`)
4. Haz clic en "Subir Archivo"
5. **Copia la URL generada**

#### Opción B: Subir Manualmente desde Supabase

1. Ve a Storage > product-models en tu panel de Supabase
2. Haz clic en "Upload file"
3. Selecciona tu archivo GLB
4. Una vez subido, haz clic en el archivo
5. Copia la URL pública

### Paso 3: Actualizar el Producto

1. Abre el archivo: `src/pages/Products/ProductCatalog.tsx`
2. Encuentra el producto que quieres actualizar
3. Pega la URL en el campo `model3DUrl`

```typescript
{
  id: 'GPS ABEJA',
  name: 'GPS ABEJA',
  model3DUrl: 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/product-models/gps-abeja.glb',
  // ... resto de campos
}
```

## Método 2: Usar URLs Externas Directamente

Si tus archivos GLB ya están alojados en otro servicio (Dropbox, Google Drive, CDN, etc.):

1. Asegúrate de que la URL sea pública y accesible
2. Verifica que el servicio permita CORS para cargar en navegadores
3. Copia la URL directa al archivo GLB
4. Pégala en el campo `model3DUrl` de tu producto

Ejemplo:
```typescript
model3DUrl: 'https://mi-cdn.com/modelos/validador.glb'
```

## Formato de URLs de Supabase Storage

Las URLs de Supabase Storage siguen este formato:

```
https://[PROJECT_REF].supabase.co/storage/v1/object/public/[BUCKET_NAME]/[FILE_NAME]
```

Para tu proyecto:
```
https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/product-models/nombre-del-archivo.glb
```

## Verificación

Después de actualizar el `model3DUrl`:

1. Guarda el archivo `ProductCatalog.tsx`
2. Navega a la página de productos
3. Haz clic en un producto con modelo 3D
4. Cambia a la vista 3D
5. El modelo debería cargar correctamente

## Solución de Problemas

### El modelo 3D no carga

1. **Verifica la URL**: Abre la URL en una nueva pestaña del navegador. Debería descargar o mostrar el archivo.

2. **Verifica CORS**: Si usas un servicio externo, asegúrate de que permita CORS.

3. **Verifica el bucket**: En Supabase, asegúrate de que el bucket `product-models` sea público.

4. **Verifica el archivo**: Los archivos GLB deben ser válidos. Puedes probarlos en [gltf-viewer](https://gltf-viewer.donmccurdy.com/)

### Error de permisos en Supabase

Si ves errores de permisos:

1. Ve a Storage > product-models > Policies
2. Crea una política de lectura pública:
   ```sql
   CREATE POLICY "Public Access"
   ON storage.objects FOR SELECT
   TO public
   USING (bucket_id = 'product-models');
   ```

## Optimización de Archivos GLB

Para mejor rendimiento:

1. **Comprime tus modelos**: Usa herramientas como [gltf-pipeline](https://github.com/CesiumGS/gltf-pipeline)
2. **Reduce polígonos**: Mantén los modelos bajo 100K polígonos
3. **Optimiza texturas**: Usa texturas de tamaño razonable (1024x1024 o menor)
4. **Usa formato GLB**: Es más eficiente que GLTF con archivos externos

## Comandos Útiles

### Comprimir un archivo GLB
```bash
npx gltf-pipeline -i input.glb -o output.glb -d
```

### Validar un archivo GLB
```bash
npx gltf-validator input.glb
```

## Acceso al Panel de Administración

- **Desarrollo**: http://localhost:5173/admin
- **Producción**: https://tu-dominio.com/admin

## Notas Importantes

- Los archivos GLB pueden ser grandes. Considera límites de almacenamiento de Supabase.
- Supabase Free tier incluye 1GB de almacenamiento.
- Cada archivo GLB debería ser menor a 10MB para mejor experiencia de usuario.
- El bucket debe ser público para que los visitantes vean los modelos 3D.
- Las URLs de Supabase son permanentes y no cambian.

## Soporte

Si tienes problemas:
1. Verifica la consola del navegador (F12) para ver errores
2. Revisa que el bucket de Supabase esté configurado correctamente
3. Verifica que la URL del archivo GLB sea accesible públicamente
