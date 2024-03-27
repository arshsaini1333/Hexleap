import "./Bottom.css";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
export default function Bottom({ theme }) {
  return (
    <div className={`Bottom ${theme ? "dark" : "light"}`}>
      <div className="header">
        <h1>Collection Spotlight</h1>
        <p>
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
      </div>

      <div className="container">
        <div className="cards">
          {/* Card 1 */}
          <div className="card">
            <img src={img3} className="card-img-top" alt="Car-img" />
            <div className="card-body">
              <h6 className="card-title">Las Vegas Aviators</h6>
              <div className="content">
                <div className="span">
                  <span>OCT 15</span>
                  <span className="middle">SUN</span>
                  <span>4.30 PM</span>
                </div>
                <div className="text">
                  Las Vegas Ballpark, Las Vegas, Nevada
                </div>
              </div>
              <button type="button" class="btn btn-dark">
                Take Flight Collection
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img src={img2} className="card-img-top" alt="Car-img" />
            <div className="card-body">
              <h6 className="card-title">Sacramento River Cats</h6>
              <div className="content">
                <div className="span">
                  <span>OCT 15</span>
                  <span className="middle">SUN</span>
                  <span>4.30 PM</span>
                </div>
                <div className="text">
                  Sutter Health Park, Sacramento, California
                </div>
              </div>
              <button type="button" class="btn btn-dark">
                Take Flight Collection
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img src={img3} className="card-img-top" alt="Car-img" />
            <div className="card-body">
              <h6 className="card-title">Las Vegas Aviators</h6>
              <div className="content">
                <div className="span">
                  <span>OCT 15</span>
                  <span className="middle">SUN</span>
                  <span>4.30 PM</span>
                </div>
                <div className="text">
                  Las Vegas Ballpark, Las Vegas, Nevada
                </div>
              </div>
              <button type="button" class="btn btn-dark">
                Take Flight Collection
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card">
            <img src={img2} className="card-img-top" alt="Car-img" />
            <div className="card-body">
              <h6 className="card-title">Sacramento River Cats</h6>
              <div className="content">
                <div className="span">
                  <span>OCT 15</span>
                  <span className="middle">SUN</span>
                  <span>4.30 PM</span>
                </div>
                <div className="text">
                  Sutter Health Park, Sacramento, California
                </div>
              </div>
              <button type="button" class="btn btn-dark">
                Take Flight Collection
              </button>
            </div>
          </div>

          {/* Card 5 */}
          <div className="card">
            <img src={img3} className="card-img-top" alt="Car-img" />
            <div className="card-body">
              <h6 className="card-title">Las Vegas Aviators</h6>
              <div className="content">
                <div className="span">
                  <span>OCT 15</span>
                  <span className="middle">SUN</span>
                  <span>4.30 PM</span>
                </div>
                <div className="text">
                  Las Vegas Ballpark, Las Vegas, Nevada
                </div>
              </div>
              <button type="button" class="btn btn-dark">
                Take Flight Collection
              </button>
            </div>
          </div>

          {/* Card 6 */}
          <div className="card">
            <img src={img2} className="card-img-top" alt="Car-img" />
            <div className="card-body">
              <h6 className="card-title">Sacramento River Cats</h6>
              <div className="content">
                <div className="span">
                  <span>OCT 15</span>
                  <span className="middle">SUN</span>
                  <span>4.30 PM</span>
                </div>
                <div className="text">
                  Sutter Health Park, Sacramento, California
                </div>
              </div>
              <button type="button" class="btn btn-dark">
                Take Flight Collection
              </button>
            </div>
          </div>

          {/* Card 7 */}
          <div className="card">
            <img src={img3} className="card-img-top" alt="Car-img" />
            <div className="card-body">
              <h6 className="card-title">Las Vegas Aviators</h6>
              <div className="content">
                <div className="span">
                  <span>OCT 15</span>
                  <span className="middle">SUN</span>
                  <span>4.30 PM</span>
                </div>
                <div className="text">
                  Las Vegas Ballpark, Las Vegas, Nevada
                </div>
              </div>
              <button type="button" class="btn btn-dark">
                Take Flight Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
