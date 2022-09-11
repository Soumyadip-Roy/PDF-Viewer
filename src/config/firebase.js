import 'firebase/app'
import {initializeApp} from 'firebase/app'

import 'firebase/storage'
import {getStorage} from 'firebase/storage'

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyDhLP3RcCODo0ee2aNUR8P95yk2cFvgTTg",
    authDomain: "pdf-viewer-29575.firebaseapp.com",
    projectId: "pdf-viewer-29575",
    storageBucket: "pdf-viewer-29575.appspot.com",
    messagingSenderId: "528503454047",
    appId: "1:528503454047:web:67722237c229c743bddeea",
    measurementId: "G-PC8X2SQHZ5"
})

const storage = getStorage(firebaseConfig);
export default storage;