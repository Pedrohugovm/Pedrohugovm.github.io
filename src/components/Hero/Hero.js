import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bem vindo ao <br />
        Meu Portfolio
      </SectionTitle>
      <SectionText>
        Meu nome é Pedro Hugo e sou estagiário de desenvolvimento web para a EPD-VR.
      </SectionText>
      <a href="https://linktr.ee/pedrodexter" target="_blank">
      <Button>Meu Link Tree</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;