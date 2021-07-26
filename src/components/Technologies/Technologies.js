import React from 'react';
import { DiFirebase, DiGitBranch, DiPhp, DiPostgresql, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br />
    <SectionTitle>Tecnologias</SectionTitle>
    <SectionText>
      Durante minha jornada, já trabalhei com stacks Front-End e também experimentei o desenvolvimento Mobile.
    </SectionText>
    <List>
    <ListItem>
        <DiPhp size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiência com <br />
            HTML, CSS, Bootstrap, Javascript, JQuery, Flutter.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPostgresql size="3rem"/>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experiência com <br />
            MySQL, PostgreSQL, DBeaver.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGitBranch size="3rem"/>
        <ListContainer>
          <ListTitle>Frameworks e outros</ListTitle>
          <ListParagraph>
            Experiência com <br />
            Laravel (PHP), Git (Github e Gitlab).
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
