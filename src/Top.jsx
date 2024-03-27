import "./Top.css";
import img1 from "./assets/card1.png";
import img2 from "./assets/card2.png";
import img3 from "./assets/card3.png";
import img4 from "./assets/img1.png";
export default function Top({ theme }) {
  return (
    <div className={`Top ${theme ? "dark" : "light"}`}>
      <div className="cards">
        {/* Card 1 */}
        <div className="card">
          <img src={img1} className="card-img-top" alt="Car-img" />
          <div className="card-body">
            <h6 className="card-title">Sacramento River Cats</h6>
            <div className="content">
              <div className="Events">
                <div className="headingss">Total Events</div>
                <div className="values">48 Events</div>
              </div>
              <div className="Category">
                <div className="headingss">Sports</div>
                <div className="values">Baseball</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img src={img2} className="card-img-top" alt="Car-img" />
          <div className="card-body">
            <h6 className="card-title">Las Vegas Aviators</h6>
            <div className="content">
              <div className="Events">
                <div className="headingss">Total Events</div>
                <div className="values">48 Events</div>
              </div>
              <div className="Category">
                <div className="headingss">Sports</div>
                <div className="values">Baseball</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img src={img3} className="card-img-top" alt="Car-img" />
          <div className="card-body">
            <h6 className="card-title">Sacramento River Cats</h6>
            <div className="content">
              <div className="Events">
                <div className="headingss">Total Events</div>
                <div className="values">48 Events</div>
              </div>
              <div className="Category">
                <div className="headingss">Sports</div>
                <div className="values">Baseball</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card">
          <img src={img2} className="card-img-top" alt="Car-img" />
          <div className="card-body">
            <h6 className="card-title">Las Vegas Aviators</h6>
            <div className="content">
              <div className="Events">
                <div className="headingss">Total Events</div>
                <div className="values">48 Events</div>
              </div>
              <div className="Category">
                <div className="headingss">Sports</div>
                <div className="values">Baseball</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="card ad">
          <img src={img4} className="card-img-top" alt="Car-img" />
          <div className="card-body">
            <h6 className="card-title">Advertisement Title</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="buttn">
        <button type="button" className="btn btn-primary">
          See More
        </button>
      </div>
    </div>
  );
}
