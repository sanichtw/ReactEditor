import styles from "./App.module.css";
import { CodeBar } from "./components/CodeBar/CodeBar";
import Header from "./components/Header/Header";
import Preview from "./components/Preview/Preview";
import { EditorProvider } from "./context/context";

function App() {
  return (
    <EditorProvider>
      <CodeBar />

      <main className={styles.main}>
        <Header />
        <Preview />
      </main>
    </EditorProvider>
  );
}

export default App;
