import React, { useEffect, useState } from 'react';
import '../styles/components/App.styl';
import getData from '../utils/getData'
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import {  UserProvider } from '../context/context';
import useGetData from '../utils/useGetData';

const ApiURL = 'http://localhost:3000/data';

const App = () => {

  // const [data, setData] = useState(null)

  // console.log(data);
  // useEffect(() => {
  //   getData(ApiURL).then(setData)
  // }, [])

  const data = useGetData(ApiURL);

  if (!data) return <div>Loading...</div>

  const {
    name,
    profession,
    address,
    email,
    website,
    phone,
    avatar,
    profile,
    certificate,
    academic,
    experience,
    skills,
    interest,
    languages,
    social,
  } = data;


  return (
    <>
      <Header avatar={avatar} name={name}>
        <About
            profession={profession}
            phone={phone}
            email={email}
            website={website}
            address={address}
            social={social}
        />
      </Header>
      <Profile />
      <div className="information-blocks">
        <div className="two-blocks">
          <Experience experience={experience}/>
          <Academic academic={academic}/>
        </div>
        <div className="three-blocks">
          <Skills skills={skills}/>
          <Interest interest={interest}/>
          <Languages languages={languages}/>
        </div>
      </div>
    </>
  )
  // : <div>Loading...</div>
};

export default App;
