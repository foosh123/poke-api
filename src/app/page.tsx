import Link from "next/link";
import SearchBar from "./_components/search";

type PageProps = {
    searchParams: {
        q?: string;
    };
};

export default async function Home(props: PageProps) {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")

  const data = await response.json();


  const pokemons = data.results.filter(({name} : {name: string}) =>
      name.includes(props.searchParams.q ?? "".toLowerCase())
    );

  return (
    <div className="flex flex-col px-20 py-5">
      <SearchBar />
      {pokemons.map(({name}:{name: string} )=> (
          <Link key={name} href={`/${name}`}>
            <div>{name}</div>
          </Link>
        ))} 
    </div>
  )
}
