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
            <div className="card-body bg-secondary text-white">
              <p>Dinas Ketahanan Pangan, Pertanian dan Perikanan mempunyai tugas pokok membantu wali kota melaksanakan urusan pemerintahan daerah dan tugas pembantuan di bidang pangan, pertanian dan sebagian urusan kelautan dan perikanan</p>
            </div>
          </div>

          <div className="card">
            <div className="card-header bg-dark text-white">
              <h3>VISI, MISI, dan MOTTO</h3>
            </div>
            <div className="card-body bg-info text-white">
              <div className="col-md-3 pt-3 pb-3 text-center bg-success">
                <h4>VISI</h4>
              </div>
              <p>&quot;Terwujudnya pelayanan sektor pangan, pertanian dan perikanan yang profesional&ldquot;</p>
              <div className="col-md-3 pt-3 pb-3 text-center bg-success">
                <h4>MISI</h4>
              </div>
              <p>
                <ol>
                  <li>Meningkatkan kualitas layanan pada sektor pangan, pertanian dan perikanan</li>
                  <li>Meningkatkan kualitas SDM pelayanan sektor pangan, pertanian dan perikanan</li>
                  <li>Menciptakan inovasi pelayanan</li>
                </ol>
              </p>
              <div className="col-md-3 pt-3 pb-3 text-center bg-success">
                <h4>MOTTO</h4>
              </div>
              <p>Cepat, Tepat, dan Profesional</p>
            </div>
          </div>

          <div className="card bg-dark text-white">
            <h3>Kontak</h3>
            <div className="row">
              <div className="col-md-6">
                <ul>
                  <li>
                    <i className="bi bi-globe"></i> https://dkp3.tasikmalayakota.go.id/
                  </li>
                  <li>
                    <i className="bi bi-pin-map"></i> Jl. Leuwidahu No.85, Parakannyasag, Kec. Indihiang, Kota Tasikmalaya, Jawa Barat 46151
                  </li>
                  <li>
                    <i className="bi bi-telephone"></i> (0265) 313024
                  </li>
                  <li>
                    <i className=" bi bi-envelope"></i> dkpp.tasikmalayakota@gamil.com
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li>
                    <i className="bi bi-instagram"></i> @dkp3.tasikmalayakota
                  </li>
                  <li>
                    <i className="bi bi-twitter"></i> @dkp3tasikkota
                  </li>
                  <li>
                    <i className="bi bi-facebook"></i> Dinas Ketahanan Pangan, Pertanian dan Perikanan Kota Tasikmalaya
                  </li>
                  <li>
                    <i className="bi bi-youtube"></i> DKP3 Kota Tasikmalaya
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
