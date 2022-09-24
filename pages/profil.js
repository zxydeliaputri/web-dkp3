import Nav from "../components/Nav";

export default function Profil() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header bg-dark text-white">
              <h3>Sekilas DKP3</h3>
            </div>
            <div className="card-body bg-secondary text-dark">
              <p>Dinas Ketahanan Pangan, Pertanian dan Perikanan mempunyai tugas pokok membantu wali kota melaksanakan urusan pemerintahan daerah dan tugas pembantuan di bidang pangan, pertanian dan sebagian urusan kelautan dan perikanan</p>
            </div>
          </div>

          <div className="card">
            <div className="card-header bg-dark text-white">
              <h3>VISI, MISI, dan MOTTO</h3>
            </div>
            <div className="card-body bg-primary">
              <div className="col-md-3 pt-3 pb-3 text-center text-dark bg-success">
                <h4>VISI</h4>
              </div>
              <p>" Terwujudnya pelayanan sektor pangan, pertanian dan perikanan yang profesional "</p>
              <div className="col-md-3 pt-3 pb-3 text-center text-dark bg-success">
                <h4>MISI</h4>
              </div>
              <p>
                <ol>
                  <li>Meningkatkan kualitas layanan pada sektor pangan, pertanian dan perikanan</li>
                  <li>Meningkatkan kualitas SDM pelayanan sektor pangan, pertanian dan perikanan</li>
                  <li>Menciptakan inovasi pelayanan</li>
                </ol>
              </p>
              <div className="col-md-3 pt-3 pb-3 text-center text-dark bg-success">
                <h4>MOTTO</h4>
              </div>
              <p>Cepat, Tepat, dan Profesional</p>
            </div>
          </div>

          <div className="card bg-dark text-white">
            <h3>Kontak</h3>
            <p>
              <ol>
                <li></li>
              </ol>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
