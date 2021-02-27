import firebase from "../Services/firebase";

export const getPost = async () => {
    const db = firebase.firestore();
    const postsRef = db.collection("posts");
    const snapshot = await postsRef.get();
    let data = [];
    snapshot.forEach((doc) => {
        data = data.concat(doc.data());
    });
    return data;
};

export const getPostById = async (pid) => {
    const db = firebase.firestore();
    let data = [];
    const postsRef = db.collection("posts");
    const snapshot = await postsRef
        .where("pid", "==", pid)
        .get();
    snapshot.forEach((doc) => {
        data = data.concat(doc.data());
    });
    return data;
};


export const getPostByTag = async (tag) => {
    const db = firebase.firestore();
    let data = [];
    const postsRef = db.collection("posts");
    const snapshot = await postsRef
        .where("tags", "array-contains", tag)
        .get();
    snapshot.forEach((doc) => {
        data = data.concat(doc.data());
    });
    return data;
}
// db.collection("posts")
//   .get()
//   .then((querySnapshot) => {
//     console.log(querySnapshot);
//   })
//   .catch((error) => {
//     message.error("Error getting documents: ", error);
//   });
