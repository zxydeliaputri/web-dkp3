import Image from "next/image";

export default function Slide() {
  return (
    <div className="container">
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <Image src="/Dkp3.jpeg" alt="" width="100%" height="50%" layout="responsive" />
          </div>
          <div className="carousel-item">
            <Image src="/me.png" alt="me" width="64" height="64" />
          </div>
          <div className="carousel-item">
            <Image src="/me.png" alt="me" width="64" height="64" />
          </div>
        </div>
      </div>
    </div>
  );
}
