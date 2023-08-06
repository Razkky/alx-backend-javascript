import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let body;
  let firstName;
  let lastName;

  return uploadPhoto()
    .then((response) => {
      body = response.body;
      createUser()
        .then((response) => {
	  firstName = response.firstName;
	  lastName = response.lastName;
	  console.log(`${body} ${firstName} ${lastName}`);
        })
        .catch(() => console.log('Signup system offline'));
    })
    .catch(() => console.log('Signup system offline'));
}
