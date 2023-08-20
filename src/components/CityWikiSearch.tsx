import { Space, Button } from "antd";

const CityWikiSearch: React.FC = () => {
  const generateCity = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8080/geonames-all-cities-with-a-population-1000.json"
      );
      if (!response.ok) {
        throw new Error("Response not ok");
      }

      const data = await response.json();
      console.log(data);
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
