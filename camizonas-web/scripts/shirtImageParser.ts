export interface ShirtImage {
  club: string;
  season: string;
  kitType: "local" | "visitante" | "tercera" | "cuarta" | "portero";
  version: "fan" | "jugador";
  view: "frontal" | "espalda" | "detalle-escudo" | "detalle-tela" | "otro";
  cloudinaryPublicId: string;
}

// ============================================
// DICCIONARIOS DE KEYWORDS
// ============================================

const CLUB_KEYWORDS: Record<string, string[]> = {
  "real-madrid": ["real-madrid", "realmadrid", "real madrid", "rmadrid", "rm"],
  "barcelona": ["barcelona", "barca", "fcb", "fc-barcelona"],
  "atletico-madrid": ["atletico", "atleti", "atletico-madrid", "atm"],
  "manchester-united": ["manchester-united", "man-united", "manutd", "mufc", "united"],
  "manchester-city": ["manchester-city", "man-city", "mancity", "mcfc", "city"],
  "liverpool": ["liverpool", "lfc"],
  "chelsea": ["chelsea", "cfc"],
  "arsenal": ["arsenal", "afc", "gunners"],
  "tottenham": ["tottenham", "spurs", "thfc"],
  "juventus": ["juventus", "juve", "jfc"],
  "ac-milan": ["ac-milan", "milan", "acm"],
  "inter-milan": ["inter-milan", "inter", "internazionale"],
  "psg": ["psg", "paris", "paris-saint-germain"],
  "bayern-munich": ["bayern", "bayern-munich", "fcb-munich"],
  "borussia-dortmund": ["dortmund", "bvb", "borussia"],
  "ajax": ["ajax", "afc-ajax"],
  "benfica": ["benfica", "slb"],
  "porto": ["porto", "fcp"],
  // Selecciones
  "argentina": ["argentina", "afa", "seleccion-argentina"],
  "brasil": ["brasil", "brazil", "cbf"],
  "alemania": ["alemania", "germany", "dfb"],
  "francia": ["francia", "france", "fff"],
  "espana": ["espana", "spain", "rfef", "la-roja"],
  "italia": ["italia", "italy", "azzurri"],
  "portugal": ["portugal", "fpf"],
  "mexico": ["mexico", "tri", "fmf"],
  "colombia": ["colombia", "fcf"],
  "guatemala": ["guatemala", "fedefut", "azul-y-blanco"],
};

const KIT_TYPE_KEYWORDS: Record<ShirtImage["kitType"], string[]> = {
  "local": ["local", "home", "casa", "1st", "primera"],
  "visitante": ["visitante", "away", "visita", "2nd", "segunda"],
  "tercera": ["tercera", "third", "3rd", "alternativa"],
  "cuarta": ["cuarta", "fourth", "4th", "special"],
  "portero": ["portero", "goalkeeper", "gk", "keeper", "arquero"],
};

const VERSION_KEYWORDS: Record<ShirtImage["version"], string[]> = {
  "fan": ["fan", "replica", "stadium", "supporter"],
  "jugador": ["jugador", "player", "match", "authentic", "pro", "elite"],
};

const VIEW_KEYWORDS: Record<ShirtImage["view"], string[]> = {
  "frontal": ["frontal", "front", "frente", "delantera", "1", "a"],
  "espalda": ["espalda", "back", "trasera", "atras", "2", "b"],
  "detalle-escudo": ["escudo", "badge", "crest", "logo", "shield"],
  "detalle-tela": ["tela", "fabric", "material", "texture", "detalle", "detail"],
  "otro": [],
};

const SEASON_PATTERNS = [
  /(\d{2})-(\d{2})/,           // 24-25, 25-26
  /(\d{4})-(\d{4})/,           // 2024-2025
  /(\d{4})-(\d{2})/,           // 2024-25
  /(\d{2})(\d{2})/,            // 2425
  /temporada[_-]?(\d{2,4})/i,  // temporada24, temporada-2024
];

// ============================================
// FUNCIONES AUXILIARES
// ============================================

/**
 * Normaliza un string a kebab-case lowercase
 */
function toKebabCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[_\s]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Extrae el club/selección del path o filename
 */
function extractClub(pathParts: string[], filename: string): string {
  const searchText = [...pathParts, filename].join(" ").toLowerCase();
  
  for (const [club, keywords] of Object.entries(CLUB_KEYWORDS)) {
    for (const keyword of keywords) {
      if (searchText.includes(keyword.toLowerCase())) {
        return club;
      }
    }
  }
  
  // Fallback: usar el nombre de la carpeta más probable
  const possibleClubFolder = pathParts.find(part => 
    part.length > 2 && 
    !part.match(/^\d+/) && 
    !["img", "images", "camisetas", "productos", "fan", "jugador"].includes(part.toLowerCase())
  );
  
  return possibleClubFolder ? toKebabCase(possibleClubFolder) : "desconocido";
}

/**
 * Extrae la temporada del path o filename
 */
function extractSeason(pathParts: string[], filename: string): string {
  const searchText = [...pathParts, filename].join(" ");
  
  for (const pattern of SEASON_PATTERNS) {
    const match = searchText.match(pattern);
    if (match) {
      // Normalizar a formato XX-XX
      let year1 = match[1];
      let year2 = match[2];
      
      // Si son 4 dígitos, tomar últimos 2
      if (year1.length === 4) year1 = year1.slice(-2);
      if (year2.length === 4) year2 = year2.slice(-2);
      
      // Si están pegados (2425), separar
      if (year1.length === 4 && !year2) {
        year2 = year1.slice(2);
        year1 = year1.slice(0, 2);
      }
      
      return `${year1}-${year2}`;
    }
  }
  
  // Fallback: temporada actual
  const currentYear = new Date().getFullYear();
  const nextYear = (currentYear + 1) % 100;
  return `${currentYear.toString().slice(-2)}-${nextYear.toString().padStart(2, "0")}`;
}

/**
 * Extrae el tipo de kit (local, visitante, etc.)
 */
function extractKitType(pathParts: string[], filename: string): ShirtImage["kitType"] {
  // Prioridad: filename > path
  const filenameSearch = filename.toLowerCase();
  const pathSearch = pathParts.join(" ").toLowerCase();
  
  // Buscar primero en filename
  for (const [kitType, keywords] of Object.entries(KIT_TYPE_KEYWORDS)) {
    for (const keyword of keywords) {
      if (filenameSearch.includes(keyword)) {
        return kitType as ShirtImage["kitType"];
      }
    }
  }
  
  // Luego en path
  for (const [kitType, keywords] of Object.entries(KIT_TYPE_KEYWORDS)) {
    for (const keyword of keywords) {
      if (pathSearch.includes(keyword)) {
        return kitType as ShirtImage["kitType"];
      }
    }
  }
  
  return "local"; // Default
}

/**
 * Extrae la versión (fan o jugador)
 */
function extractVersion(pathParts: string[], filename: string): ShirtImage["version"] {
  const filenameSearch = filename.toLowerCase();
  const pathSearch = pathParts.join(" ").toLowerCase();
  
  // Prioridad: filename > path
  for (const [version, keywords] of Object.entries(VERSION_KEYWORDS)) {
    for (const keyword of keywords) {
      if (filenameSearch.includes(keyword)) {
        return version as ShirtImage["version"];
      }
    }
  }
  
  for (const [version, keywords] of Object.entries(VERSION_KEYWORDS)) {
    for (const keyword of keywords) {
      if (pathSearch.includes(keyword)) {
        return version as ShirtImage["version"];
      }
    }
  }
  
  return "fan"; // Default
}

/**
 * Extrae el tipo de vista de la imagen
 */
function extractView(filename: string): ShirtImage["view"] {
  const filenameSearch = filename.toLowerCase();
  
  for (const [view, keywords] of Object.entries(VIEW_KEYWORDS)) {
    for (const keyword of keywords) {
      if (keyword && filenameSearch.includes(keyword)) {
        return view as ShirtImage["view"];
      }
    }
  }
  
  // Inferir por posición numérica en filename
  const numberMatch = filenameSearch.match(/[_-](\d)[_.-]/);
  if (numberMatch) {
    const num = parseInt(numberMatch[1]);
    if (num === 1) return "frontal";
    if (num === 2) return "espalda";
    if (num >= 3) return "detalle-tela";
  }
  
  return "frontal"; // Default para primera imagen
}

/**
 * Genera el Cloudinary Public ID
 */
function generateCloudinaryId(metadata: Omit<ShirtImage, "cloudinaryPublicId">): string {
  return `camisolas/${metadata.club}/${metadata.season}/${metadata.kitType}/${metadata.version}/${metadata.view}`;
}

// ============================================
// FUNCIÓN PRINCIPAL
// ============================================

/**
 * Parsea una ruta de archivo de imagen de camiseta y extrae metadatos
 * 
 * @param filePath - Ruta completa del archivo (ej: "C:\Users\...\real-madrid\fan\home-24-25-front.jpg")
 * @returns ShirtImage con todos los metadatos extraídos
 * 
 * @example
 * const result = parseShirtImagePath("C:/images/real-madrid/24-25/local/fan/frontal.webp");
 * // {
 * //   club: "real-madrid",
 * //   season: "24-25",
 * //   kitType: "local",
 * //   version: "fan",
 * //   view: "frontal",
 * //   cloudinaryPublicId: "camisolas/real-madrid/24-25/local/fan/frontal"
 * // }
 */
export function parseShirtImagePath(filePath: string): ShirtImage {
  // Normalizar separadores de path
  const normalizedPath = filePath.replace(/\\/g, "/");
  
  // Extraer partes del path y filename
  const parts = normalizedPath.split("/").filter(Boolean);
  const filenameWithExt = parts.pop() || "";
  
  // Remover extensión y hashes aleatorios
  const filename = filenameWithExt
    .replace(/\.(jpg|jpeg|png|webp|gif)$/i, "")
    .replace(/[_-][a-f0-9]{8,}$/i, "") // Remover hashes tipo _a1b2c3d4
    .replace(/[_-]\d{10,}$/i, "");      // Remover timestamps
  
  // Extraer metadatos
  const club = extractClub(parts, filename);
  const season = extractSeason(parts, filename);
  const kitType = extractKitType(parts, filename);
  const version = extractVersion(parts, filename);
  const view = extractView(filename);
  
  const metadata = { club, season, kitType, version, view };
  
  return {
    ...metadata,
    cloudinaryPublicId: generateCloudinaryId(metadata),
  };
}

/**
 * Parsea múltiples rutas de archivos
 */
export function parseShirtImagePaths(filePaths: string[]): ShirtImage[] {
  return filePaths.map(parseShirtImagePath);
}

/**
 * Valida si un path es una imagen válida
 */
export function isValidImagePath(filePath: string): boolean {
  return /\.(jpg|jpeg|png|webp|gif)$/i.test(filePath);
}

// ============================================
// UTILIDADES ADICIONALES
// ============================================

/**
 * Agrupa imágenes por club
 */
export function groupByClub(images: ShirtImage[]): Record<string, ShirtImage[]> {
  return images.reduce((acc, img) => {
    if (!acc[img.club]) acc[img.club] = [];
    acc[img.club].push(img);
    return acc;
  }, {} as Record<string, ShirtImage[]>);
}

/**
 * Agrupa imágenes por temporada
 */
export function groupBySeason(images: ShirtImage[]): Record<string, ShirtImage[]> {
  return images.reduce((acc, img) => {
    if (!acc[img.season]) acc[img.season] = [];
    acc[img.season].push(img);
    return acc;
  }, {} as Record<string, ShirtImage[]>);
}

/**
 * Filtra imágenes por criterios
 */
export function filterImages(
  images: ShirtImage[],
  criteria: Partial<Omit<ShirtImage, "cloudinaryPublicId">>
): ShirtImage[] {
  return images.filter(img => {
    for (const [key, value] of Object.entries(criteria)) {
      if (img[key as keyof ShirtImage] !== value) return false;
    }
    return true;
  });
}