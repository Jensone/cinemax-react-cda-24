interface Card {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
}

interface Movies {
    movies: Card[];
}

export default function Card({ movies }: Movies) {
    return (
        <section className="flex flex-col gap-10 mb-24">
            {movies.map((card) => (
                <article 
                key={card.imdbID} // La clé qui rend unique l'élément
                className="flex transition bg-white">
                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                    <time className="flex items-center justify-between gap-4 text-xs font-bold text-gray-900 uppercase"
                    >
                    <span>{card.Year}</span>
                    <span className="flex-1 w-px bg-gray-900/10"></span>
                    <span>{card.imdbID}</span>
                    </time>
                </div>

                <div className="hidden sm:block sm:basis-56">
                    <img
                    alt={card.Title}
                    src={
                        card.Poster ? card.Poster : "https://placehold.co/330x330?text=No+image"
                    }
                    className="object-cover w-full h-full aspect-square"
                    />
                </div>

                <div className="flex flex-col justify-between flex-1">
                    <div className="p-4 border-s border-gray-900/10 sm:border-l-transparent sm:p-6">
                    
                        <h3 className="font-bold text-gray-900 uppercase">
                            {card.Title}
                        </h3>
                    

                    <p className="mt-2 text-gray-700 line-clamp-3 text-sm/relaxed">
                        Il s'agit d'un film ou épisode de {card.Year}.
                    </p>
                    </div>

                    <div className="sm:flex sm:items-end sm:justify-end">
                    <a
                        href={"https://www.imdb.com/title/" + card.imdbID}
                        target="_blank"
                        className="block px-5 py-3 text-xs text-center uppercase transition text-slate-50 bg-gradient-to-r from-red-700 to-amber-500 hover:bg-gradient-to-b hover:from-amber-500 hover:to-red-700"
                    >
                        Voir plus
                    </a>
                    </div>
                </div>
                </article>
            ))}

        </section>
    );
}
