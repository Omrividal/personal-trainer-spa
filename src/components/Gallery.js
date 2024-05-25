export default function Gallery(){
    return (
        <section id="gallery">
          <h2>חלק מהתהליך, לפני ואחרי</h2>
          <div className="gallery">
            <div className="before-after">
              <img src="/path/to/before.jpg" alt="Before" />
              <img src="/path/to/after.jpg" alt="After" />
            </div>
            {/* Repeat for more before/after results */}
          </div>
        </section>
      );
}