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

## dᵢn(U) dout(U) 

directed graph D = (V, E), 
dᵢn(U) = |Sᵢ|, Sᵢ = {(w, u) | u ∈ U, w ∉ U, (w, u) ∈ E}
dout(U) = |Sₒ|, Sₒ = {(u, w) | u ∈ U, w ∉ U, (u, w) ∈ E}

## tree 

If G is a connected graph without any cycles then G is called a tree.

## theorem

G = (V, E)
If G is a connected graph, the follwing are equivalent.
(a) G is a tree
(b) G has no cycles
(c) u ≠ v, u, v ∈ V, there is only one path from u to v
(d) removing any edge from G gives a graph which is not connected.
(e) the number of verticles of G is one more than the number of edges of G.

## forest

A forest is a graph all of whose connected components are trees.

## rooted graph

A pair (G, v), consisting of a graph G and a special vertex v, is called a rooted graph with root v.

## Parent child sibling and leaf

Let (T, r) be a rooted tree. T = (V, E), w ∈ V, w ≠ r,
let r=v₀,v₁,...,vι,vι₊₁=w, be the list of vertices on the unique path from r to w. We call vι the parent of w and call w a child of vι.
Vertices  with the same parent are siblings. A vertex with no children is a leaf.

## rooted plane tree

Let (T, r) be a rooted tree. For each vertex, order the children of the vertex. The result is a rooted plane tree (RP-tree\ordered tree).

## spanning tree

A spanning tree of a (simple) graph G = (V, E) is a subgraph T = (V, E').

## weights in a graph

G = (V, E), λ: E → R⁺, we called λ(e) the weight of the edge e.

H = (V', E') is a subgraph of G, the λ(H),is the sum of λ(e') over all e' ∈ E'

minimum weight spanning tree for a connected graph G is a spanning tree such that λ(T) ≤ λ(T') whenever T' is another spanning tree.

## theorem (Minimum weight spanning tree: Prim's algorithm)

G = (V, E), λ: E → R⁺, 

1. start: let E' = ф, V' = {v₀}, v₀ ∈ V

2. possible edges: let F = { {x,y} | x ∈ V', y ∉ V', y ∈ V}. If F = ф, stop.

3. chose edge greedily: let f be such that λ(f) is a minimum over all f ∈ F. Replace V' with V' U f and E' with E' U {f}. Go to step2.

## Lineal or depth-first spanning tree

rooted tree (T, r), T = (V, E), x, y ∈ V, if x is on the path connecting r to y, we say that y is a decendant of x. If one of u and v is a descendant of the other, we say that {u, v} is a lineal pair.

A lineal spanning tree or depth-first spanning tree of a connected graph G = (V, E) is a rooted spanning tree of G such that each edge {u, v} of G is a lineal pair.

## some hard problems

- Coloring problem
    For any c > 2, devise an algorithm whose input can be any simple graph and whose ouput answers the question "Can the graph be properly colored in c colors?"

- Traveling salesman problem
