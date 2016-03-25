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

tree edit distance denoted by δ(T₁, T₂)

## Tree Edit Distance

Represent edit operation by (l₁→l₂), where (l₁, l₂) ∈ ∑λ x ∑λ - (λ, λ)

The operation is a relabeling if l₁ ≠ λ and l₂ ≠ λ, a deletion if l₂ = λ, and an insertion if l₁ = λ.

We extend the notation such that (v → w) for nodes v and w denotes (label(v) → label(w)).

We define the cost of an edit operation by setting γ(l₁ → l₂) = γ(l₁, l₂), the cost of the sequence S = s₁, s₂,... sκ by γ(S) = ∑ γ(si)

δ(T₁, T₂) = min{γ(S) | S is a sequence of operations transforming T₁ into T₂}

### edit distance mapping

iff: if and only if

Define (M, T₁, T₂) to be an ordered edit distance mapping from T₁ to T₂, if M ⊆ V(T₁) x V(T₂) and for any pair (v₁, w₁), (v₂, w₂) ∈ M,

1. v₁ = v₂, iff w₁ = w₂. (one-to-one condition)
2. v₁ is an ancestor of v₂ iff w₁ is an ancestor of w₂. (ancestor condition)
3. v₁ is to the left of v₂ iff w₂ is to the left of w₂. (sibling condition)

We say that a node v in T₁ or T₂ is touched by a line in M if v occurs in some pair in M.

Let N₁, N₂ be the set of nodes in T₁ and T₂ repectively not touched by any lines in M. The cost of M is given by:

γ(M) = ∑ γ(v → w), (v, w) ∈ M + ∑ γ(v → λ), v ∈ N₁ + ∑ γ(λ → w), w ∈ N₂

compose mapping

M₁ ∘ M₂ = {(v, w) | ∃ u ∈ V(T₂), such that (v, u) ∈ M₁ and (u, w) ∈ M₂}

δ(T₁, T₂) = min{γ(M) | (M, T₁, T₂) is an edit distance mapping}

## General ordered edit distance

### a simple algorithm

Let F be a forest and v be a node in F. We denote by F - v the forest obtained by deleting v from F. Define F - T(v) as the forest obtained by deleting v and all descendants of v.

- Lemma 1

Let F₁ and F₂ be ordered forest and γ be a metric cost function defined on labels. Let v and w be the rightmost (if any) roots of the trees in F₁ and F₂ repectively.
We have:
δ(Θ, Θ) = 0
δ(F₁, Θ) = δ(F₁ - v, Θ) + γ(v → λ)
δ(Θ, F₂) = δ(Θ, F₂ - w) + γ(λ → w)

δ(F₁, F₂) = min {δ(F₁ - v, F₂) + γ(v → λ), δ(F₁, F₂ - w) + γ(λ → w), δ(F₁(v), F₂(w)) + δ(F₁ - T₁(v), F₂ - T₂(w)) + γ(v → w)}
