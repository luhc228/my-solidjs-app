import type { Component } from "solid-js";
import { createSignal } from 'solid-js';
import Detail from './Detail';
import logo from "./logo.svg";
import styles from "./App.module.css";

const App: Component = () => {
  const [appCount, setAppCount] = createSignal(0);
  const [randomCount, setRandomCount] = createSignal(Math.random());

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />

        <Detail name="solid.js" appCount={appCount()}/>
        <p onClick={() => setAppCount(appCount() + 1)}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <p onClick={() => setRandomCount(Math.random())}>Click Random Count {randomCount}</p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
