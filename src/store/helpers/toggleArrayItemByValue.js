import deleteArrayItemByValue from "./deleteArrayItemByValue";

export default function toggleArrayItemByValue(collection, value) {
  if (collection.includes(value)) {
    deleteArrayItemByValue(collection, value);
  } else {
    collection.push(value);
  }
}
