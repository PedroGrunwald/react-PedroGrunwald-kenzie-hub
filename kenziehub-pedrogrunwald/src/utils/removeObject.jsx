export function removeObject(arr, id) {
    const object = arr.findIndex((item) => item.id === id);
    arr.splice(object, 1);
  
    return arr;
  }
  