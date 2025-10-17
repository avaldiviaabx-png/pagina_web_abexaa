# Cómo Subir Archivos GLB - Guía Rápida

## Opción 1: Panel de Administración (Más Fácil)

### Paso 1: Configurar Supabase (Solo la primera vez)
1. Ve a: https://0ec90b57d6e95fcbda19832f.supabase.co
2. Ve a **Storage** → **New bucket**
3. Nombre: `product-models`
4. ✅ Marca: **Public bucket**
5. Clic en **Create bucket**

### Paso 2: Configurar Permisos Públicos
1. En el bucket `product-models`, ve a **Policies**
2. Clic en **New Policy** → **For full customization**
3. Agrega esta política:
   - Name: `Public Access`
   - Policy command: `SELECT`
   - Target roles: `public`
   - USING expression: `bucket_id = 'product-models'`
4. Guarda

### Paso 3: Subir tu Archivo GLB
1. Abre en tu navegador: `http://localhost:5173/admin`
2. Selecciona tu archivo GLB
3. Dale un nombre (ejemplo: `gps-abeja`)
4. Clic en **Subir Archivo**
5. **COPIA LA URL** que aparece

### Paso 4: Usar la URL
1. Abre: `src/pages/Products/ProductCatalog.tsx`
2. Busca tu producto
3. Pega la URL en `model3DUrl`:
```typescript
model3DUrl: 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/product-models/tu-archivo.glb'
```
4. Guarda el archivo
5. Listo! El modelo 3D aparecerá en tu producto

---

## Opción 2: URL Externa (Alternativa)

Si ya tienes el archivo GLB en otro lugar:

1. Sube tu archivo GLB a cualquier servicio (Dropbox, Google Drive, etc.)
2. Obtén la URL pública directa
3. Asegúrate que la URL termine en `.glb`
4. Pégala directamente en `model3DUrl`

Ejemplo:
```typescript
model3DUrl: 'https://mi-cdn.com/modelos/validador.glb'
```

---

## Verificar que Funciona

1. Ve a: `http://localhost:5173/products`
2. Haz clic en un producto que tenga `model3DUrl`
3. Clic en el botón **Vista 3D**
4. El modelo debería aparecer y poder rotarlo

---

## Solución Rápida de Problemas

❌ **No carga el modelo**
- Abre la URL del GLB en una nueva pestaña
- Si no descarga el archivo, la URL está mal

❌ **Error de permisos**
- Verifica que el bucket sea **público**
- Revisa las políticas de acceso

❌ **Archivo muy pesado**
- Los archivos GLB deberían ser < 10MB
- Usa herramientas de compresión si es necesario

---

## Formato de URL de Supabase

```
https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/product-models/[NOMBRE-ARCHIVO].glb
```

---

## Acceso al Panel de Admin

- **Local**: http://localhost:5173/admin
- **Producción**: https://tu-dominio.com/admin

---

## Archivos GLB Actuales

Los productos en `ProductCatalog.tsx` tienen estas rutas locales que puedes reemplazar:

1. `'/models/gps-abeja.glb'` → GPS ABEJA
2. `'/models/validador-mpos.glb'` → VALIDADOR MPOS
3. `'/models/impresora-prixon.glb'` → IMPRESORA PRIXON
4. `'/models/fuente-poder.glb'` → FUENTE DE PODER

Sube estos archivos y reemplaza las rutas con las URLs de Supabase.
