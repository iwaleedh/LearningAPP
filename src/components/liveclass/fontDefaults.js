export const FONT_CATEGORIES = [
  {
    id: 'handwriting',
    label: 'Handwriting',
    fonts: [
      { id: 'patrick', name: 'Patrick Hand', value: "'Patrick Hand', cursive" },
      { id: 'caveat', name: 'Caveat', value: 'Caveat, cursive' },
      { id: 'kalam', name: 'Kalam', value: 'Kalam, cursive' },
      { id: 'indie', name: 'Indie Flower', value: "'Indie Flower', cursive" },
      { id: 'gloria', name: 'Gloria Hallelujah', value: "'Gloria Hallelujah', cursive" },
      { id: 'architects', name: 'Architects Daughter', value: "'Architects Daughter', cursive" },
      { id: 'shadows', name: 'Shadows Into Light', value: "'Shadows Into Light', cursive" },
      { id: 'handlee', name: 'Handlee', value: 'Handlee, cursive' },
      { id: 'dancing', name: 'Dancing Script', value: "'Dancing Script', cursive" },
      { id: 'permanent', name: 'Permanent Marker', value: "'Permanent Marker', cursive" },
      { id: 'schoolbell', name: 'Schoolbell', value: 'Schoolbell, cursive' },
      { id: 'amatic', name: 'Amatic SC', value: "'Amatic SC', cursive" },
      { id: 'comingsoon', name: 'Coming Soon', value: "'Coming Soon', cursive" },
      { id: 'cedarville', name: 'Cedarville Cursive', value: "'Cedarville Cursive', cursive" },
      { id: 'nothingyoucoulddo', name: 'Nothing You Could Do', value: "'Nothing You Could Do', cursive" },
      { id: 'satisfy', name: 'Satisfy', value: 'Satisfy, cursive' },
      { id: 'nanumpen', name: 'Nanum Pen Script', value: "'Nanum Pen Script', cursive" },
      { id: 'reenie', name: 'Reenie Beanie', value: "'Reenie Beanie', cursive" },
      { id: 'homemade', name: 'Homemade Apple', value: "'Homemade Apple', cursive" },
      { id: 'justanotherhand', name: 'Just Another Hand', value: "'Just Another Hand', cursive" },
      { id: 'coveredbyyourgrace', name: 'Covered By Your Grace', value: "'Covered By Your Grace', cursive" },
    ],
  },
  {
    id: 'sans',
    label: 'Sans',
    fonts: [
      { id: 'inter', name: 'Inter', value: 'Inter, sans-serif' },
      { id: 'nunito', name: 'Nunito', value: 'Nunito, sans-serif' },
      { id: 'poppins', name: 'Poppins', value: 'Poppins, sans-serif' },
      { id: 'roboto', name: 'Roboto', value: 'Roboto, sans-serif' },
      { id: 'opensans', name: 'Open Sans', value: "'Open Sans', sans-serif" },
      { id: 'lato', name: 'Lato', value: 'Lato, sans-serif' },
      { id: 'montserrat', name: 'Montserrat', value: 'Montserrat, sans-serif' },
      { id: 'worksans', name: 'Work Sans', value: "'Work Sans', sans-serif" },
      { id: 'dmsans', name: 'DM Sans', value: "'DM Sans', sans-serif" },
      { id: 'manrope', name: 'Manrope', value: 'Manrope, sans-serif' },
    ],
  },
  {
    id: 'serif',
    label: 'Serif',
    fonts: [
      { id: 'merriweather', name: 'Merriweather', value: 'Merriweather, serif' },
      { id: 'playfair', name: 'Playfair Display', value: "'Playfair Display', serif" },
      { id: 'lora', name: 'Lora', value: 'Lora, serif' },
      { id: 'librebaskerville', name: 'Libre Baskerville', value: "'Libre Baskerville', serif" },
      { id: 'cormorant', name: 'Cormorant Garamond', value: "'Cormorant Garamond', serif" },
      { id: 'crimson', name: 'Crimson Text', value: "'Crimson Text', serif" },
    ],
  },
  {
    id: 'mono',
    label: 'Mono',
    fonts: [
      { id: 'jetbrains', name: 'JetBrains Mono', value: "'JetBrains Mono', monospace" },
      { id: 'fira', name: 'Fira Code', value: "'Fira Code', monospace" },
      { id: 'ibmplexmono', name: 'IBM Plex Mono', value: "'IBM Plex Mono', monospace" },
      { id: 'sourcecodepro', name: 'Source Code Pro', value: "'Source Code Pro', monospace" },
      { id: 'spacemono', name: 'Space Mono', value: "'Space Mono', monospace" },
    ],
  },
  {
    id: 'dhivehi',
    label: 'ދިވެހި',
    fonts: [
      { id: 'faruma', name: 'ފާރުމާ (Faruma)', value: "'Noto Sans Thaana', 'MV Boli', sans-serif" },
    ],
  },
];

export const ALL_LIVE_CLASS_FONTS = FONT_CATEGORIES.flatMap((category) => category.fonts);

export const HANDWRITING_FONT_OPTIONS = FONT_CATEGORIES.find((category) => category.id === 'handwriting')?.fonts ?? [];

export const DEFAULT_LIVE_CLASS_FONT_FAMILY = HANDWRITING_FONT_OPTIONS[0]?.value || 'Inter, sans-serif';

export function getLiveClassFontLabel(fontFamily) {
  return ALL_LIVE_CLASS_FONTS.find((font) => font.value === fontFamily)?.name || 'Font';
}

export const DEFAULT_TEXT_FONT = {
  fontFamily: DEFAULT_LIVE_CLASS_FONT_FAMILY,
  fontSize: 24,
  fontWeight: 'normal',
  textDecoration: '',
  fontStyle: 'normal',
  textAlign: 'left',
  fill: '#1f2937',
};
