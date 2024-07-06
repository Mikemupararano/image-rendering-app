import react from 'react'
import './App.css'

function Profile() {
  return (
    <img src="./src/assets/boarding.jpg" alt="This is what we called a boarding school at Rusambo Secondary School." />

  );
}
export default function Gallery() {
  return (
    <section>
      <h1>A boarding house at Rusambo Secondary School in Zimbabwe</h1>
      <Profile />
      <Profile />
      <Profile />
      <p>
        This is a typical building that we used as students as a boarding school at Rusambo Secondary School. Our homes were too far so lived in this building and with no adult supervision. The building had bushes around it, just like it looks in the photo.
      </p>
    </section>
  );
}