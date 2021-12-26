export default function deleteArrayItemByValue(collection, value) {
  const index = collection.indexOf(value);
  if (index === -1) return;
  collection.splice(index, 1);
}
