import type { Component } from "solid-js";
import { createSignal, createEffect, createMemo } from 'solid-js';

type Props = {
  name: string;
  appCount: number;
}

const Detail: Component<Props> = (props) => {
  const [count, setCount] = createSignal(0);

  createEffect(() => console.log(`createEffect: ${count()}`));

  // const totalCount = createMemo(() => props.appCount + count());
  const totalCount = createMemo(() => props.appCount);

  function handleClick() {
    setCount(count() + 1)
  }

  console.log('count: ', count());
  return (
    <>
      <div onClick={() => handleClick()}>Hello {props.name}</div>
      <br />
      <div>AppCount {props.appCount}</div>
      <br />
      <div>DetailCount {count}</div>
      <br />
      <div>TotalCount {totalCount()}</div>
    </>
  )
}

export default Detail;
