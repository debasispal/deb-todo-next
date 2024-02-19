import Image from "next/image";
import styles from "./page.module.css";
import TodoApp from './components/TodoApp';


export default function Home() {
  return (
    <main>
       <TodoApp/>
    </main>
  );
}
