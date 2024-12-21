// Оголошуємо компонент Section, який буде відповідати за певну частину інтерфейсу.
const Section = () => {
  // Цей компонент повертає JSX (структуру HTML в React).

  return (
    <div>
      {/* Заголовок другого рівня (h2), який містить текст "Welcome" */}
      <h2>Welcome</h2>
      
      {/* Кнопка з текстом "click" */}
      <button>click</button>
      
      {/* Кнопка з текстом "hello" */}
      <button>hello</button>
      
      {/* Кнопка з текстом "submit" */}
      <button>submit</button>
      
      {/* Абзац (p), що містить текст Lorem ipsum, використовується як заповнювач контенту */}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident est fugit ullam accusamus dolorum, ducimus ipsum odio, tempora expedita ea amet sint, excepturi ut culpa aspernatur a obcaecati quas doloribus.</p>
      
      {/* Ще один абзац Lorem ipsum, який є додатковим заповнювачем */}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ratione tempore nemo quibusdam sit, ipsum veritatis obcaecati facilis fuga vitae, laboriosam dolorem cum, libero nisi eveniet hic dolore! Dolorem, tempore!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quae veritatis fugit laborum voluptatibus aspernatur, cupiditate sint voluptas pariatur eius amet quas ex a alias explicabo, eos repudiandae! Asperiores, accusantium?
      </p>
      
      {/* Третій абзац Lorem ipsum для заповнення контенту */}
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi dignissimos aperiam aliquid nemo vitae exercitationem libero. Amet, quisquam, sint veritatis itaque quae quod nam suscipit debitis obcaecati, sequi maxime? Aperiam!</p>
    </div>
  );
};

// Експортуємо компонент Section, щоб можна було використовувати його в інших частинах програми.
export default Section;
