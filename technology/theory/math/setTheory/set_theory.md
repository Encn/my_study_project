## language suitable

### symbols

variables           v₀,v₁,...
equality symbol     =
membership symbol   ∈ 
logical connectives ∧, ∨, ¬, →, ↔
quantifiers         ∀, ∃
parentheses         (, )

### formulas

atomic formulas: (vi ∈ vj) or (vi = vj)

The collection of formulas of set theory is defined as follows:

1. An atomic formula is a formula

2. If Ф, φ is any formula, vi is a variable
    (¬Ф) is a formula,
    (Ф ∧ φ) is a formula,
    (Ф ∨ φ) is a formula,
    (Ф → φ) is a formula,
    (Ф ↔ φ) is a formula,
    (∀vi)Ф is a formula,
    (∃vi)Ф is a formula,

## proof system

For example:

(Ф → φ) is equivalent to ((¬Ф) ∨ φ)

## subformulars

The complete collection of subformulas of a formula Ф is defined as following:

1. Ф is a subformular of Ф.

2. If (¬φ) or (∀v)φ or (∃v)φ is a subformular of Ф, then so is φ.

3. If (ψ ∧ φ) or (ψ ∨ φ) or (ψ → φ) or (ψ ↔ φ) is a subformular of Ф, then so are ψ and φ.

## occurs bound

For some subformula φ of ψ, (∀v)φ or (∃v)φ is a subformula of ψ, then we called variable v occurs bound in ψ.

## substitute

The result φ', of substituting the variable vj for each bound occurrence of the variable vi in the formula φ is defined by constructing a Ф' for each subformula Φ of φ as follows:

1. If Φ is atomic, then Φ' is Φ;
2. If Φ is (¬θ) for some 
