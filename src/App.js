import { GlobalStyle } from './styles/GlobalStyle';
import Quote from './sections/Quote';
import HeroSection from './sections/HeroSection';
import PhoneModel from './sections/PhoneModel'
import DesignSection from './sections/DesignSection';
import DisplaySection from './sections/DisplaySection'

function App() {
  return (
    <>
      <GlobalStyle />
      <Quote />
      <PhoneModel />
      <HeroSection />
      <DesignSection />
      <DisplaySection />
    </>
  );
}

export default App;
