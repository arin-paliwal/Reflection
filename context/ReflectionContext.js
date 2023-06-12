import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { createContext } from "react";
import { auth, db, provider } from "@/firebase";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
const ReflectionContext = createContext();
const Provider = ({ children }) => {
  const [Users, setUsers] = useState([]);
  const [Posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    // this function runs when there is a change in users each time it refreshes
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "Users"));
      setUsers(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              ...doc.data(),
            },
          };
        })
      );
    };
    getUsers();
  }, []);
  useEffect(() => {
    const getPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "Articles"));
      setPosts(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              body: doc.data().body,
              brief: doc.data().brief,
              category: doc.data().category,
              postLength: doc.data().postLength,
              bannerImage: doc.data().bannerImage,
              title: doc.data().title,
              // comments:doc.data().comments,
              postedOn: doc.data().postedOn.toDate(),
              author: doc.data().author,
            },
          };
        })
      );
    };
    getPosts();
  }, []);

  const addUserToFirebase = async (user) => {
    const email = user.email;
    const name = user.displayName;
    const imageUrl = user.photoURL;
    const followerCount = 1000;
    console.log(user, email, name, imageUrl, followerCount);
    await setDoc(doc(db, "Users", email), {
      email: email,
      followerCount: followerCount,
      imageUrl: imageUrl,
      name: name,
    });
  };
  const handleUserAuthentication = async () => {
    const userData = await signInWithPopup(auth, provider);
    const user = userData.user;
    setCurrentUser(user);
    addUserToFirebase(user);
  };

  return (
    <ReflectionContext.Provider
      value={{ Posts, Users, handleUserAuthentication, currentUser }}
    >
      {children}
    </ReflectionContext.Provider>
  );
};

export { ReflectionContext, Provider };
