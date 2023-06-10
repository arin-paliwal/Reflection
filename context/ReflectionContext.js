import { collection, getDocs } from "firebase/firestore";
import { createContext } from "react";
import { db } from "@/firebase";
import { useState, useEffect } from "react";
const ReflectionContext = createContext();
const Provider = ({ children }) => {
  const [Users, setUsers] = useState([]);
  const [Posts, setPosts] = useState([]);
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

  return (
    <ReflectionContext.Provider value={{ Posts, Users }}>
      {children}
    </ReflectionContext.Provider>
  );
};

export { ReflectionContext, Provider };
