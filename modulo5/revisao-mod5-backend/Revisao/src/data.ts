import { movie, character, GENDER } from './types';
export const movies:movie[] = [
{
    id:1,
    title:"X-Man",
    year: 2000
},
{
    id: 2,
    title: "Deadpool",
    year: 2018
}

];

export const characters:character[] = [
{
    id:1,
    name:"Storm",
    gender: GENDER.FEMALE
},
{
    id:2,
    name:"Deadpool",
    gender: GENDER.OTHER,
    description: "SEXY MOFO"
},
{
    id:3,
    name:"Collossos",
    gender: GENDER.MALE
}


]