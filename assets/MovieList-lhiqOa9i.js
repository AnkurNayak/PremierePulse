import{u as l,j as e}from"./index-V0n-Iq7l.js";import{S as c,B as n}from"./Button-PoXAqODo.js";import{r as d,u as o}from"./useMovieContext-7Ng8b1h7.js";const m=({movie:s})=>{var a,r;const i=l(),t=()=>{i(`/moviedetail/${s.id}`)};return e.jsxs("div",{className:"card-normal bg-base-100 shadow-xl rounded-xl overflow-hidden",children:[e.jsx("figure",{children:e.jsx("img",{src:(a=s.image)==null?void 0:a.medium,alt:"movie",className:"w-full h-60 object-fill"})}),e.jsxs("div",{className:"card-body max-h-64",children:[e.jsx("h2",{className:"card-title flex w-full bg-sky-500 rounded-lg justify-center",children:s.name}),e.jsx("p",{className:"line-clamp-3 font-semibold",children:d(s.summary)}),e.jsxs("div",{className:"card-actions justify-between items-center",children:[e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx("img",{src:c,alt:"rating",className:"h-6 w-6"}),e.jsx("p",{className:"font-semibold",children:(r=s.rating)==null?void 0:r.average})]}),e.jsx(n,{className:"btn btn-primary",click:t,children:"Get Details"})]})]})]})},g=()=>{const{searchInput:s,movieList:i}=o(),t=()=>s?i.filter(r=>r.name.toLowerCase().includes(s.toLowerCase())):i;return e.jsx("div",{className:"grid grid-cols-4 grid-rows-4 gap-4 max-md:grid-cols-1",children:t().map(a=>e.jsx("div",{className:"mb-4",children:e.jsx(m,{movie:a})},a.id))})};export{g as default};