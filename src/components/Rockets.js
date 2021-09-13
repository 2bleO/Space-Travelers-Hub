function RocketsPage() {
  const fetchItems = async () => {
    const data = await fetch('https://api.spacexdata.com/v3/rockets');
    const rockets = await data.json();
    console.log(rockets);
  };

  fetchItems();

  return (
    <div className="page">
      <h1>Fetch</h1>
    </div>
  );
}
export default RocketsPage;
