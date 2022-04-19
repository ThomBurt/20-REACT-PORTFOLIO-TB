import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([

    { name: 'portfolio', description: 'portfolio of my work' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Portfolio></Portfolio>
          </>
        ) : (
            <ContactForm></ContactForm>
            
          )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
