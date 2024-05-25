export default function Contact(){
    return (
        <section id="contact">
          <h2>בואו נדבר</h2>
          <form>
            <label>
              שם מלא
              <input type="text" name="name" />
            </label>
            <label>
              אימייל
              <input type="email" name="email" />
            </label>
            <label>
              טלפון
              <input type="phone" name="phone" />
            </label>
            <label>
              הודעה
              <textarea name="message"></textarea>
            </label>
            <button type="submit">לילוש, תדברי איתי בבקשה!</button>
          </form>
        </section>
      );
}