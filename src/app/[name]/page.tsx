/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Manage } from "../_components/manage";

type PageProps = {
    params: {
        name: string;
    };
};

export default async function Page(props: PageProps) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.params.name}`)
    const data = await res.json()

    return(
        <div className="px-20 py-5">
            <p>{data.name}</p>
            <img src={data.sprites.front_default} alt=""/>
            <Link href="/">Back</Link>
            <Manage name={props.params.name}/>
        </div>
    )
}