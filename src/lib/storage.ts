import { supabase } from './supabase';

export const STORAGE_BUCKET = 'product-models';

export interface UploadResult {
  url: string | null;
  error: string | null;
}

export const uploadGLBFile = async (file: File, fileName: string): Promise<UploadResult> => {
  try {
    const fileExt = file.name.split('.').pop();
    const filePath = `${fileName}.${fileExt}`;

    const { data, error } = await supabase.storage
      .from(STORAGE_BUCKET)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true
      });

    if (error) {
      return { url: null, error: error.message };
    }

    const { data: urlData } = supabase.storage
      .from(STORAGE_BUCKET)
      .getPublicUrl(data.path);

    return { url: urlData.publicUrl, error: null };
  } catch (error) {
    return {
      url: null,
      error: error instanceof Error ? error.message : 'Error desconocido al subir archivo'
    };
  }
};

export const getPublicUrl = (filePath: string): string => {
  const { data } = supabase.storage
    .from(STORAGE_BUCKET)
    .getPublicUrl(filePath);

  return data.publicUrl;
};

export const deleteFile = async (filePath: string): Promise<{ error: string | null }> => {
  try {
    const { error } = await supabase.storage
      .from(STORAGE_BUCKET)
      .remove([filePath]);

    if (error) {
      return { error: error.message };
    }

    return { error: null };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : 'Error desconocido al eliminar archivo'
    };
  }
};

export const listFiles = async (): Promise<{ files: string[]; error: string | null }> => {
  try {
    const { data, error } = await supabase.storage
      .from(STORAGE_BUCKET)
      .list();

    if (error) {
      return { files: [], error: error.message };
    }

    return { files: data.map(file => file.name), error: null };
  } catch (error) {
    return {
      files: [],
      error: error instanceof Error ? error.message : 'Error desconocido al listar archivos'
    };
  }
};
