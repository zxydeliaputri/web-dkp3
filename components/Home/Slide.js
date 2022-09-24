import Image from "next/image";

export default function Slide() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="true">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image src="/Dkp3.jpeg" alt="" width="100%" height="50%" layout="responsive" />
              </div>
              <div className="carousel-item">
                <Image src="/kwt.jpeg" alt="me" width="1500%" height="750%" />
              </div>
              <div className="carousel-item">
                <Image src="/ktt.jpeg" alt="me" width="1500%" height="750%" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
