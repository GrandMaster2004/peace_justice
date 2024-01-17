import { useState } from 'react'
import './App.css'
import Home from './component/Home'
import Card from './component/Card'

function App() {
  return (
    <>
      <div>
        <Home/>
        <div className="cards flex mt-10 justify-center">
          <Card title={`Our Value`} content={``}/>
          <Card title={`What We Do `} content={`Education and Awareness: We provide resources and information to empower individuals with the knowledge needed to understand and address issues related to justice, peace, and inclusivity.

Community Engagement: Through forums, events, and collaborations, we aim to build a global community of individuals dedicated to the principles of justice, peace, and inclusivity.

Advocacy and Action: We advocate for policies and initiatives that promote social justice and inclusivity. We encourage individuals to take meaningful action in their communities and beyond.`}/>
          <Card title={`Our Vision`} content={`A world where justice, peace, and inclusivity are not just ideals but the lived reality for all. We envision a future where every person has the opportunity to reach their full potential, free from discrimination and violence.

Join us in our journey towards creating a more just, peaceful, and inclusive world. Together, we can make a lasting impact and build a brighter future for generations to come.`}/>
        </div>
       
      </div>
      

    </>
  )
}

export default App
