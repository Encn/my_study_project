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

## path trail walk and vetex sequence

Graph G = (V, E, ψ)

(i) e₁, e₂, ..., en₋₁, eι ∈ E, ι = 1, 2, ..., n-1, n ≥ 2

(ii) distinct elements a₁, a₂, ..., an₋₁, aι ∈ V, ι = 1, 2, ..., n, n ≥ 2

(iii) ψ(eι) = {aι, aι₊₁}, ι = 1, 2, ..., n, n ≥ 2

e₁, e₂, ..., en₋₁ is called a path in G.

a₁, a₂, ..., an₋₁ is called the vertex sequence of the path.

If we require that e₁,...,en₋₁ be distinct, but not that a₁,...,an be distinct, the sequence of edges is called a trail.

If we do not even require that the edges be distinct, it is called a walk.

If G = (V, E, ψ) is a directed graph, replace (iii) with (aι, aι₊₁)

## theorem (Walk implies path)

Graph G = (V, E, ψ), u ≠ v, u, v ∈ V, the following are equivalent:

(a) There is a walk from u to v

(b) There is a trail from u to v

(c) There is a path from u to v

## restriction ψ' of ψ

ψ : X -> Y, ψ': X' -> Y',
(i) X' ⊆ X
(ii) ∀ x ∈ X', ψ'(x) = ψ(x)

## subgraph

G = (V, E, ψ), G' = (V', E', ψ'), G' is a subgraph of G when:

(i) V' ⊆ V
(ii) E' ⊆ E
(iii) ψ' is a restriction of ψ

## induced by edge set

G = (V, E, ψ), G' = (V', E', ψ')
(i) E' ⊆ E
(ii) V' = U ψ(x), x ∈ E'

G' is the subgraph induced by the edge set E'

## circuit and cycle

G = (V, E, ψ), e₁, ..., eκ be a trail with vertex sequence a₁, ..., aκ, a₁. G' of G induced by the set of edges {e₁, ..., eκ}. G' is called a circuit of G.

If the only repeated verticles on the trail are a₁ (the start and end), then the circuit is called a simple circuit or cycle.

Similarly, directed circuit, directed cycle.

## theorem (Cycles and multiple paths)

Twe vertices u ≠ v are on a cycle of G if and only if there are at least two paths from u to v that have no vertices in common except the endpoints u and v.

## connected graph

G = (V, E, ψ), u, v
(i) ∀ u, v ∈ V, u ≠ v
(ii) 
