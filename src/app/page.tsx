const fetchN = async () => {
  const res = await fetch("http://localhost:3000/api/notion");
  const data = await res.json();
  // return JSON.parse(data);
  return data
};

export default async function Home() {
  const data = await fetchN();
  return <div></div>;
}
