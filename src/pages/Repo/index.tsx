import React from 'react';
import {Link} from 'react-router-dom'

import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon } from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
      <RepoIcon/>
      <Link className={'username'} to={'/MathFerreira01'}>
          MatheFerreira01
      </Link>
      <span></span>

      <Link className={'reponame'} to={'/MathFerreira01/youtube-content'}> 
        youtube-content
      </Link>
      </Breadcrumb>

      <p>Contains all of my YouTube lessons code.</p>

      <Stats>
        <li>
          <StarIcon/>
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon/>
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/MathFerreira01'}>
        <GithubIcon/>
        <span>View on Github</span>
      </LinkButton>
    </Container>
  )
}

export default Repo;