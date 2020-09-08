import { getFirestore } from "./../components/firebase/index";

export default function productsList() {
  const db = getFirestore();
  const itemCollection = db.collection("items");
  const priceyItems = itemCollection.where("price", "<", 3000);
  priceyItems.get().then((querySnapshot) => {
    if (!querySnapshot.size === 0) {
      console.log("no hay items");
    }
    const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(data)
    return data;
  });
}
