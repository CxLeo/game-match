export default async function getGamesCover() {
  const res = await fetch('http://localhost:8000/api/games/',{
    method:"GET"
  });
  const data = await res.json();
//   console.log(data);
  return data;
}
