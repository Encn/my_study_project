# study lambda 

## reason

Leibniz had as ideal the following.
(1) create a 'universal language' in which all possible problems can be stated.

(2) find a decision method to solve all the problems stated in the universal language.

The point (2) became known as the Entscheidungsproblem. In 1936 the Entscheidungsproblem was solved in the negative independently by Alonzo Church and Alan Turing.

(1) Church invented a formal system called the lambda calculus and define the notion of computable function via this system.

(2) Turing invented a class of machines and defined the notion of computable functions.

## Definition

### λ-terms

The set of λ-terms (notation A) is build up from an infinite set of variables V = {v, v', v'', ...} using application and (function) abstraction.

```

x ∈ V ⇒  x ∈ A,

M,N ∈ A ⇒  (MN) ∈ A,

M ∈ A, x ∈ V ⇒  (λxM) ∈ A

```

In BF-form

```
variable ::= 'v' | variable '''

λ-term ::= variable | '(' λ-term λ-term ')' | '(λ' variable λ-term ')'

```

### convention

(i) x, y, z,... denote arbitrary variables; M, N, L,... denote arbitrary λ-terms. Outermost parenthese are not written.

(ii) M ≡ N denotes that M and N are the same term or can be obtained from each other by renaming bound varaibles.

Eg: 

```
(λxy)z ≡ (λxy)z

(λxx)z ≡ (λyy)z  // renaming bound varaible x to y

(λxx)z ≢ z

(λxx)z ≢ (λxy)z

```

(iii) We use the abbreviations

```
FM₁...Mn ≡ (..((FM₁)M₂)...Mn)
```

and

```
λx₁...xn.M ≡ λx₁(λx₂(...(λxn(M))...))
```

eg: λx.yx is (λx(yx))

### free variables

The set of free variables of M, notation FV(M), is defined as:

```
FV(x) = {x};

FV(MN) = FV(M) ∪ FV(N)

FV(λx.M) = FV(M) - {x}
```

A variable in M is bound if it is not free.

### combinator (close λ-term)

if FV(M) = ∅, M is a closed λ-term (or combinator)

the set of closed λ-items is denoted by A°

### substituting

The result of substituting N for the free occurences of x in M, notation M[x := N], is defined as follows:

```
x[x := N] ≡ N;

y[x := N] ≡ y, if x ≢ y;

(M₁M₂)[x := N] ≡ (M₁[x := N])(M₂[x := N])

(λy.M)[x := N] ≡ λy.(M[x := N])

```

### variable convention

if M₁,...,Mn occur in a certain mathematical context, then in these terms all bound variable are chosen to be different from the free variables.

### λ-calculus (definition)

(i) the principal axiom scheme
    (λx.M)N = M[x := N]

(ii) Equality 

    M = M;
    M = N ⇒  N = M;
    M = N, N = L ⇒  M = L;

    compatibility rules

    M = M' ⇒  MZ = M'Z;
    M = M' ⇒  ZM = ZM';
    M = M' ⇒  λx.M = λx.M'

(iii) If M = N is provable in the λ-calculus, then we sometimes write λ ⊢ M = N 

### remark

`λx.M = λy.M[ x:= y]`

## rules

- LEMMA. λ ⊢ (λx₁...xn.M)X₁...Xn = M[x₁ := X₁]...[xn := Xn]

- some combinators

```
I ≡ λx.x
K ≡ λxy.x
K* ≡ λxy.y
S ≡ λxyz.xz(yz)
```

- FIXEDPOINT THEOREM

(i) ∀F ∃X FX = X
(ii) There is a fixed point combinator
        Y ≡ λf.(λx.f(xx))(λx.f(xx))
     such that
        ∀F F(YF) = YF

prove: (i) Define W ≡ λx.F(xx) and X ≡ WW.
    X ≡ WW ≡ (λx.F(xx))W = F(WW) ≡ FX.
(ii) YF = (λx.F(xx))(λx.F(xx)), according to prove (i) we know, F(YF) = YF

- definition

(i) Fⁿ(M) with F ∈ A and n ∈ N is deifned inductively as follows.
        F⁰(M) ≡ M;
        Fⁿ⁺¹(M) ≡ F(Fⁿ(M)).
(ii) the Church numerals C₀, C₁, C₂... are defined by
        Cn ≡ λfx.fⁿ(x).

- proposition

Define

A+ ≡ λxypq.xp(ypq)
A∗ ≡ λxyz.x(yz)
Aexp ≡ λxy.yz

Then one has for all n, m ∈ N

(i) A+CnCm = Cn+m
(ii) A∗CnCm = Cn∗m
(iii) AexpCmCn = C(mⁿ), except for m = 0

### TODO page 13

## Church-Rosser property

The normal form obtained is independent of the order of evaluation of subterms.

## books

Introduction to Lambda Calculus  Henk Barendregt Erik Barendsen.
