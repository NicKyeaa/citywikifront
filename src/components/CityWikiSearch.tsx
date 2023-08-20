import { Space, Button } from "antd";

const CityWikiSearch: React.FC = () => {
  const generateCity = async () => {
    try {
      const response = await fetch(
        "/geonames-all-cities-with-a-population-1000.json"
      );
      if (!response.ok) {
        throw new Error("Response not ok");
      }

      const cities = await response.json();
      console.log(cities);
      const randomIndex = Math.floor(Math.random() * cities.length);
      const randomItem = cities[randomIndex];
      console.log("Random City:", randomItem);
    } catch (error) {
      console.error("Error fatching data:", error);
    }
  };

  return (
    <>
      <Space direction='vertical'>
        <Button type='primary' onClick={generateCity}>
          Primary Button
        </Button>
      </Space>
    </>
  );
};

export default CityWikiSearch;
