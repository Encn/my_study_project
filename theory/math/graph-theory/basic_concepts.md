# basic concepts of graph

Pn(V) standards for the set of all n-elements subsets of the set V.

## simple graph

Simple graph G = (V, E),

(i) V is a finite set
    called the vertices of G, and
(ii) E ∈ P₂(V)
    called the edges of G

## graph

Graph G = (V, E, ψ)

(i) V is a finite set
    called the verticles of G
(ii) E is a finite set
    called the edges of G
(iii) ψ : E -> P₂(V)
    called incidence function of G

eg: V = {A, B, C, D}, E = {a, b, c}, and 
ψ = ((a, {A, B}), (b, {B, C}), (c, {C, D}))

if ψ(x) = {u, v} 
- u, v called the vertices of the edge x

- u, v are joined by x

- u, v are adjacent vertices

- u is adjacent to v, v is adjacent to u

In simple graph and graph can not have loops, if ψ(e) = {v, v} = {v}.

The edges of graph are labeled, but simple graph are not.

## degress of verticles

G = (V, E, ψ), v ∈ V, d(v) to be the number of e ∈ E such such that v ∈ ψ(e)

## random graph model (TODO including web)

## directed graph

directed graph D = (V, E, ψ)

(i) V is a finite set

(ii) E is a finite set

(iii) ψ : E -> V х V 

## simple digraphs

simple digraphs D = (V, E)

(i) V is a finite set
(ii) E ⊆ V x V
