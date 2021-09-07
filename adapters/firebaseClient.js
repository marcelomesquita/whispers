import firebase from 'firebase/app';
import 'firebase/analytics';

if (!firebase.apps.length) {
	firebase.initializeApp({
		apiKey: 'AIzaSyD1dAkdKv6DsjmuOq7Y2FqfP7KgjYAFxYQ',
		authDomain: 'whispers-com-br.firebaseapp.com',
		projectId: 'whispers-com-br',
		storageBucket: 'whispers-com-br.appspot.com',
		messagingSenderId: '591844498304',
		appId: '1:591844498304:web:6d99529644c982f4377f65',
		measurementId: 'G-KC9DEQZ0Y7',
	});
}

const analytics = firebase.analytics;

export { firebase, analytics };
