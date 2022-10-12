import Container from "../components/layouts/Container";
import LinesDest from "../components/home/LinesDest";
import Galery from "../components/home/Galery";
import TestInfo from "../components/home/TestInfo";
import LastInfo from "../components/home/LastInfo";
import translations from "../staticTranslations.json";
import Banner from "../components/layouts/Banner";
import Videos from "../components/Videos";
import Contador from "../components/widtgets/Contador";

export default function index() {
  const text_home = translations?.text_home;

  return (
    <Container>
      <Banner></Banner>
      <LinesDest text={text_home?.line}></LinesDest>
      <div className="mt-5"></div>
      {/* <Galery text={text_home?.galery}></Galery> */}
      <Videos></Videos>
      <TestInfo text={text_home?.test}></TestInfo>
      <LastInfo
        textLeft={text_home?.left}
        textRight={text_home?.right}
      ></LastInfo>
      {/* <Contador></Contador> */}
    </Container>
  );
}
{
  /* <div className="container">
<div className="row m-0 p-0 d-flex justify-content-center ">
  {novedades?.map((item, index) => (
    <ItemList image={item.image} key={index}>
      {item.description}
    </ItemList>
  ))}
</div>
</div> */
}
