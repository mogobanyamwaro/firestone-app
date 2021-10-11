import { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase-config';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'users');

  const [name, setName] = useState('');
  const [newage, setNewAge] = useState(0);

  // create new user
  const createUser = async (e) => {
    e.preventDefault();
    await addDoc(usersCollectionRef, { name: name, age: Number(newage) });
    setName('');
    setNewAge(0);
  };
  // update users
  const updateUser = async (id, age) => {
    const userDoc = doc(db, 'users', id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  // delete user
  const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc);
  };
  // get all users
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, [usersCollectionRef]);

  return (
    <div className="App">
      <form onSubmit={createUser}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={newage}
          onChange={(e) => setNewAge(e.target.value)}
          placeholder="enter age"
        />
        <button>create user</button>
      </form>
      {users.map((user) => {
        return (
          <div>
            <h1>Name:{user.name}</h1>
            <h1>Age:{user.age}</h1>
            <button onClick={() => updateUser(user.id, user.age)}>
              increase
            </button>
            <button onClick={() => deleteUser(user.id)}>delete user</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
