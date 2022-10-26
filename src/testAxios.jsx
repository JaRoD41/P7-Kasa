import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";
import Tag from "../../components/Tag/Tag";
import data from "../../datas/logements.json";

export default function FicheLogement() {
  const params = useParams();
  const navigate = useNavigate();
  const [lodging, setLodging] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/logements.json");
      if (res.status !== 200) {
        navigate("/404", { state: { message: "Can't get data" } });
      }
      console.log("res =>", res.data);
​
      res.data.map((e) => setPicckedAppart(e));
    };
    getData();
  }, []);

  const slidePics = lodging && lodging.pictures;
  const tags = lodging && lodging.tags;
  const equipments = lodging && lodging.equipments;
  const equip =
    lodging &&
    equipments.map((item, index) => (
      <li key={index} className="equipList">
        {item}
      </li>
    ));

  return (
    lodging && (
      <div key={params.id} className="fiche-container">
        <Carrousel slides={slidePics} />
        <section className="hostInfo-container">
          <div className="title-tags-container">
            <div className="title-container redFont">
              <h1>{lodging.title}</h1>
              <h3>{lodging.location}</h3>
            </div>
            <div className="tags-container">
              {tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          </div>
          <div className="rate-host-container">
            <div className="host-container redFont">
              <Host
                hostName={lodging.host.name}
                hostPic={lodging.host.picture}
              />
            </div>
            <div className="rate-container">
              <Rate score={lodging.rating} />
            </div>
          </div>
        </section>
        <div className="collapse-fiche-container">
          <Collapse aboutTitle="Description" aboutText={lodging.description} />
          <Collapse aboutTitle="Équipements" aboutText={equip} />
        </div>
      </div>
    )
  );
}
