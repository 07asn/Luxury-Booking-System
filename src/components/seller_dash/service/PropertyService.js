import { ref, push, set, update, query, orderByChild, equalTo, onValue } from "firebase/database";
import { database } from "../../../fireBaseConfig";

export async function createProperty(data) {
  const newPropertyRef = push(ref(database, "products"));
  return set(newPropertyRef, { ...data, status: "pending", deleted: false });
}

export async function updateProperty(propertyId, data) {
  return update(ref(database, `products/${propertyId}`), data);
}

export async function softDeleteProperty(propertyId) {
  return update(ref(database, `products/${propertyId}`), { deleted: true });
}

export function subscribeToPropertiesBySeller(sellerId, callback) {
  const propertiesRef = ref(database, "products");

  /**
   * 1) Tells Firebase to sort the data by the seller field.
   * 2) Filters the sorted so only properties equals the provided sellerId.
   * 3) Store properties associated with the specified seller
   */
  const q = query(propertiesRef, orderByChild("seller"), equalTo(sellerId));


  return onValue(q, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const fetchedProperties = Object.keys(data)
        .map((key) => ({ id: key, ...data[key] }))
        .filter((prop) => !prop.deleted);
      callback(fetchedProperties);
    } else {
      callback([]);
    }
  });
}

export async function sendDepositRequest(propertyId, message) {
  return update(ref(database, `products/${propertyId}`), {
    depositRequest: message,
  });
}

export async function updateBlockedDates(propertyId, blockedDates) {
  return update(ref(database, `products/${propertyId}`), { blockedDates });
}

export async function updateProductBookedDates(propertyId, bookedDates) {
  return update(ref(database, `products/${propertyId}`), { bookedDate: bookedDates });
}
