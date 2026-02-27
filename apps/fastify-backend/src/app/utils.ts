function toNumber(value?: string): number {
  return value ? Number(value) : 0;
}

function emptyToNull(value?: string): string | null {
  return value && value.trim().length > 0 ? value : null;
}

function stripHtml(text: string): string {
  return text.replace(/<[^>]*>/g, "").trim();
}

export {toNumber, emptyToNull, stripHtml}