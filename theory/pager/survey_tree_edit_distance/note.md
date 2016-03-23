## concepts

- rooted tree
    (T, a)

- labeled tree (T, a)

T = (V, E), ∑

(i) rooted tree
(ii) v is assigned to a symbol ε.
    v ∈ V, ε ∈ ∑

- ordered tree

If a left-to-right order among siblings in T is given.

- relabel

Change the label of a node v in T.

- delete

Node v, parent v' in T. make the children of v become the children of v'. The children are inserted in the place of v as a subsequence in the left-to-right order of the children of v'.

- insert

Insert a node v as a child of v' in T making v the parent of a consecutive subsequence of the children of v'.

- edit script

An edit script S between T1 and T2 is a sequence of edit operations turning T1 to T2.

- edit script cost

Every operation has a cost, the sum of the costs of the operations.

- tree edit distance

An edit script between T1 and T2 of minimum cost and this cost is the tree edit distance.

- tree alignment distance

- tree inclusion

## preliminaries and notation

graph G, V(G), E(G)
tree T, root root(T)
|T| = |V(T)|
depth(v)
in-degree of v, deg(v) is the number of children of v
depth(T) is the maximum depth in T
deg(T) is the maximum degree
leaves(T)
parent(v)
refer to leaves(Ti), depth(Ti), and deg(Ti) by Li, Di, and Ii, i = 1, 2
T(v) denote the subtree of T rooted at a node v ∈ V(T)

pre(w)  post(w)

If v has children v1,...,vi, F(vs, vt), 1 ≤ s ≤ t ≤ i, as the forest T(vs),...,T(vt). F(v) = F(v1, Vi)

label set ∑. let λ ∉ ∑, ∑λ = ∑ U λ. We define a cost function, γ: ∑λ x ∑λ - (λ, λ) → R
(i) γ(l1, l2) ≥ 0, γ(l1, l1) = 0
(ii) γ(l1, l2) = γ(l2, l1)
(iii) γ(l1, l3) ≤ γ(l1, l2) + γ(l2, l3)
