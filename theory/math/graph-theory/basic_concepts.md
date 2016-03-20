# basic concepts of graph

Pn(V) = { S | |S| = n ∧ S ⊆ V }

## simple graph, graph, degrees ,directed path, simple digraphs

simple graph: SG = (V, E), |V| ∈ Z, E ⊆ P₂(V)

graph: G = (V, E, ψ),  |V|, |E| ∈ Z,  ψ : E -> P₂(V)

degrees of verticles: d(v) = |S|, v ∈ V,  S = {e | e ∈ E, v ∈ ψ(e)}, in G = (V, E, ψ)

directed graph: D = (V, E, ψ), |V|, |E| ∈ Z, ψ : E → V ⅹ V

simple digraphs: SD = (V, E), |V| ∈ Z, E ⊆ V ⅹ V

restriction of ψ:
ψ : X -> Y, ψ': X' -> Y', X' ⊆ X, ∀ x ∈ X', ψ'(x) = ψ(x)

subgraph:
G = (V, E, ψ), G' = (V', E', ψ'), G' is a subgraph of G, if V' ⊆ V, E' ⊆ E, ψ' is a restriction of ψ


V: verticles of G
E: edges of G
ψ: incidence function

eg: V = {A, B, C, D}, E = {a, b, c}, and 
ψ = ((a, {A, B}), (b, {B, C}), (c, {C, D}))

In simple graph and graph can not have loops, if ψ(e) = {v, v} = {v}.

The edges of graph are labeled, but simple graph are not.

## random graph model (TODO including web)

## path trail walk and vetex sequence

Graph G = (V, E, ψ)

ψ(eι) = {aι, aι₊₁}, eι ∈ E, aι, aι₊₁ ∈ V, ι = 1, 2, ..., n - 1, n ≥ 2

R = <e₁, e₂, ..., en₋₁>

(i) R is a walk of G.

(ii) ∀ 1 ≤ i < j≤ n - 1, ai ≠ aj, R is called a path in G. 

(iii) ∀ 1 ≤ i < j ≤ n - 2, ei ≠ ej, R is called a trail in G.

If G = (V, E, ψ) is a directed graph, replace (iii) with (aι, aι₊₁)

We write u~v, if and only if either u = v or there is a walk from u to v.

## theorem (Walk implies path)

Graph G = (V, E, ψ), u ≠ v, u, v ∈ V, the following are equivalent:

(a) There is a walk from u to v

(b) There is a trail from u to v

(c) There is a path from u to v

## induced by edge set

G = (V, E, ψ), G' = (V', E', ψ'), G' is the subgraph induded by the edge set E': E' ⊆ E, V' = U ψ(x), x ∈ E'

## circuit and cycle

G = (V, E, ψ), e₁, ..., eκ be a trail with vertex sequence a₁, ..., aκ, a₁. G' of G induced by the set of edges {e₁, ..., eκ}. G' is called a circuit of G.

If the only repeated verticles on the trail are a₁ (the start and end), then the circuit is called a simple circuit or cycle.

Similarly, directed circuit, directed cycle.

## theorem (Cycles and multiple paths)

Twe vertices u ≠ v are on a cycle of G if and only if there are at least two paths from u to v that have no vertices in common except the endpoints u and v.

## connected graph

G = (V, E, ψ), ∀ u, v ∈ V, u ≠ v, u ~ v

## Eulerian trail, circuit

G = (V, E, ψ) is a connected graph

R = (e₁, e₂, ..., eι) is a trail, {e₁, e₂, ..., eι} = E, R is called an Eulerian trail. 

Eulerian circuit: circuit C = (V', E' , ψ') in G, E' = E.

## Hamitonian cycle

G = (V, E, ψ), a circle in G is a Hamiltonian cycle if every elements of V is a vertex of the cycle.
