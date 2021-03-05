import firebase from "../Services/firebase";

export const getPost = async () => {
    const db = firebase.database();
    const rootRef = db.ref();
    const data = [];
    const postRef = await rootRef.child("posts");
    await postRef.get().then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
            data.push(childSnapshot.val());
        });
    });
    return data;
};

export const getPostById = async (pid) => {
    const db = firebase.database();
    const rootRef = db.ref();
    const data = {};
    const postRef = await rootRef.child("posts");
    await postRef
        .orderByChild("pid")
        .equalTo(pid)
        .once("child_added", (snapshot) => {
            Object.assign(data, snapshot.val());
        });
    return data;
};

export const getPostByTag = async (tag) => {
    const db = firebase.database();
    const rootRef = db.ref();
    const data = [];
    const postRef = await rootRef.child("posts");
    await postRef.get().then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        if(childSnapshot.val().tags.includes(tag)) {
            data.push(childSnapshot.val())
        }
      });
    });
    return data;
};
// db.collection("posts")
//   .get()
//   .then((querySnapshot) => {
//     console.log(querySnapshot);
//   })
//   .catch((error) => {
//     message.error("Error getting documents: ", error);
//   });
