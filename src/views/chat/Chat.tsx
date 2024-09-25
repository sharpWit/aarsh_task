import { FC } from 'react';

interface Props {
  props: unknown;
}

const About: FC<Props> = ({ props }) => {
  console.log('PROPS: ', props);

  return <div>About</div>;
};

export default About;
