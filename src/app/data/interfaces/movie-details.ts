export interface MovieDetails {
    adult:boolean;
    backdrop_path:string;
    belongs_to_collection:string;
    budget:number;
    genres:any;
    homepage:string;
    id:number;
    original_country:any;
    original_language:string;
    original_title:string;
    overview:string;
    popularity:number;
    poster_path:string;
    production_companies:any;
    production_countries:any;
    release_date:string;
    runtime:number;
    spoken_languages:any;
    status:string;
    tag_line:string;
    title:string;
}

export interface MovieCardDetails {
    id: number,
    original_title: string,
    overview: string,
    poster_path: string,
    release_date: string,
};
