import { languages } from "../languages";
import { clsx } from "clsx";

export default function Languages({ wrongGuessArray }) {
  const languageElements = languages.map((lang, index) => {
    const isLanguageLost = index < wrongGuessArray;
    const className = clsx("chip", isLanguageLost && "lost");
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    return (
      <span className={className} style={styles} key={lang.name}>
        {lang.name}
      </span>
    );
  });

  return (
    <>
      <section className="language-chips">{languageElements}</section>
    </>
  );
}
