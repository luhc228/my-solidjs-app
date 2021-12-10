import type { Component } from "solid-js";
import { createSignal, createEffect } from 'solid-js';

type Props = {
  name: string;
  appCount: number;
}

const Detail: Component<Props> = (props) => {
  const [count, setCount] = createSignal(0);

  function handleClick() {
    setCount(count() + 1)
  }

  createEffect(() => console.log(`createEffect: ${count()}`));

  console.log('count: ', count());
  return (
    <>
      <div onClick={() => handleClick()}>Hello {props.name}</div>
      <br />
      <div>AppCount {props.appCount}</div>
      <br />
      <div>DetailCount {count}</div>
    </>
  )
}

export default Detail;
