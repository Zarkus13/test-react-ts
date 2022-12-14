import React from 'react';

interface Props {
  title: string,
  subTitle?: string
}

const HelloWorld: React.FC<Props> = (props: Props) =>
  <>
    <h1>{props.title}</h1>
    {props.subTitle &&
      <h2>{props.subTitle}</h2>
    }
  </>;

export default HelloWorld;