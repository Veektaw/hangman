import { languages } from "../languages";

export default function Languages() {
  const languageElements = languages.map((lang) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    return (
      <span className="chip" style={styles} key={lang.name}>
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
