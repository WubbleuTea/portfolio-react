import React from 'react';

function About() {
  return (
    <section>
      <img 
          src={require(`../../assets/hero/headshot.jpeg`)}
          className='headshot'
          alt='Joshua Weisbrod-Torres' 
      />
      <p>Joshua Weisbrod-Torres is a Full Stack Web Developer with experience as an educator who is passionate about learning and teaching others. Known for strong creativity, problem solving skills, and handling multiple tasks at once. Superior knowledge in music and the arts. Graduate of the Full Stack Development program through the University of Texas at Austin.</p>
      <p>He is starting his sixth year of teaching and his second year in Duncanville ISD, where is teaching at Reed Middle School and Brandenburg Intermediate.  He received his Bachelors degree in Music Studies with All-Level Teacher Certification and his Masters Degree in Music Education with Instrumental Emphasis both from Texas State University. During his undergrad, Joshua performed at the 2011 TMEA conference and the 2011 National CBDNA conference in Seattle, Washington with the Texas State Wind Ensemble. Joshua is included in Recordings of Texas State’s top band The Music of Charles L. Booker, Jr., Vol. 4: Radiant Blues, Fanfare, and LIVE! He has been featured as a soloist in ensembles around the Central Texas area including the Cinematic Symphony, Heights Concert Band, and the Texas State Wind Symphony. His chamber music ensembles have won fellowships to attend the University of Nebraska CMI. He also performed at the International Saxophone Symposium hosted by the Navy Band, won a classical group Downbeat, and judged the Calefax Composers’ Competition. As a soloist, Joshua has won the classical soloist Downbeat and received honorable mention in many other competitions.</p>
      <p>His teaching experiences include graduate teaching assistant at Texas State University where he taught the undergraduate woodwind pedagogue classes, Red Oak High School where he taught the third band and beginner woodwind classes, elementary music in Killeen Independent School District, private lesson and masterclass teaching. He also has experience as an instrument repair technician. Joshua was raised in Killeen, Texas and attended C.E. Ellison High School.  He had the pleasure of learning saxophone under Dr. Todd Oxford and clarinet from Mr. Steve Girko during his time at Texas State and had the chance to perform master classes with Chien-Kwan Lin and David Maslanka. Joshua’s Texas State ensemble experiences include award winning Phoenix Saxophone Quartet, Mezcolanza Reed Quintet, Wind Symphony/Wind Ensemble, Symphony Orchestra, Symphonic Winds, and Jazz Orchestra. In the past he has been involved heavily with community ensembles like the Heights Concert Band and the Cinematic Symphony.</p>
    </section>
  )
}

export default About;