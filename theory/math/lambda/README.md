# study lambda

## reason

Leibniz had as ideal the following.
(1) create a 'universal language' in which all possible problems can be stated.

(2) find a decision method to solve all the problems stated in the universal language.

The point (2) became known as the Entscheidungsproblem. In 1936 the Entscheidungsproblem was solved in the negative independentlyby Alonzo Church and Alan Turing.

(1) Church invented a formal system called the lambda calculus and define the notion of computable function via this system.

(2) Turing invented a class of machines and defined the notion of computable functions.

## Reduciton

E[P] -> E[P']

E: expression of functional program (algorithm and input). E is subject to some rewrite rules.

Reduction: replacing a part P of E by another expression P' according to the given rewrite rules.

P -> P' is a rewrite rule.

output: when result expression has no more parts that can be rewritten. This so called normal form E' of E.

combinators: function given by some rewrite rules.

## Church-Rosser property

The normal form obtained is independent of the order of evaluation of subterms.

## Definition

The set of λ-terms (notation A) is build up from an infinite set of variables V = {v, v', v'', ...} using application and (function) abstraction.

```

x ∈ V ⇒  x ∈ A,

M,N ∈ A ⇒  (MN) ∈ A,

M ∈ A, x ∈ V ⇒  (λxM) ∈ A

```

## operations of λ-calculus

- application

`F ∙ A   or FA`

Consider F as algorithm applied to the data A considered as input.

type-free: it is allowed to consider expressions like FF, that F applied to itself.

- abstraction

If M ≡ M[x] is an expression contaning ('depending on') x, then λx.M[x] denotes the function x -> M[x].

eg: (λx.2∙x + 1)3 = 2 ∙ 3 + 1 = 7
λx.2 ∙ x + 1 denotes the function x -> 2 ∙ x + 1

In general we have (λx.M[x])N = M[N]

`(λx.M)N = M[x:=N]`

call [x:=N] substitution

## Free and bound variables

Substitution in only performed in the free variables.

`yx(λx.x)[x:=N] ≡ yN(λx.x)`

`(λx.x)a = (λy.y)a = a`

## Functions of more arguments

curring: Functions of several arguments can be obtained by iteration of application.

eg: f(x, y)
    Fx = λy.f(x, y) 
    F = λx.Fx
so, (Fx)y = Fxy = f(x, y)

FM₁M₂...Mn denotes (..((FM₁)M₂)...Mn)

λx₁...xn.f(x1,...,xn) denotes λx₁.(λx₂.(...(λxn.f(x₁,...,xn))..))

for n arguments we have

    (λx₁...xn.f(x₁,...,xn))x1...xn = f(x₁, x₂, ..., xn)

Using vector to state:

    (λX.f[X])N = f(N)

## books

Introduction to Lambda Calculus  Henk Barendregt Erik Barendsen.
