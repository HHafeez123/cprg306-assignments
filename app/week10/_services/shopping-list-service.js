import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "../_utils/firebase";

export async function getItems(userId) {
  const items = [];

  try {
    const q = query(collection(db, `users/${userId}/items`));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        data: doc.data(),
      });
    });
  } catch (error) {
    console.error("Error getting items:", error);
  }

  return items;
}

export async function addItem(userId, item) {
  try {
    const docRef = await addDoc(collection(db, `users/${userId}/items`), item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    return null;
  }
}

// New function to delete an item for a specific user
export async function deleteItem(userId, itemId) {
  try {
    await deleteDoc(doc(db, `users/${userId}/items/${itemId}`));
    console.log("Item deleted successfully");
  } catch (error) {
    console.error("Error deleting item:", error);
  }
}
