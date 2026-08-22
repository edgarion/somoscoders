export class ProfanityService {
  // Lista de palabras malsonantes comunes (ejemplo básico)
  // En un entorno real se usaría un diccionario más amplio o una librería de NLP.
  private static readonly BANNED_WORDS = [
    'idiota', 'estupido', 'estúpido', 'imbecil', 'imbécil',
    'mierda', 'cabron', 'cabrón', 'puta', 'puto', 'joder',
    'coño', 'pendejo', 'pendeja', 'gilipollas'
  ];

  /**
   * Verifica si un texto contiene palabras malsonantes.
   * @param text El texto a evaluar
   * @returns true si contiene groserías, false en caso contrario
   */
  static containsProfanity(text: string): boolean {
    if (!text) return false;
    
    // Normalizar el texto (quitar acentos, pasar a minúsculas)
    const normalizedText = text.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    return this.BANNED_WORDS.some(word => {
      const normalizedWord = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      // Usar expresión regular para buscar la palabra exacta (word boundary)
      const regex = new RegExp(`\\b${normalizedWord}\\b`, 'i');
      return regex.test(normalizedText);
    });
  }

  /**
   * Reemplaza las palabras malsonantes por asteriscos.
   * @param text El texto a censurar
   * @returns El texto con las palabras censuradas
   */
  static censorText(text: string): string {
    if (!text) return text;

    let censoredText = text;
    this.BANNED_WORDS.forEach(word => {
      // Regex que respeta mayúsculas/minúsculas pero busca la palabra exacta
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      censoredText = censoredText.replace(regex, (match) => '*'.repeat(match.length));
    });

    return censoredText;
  }
}
