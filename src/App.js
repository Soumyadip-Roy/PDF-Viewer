import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from "react";
import { Button } from "./components/Button";
import { Modal } from "./components/Modal";

import { getDownloadURL, ref} from 'firebase/storage'
import storage from './config/firebase'

function App() {

  const [modal, setModal]=useState(false);

  const [pdf, setPdf]=useState(null);
  const [pdf2, setPdf2]=useState(null);

  useEffect(()=>{
    getDownloadURL(ref(storage, 'Notice 108_2022.pdf')).then((url)=>{
      setPdf(url);
    })
  },[])

  return (
    <div className="container">
      <h2>Notices</h2>
      <br></br>
      <Button setModal={setModal} message="Notice 108"/>
      {modal===true&&(
        <Modal setModal={setModal} pdf={pdf}/>
      )}
      <br></br>
    </div>
  );
}

export default App;