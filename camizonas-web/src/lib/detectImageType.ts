export type ImageType =
  | "frontal"
  | "espalda"
  | "detalle-escudo"
  | "detalle-tela";

const IMAGE_KEYWORDS: Record<ImageType, string[]> = {
  frontal: ["frontal", "front"],
  espalda: ["espalda", "back"],
  "detalle-escudo": ["escudo", "badge"],
  "detalle-tela": ["tela", "fabric", "texture"],
};

export function detectImageType(publicId: string): ImageType | null {
  const name = publicId.toLowerCase();

  for (const [type, keywords] of Object.entries(IMAGE_KEYWORDS)) {
    if (keywords.some((keyword) => name.includes(keyword))) {
      return type as ImageType;
    }
  }

  return null;
}