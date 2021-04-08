import React from 'react';
import Title from '../Title';
import Grid from './Grid';
import { copywrites } from '../../datafiles/copywrites';

const SectionGrid = (props) => {
  return (
    <section className='title'>
      {copywrites.map((copywrites, index) => {
        if (copywrites.section === props.section)
          return <Title key={copywrites.id} {...copywrites}></Title>;
      })}
      <Grid filter={props.filter} />
    </section>
  );
};

export default SectionGrid;