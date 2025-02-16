import Header from "./components/header";
import Keyboard from "./components/keyboard";
import Languages from "./components/langauges";
import WinsState from "./components/winState";
import Word from "./components/word";

export default function Main() {
  return (
    <main>
      <Header />
      <WinsState />
      <Languages />
      <Word />
      <Keyboard />
    </main>
  );
}
