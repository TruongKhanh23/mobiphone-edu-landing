export default function formattedDescription(text) {
  if (!text) {
    return "";
  }
  return text.replace(/\n/g, "<br>");
}
