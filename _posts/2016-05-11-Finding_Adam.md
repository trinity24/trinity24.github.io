---
layout: post
title:  Finding Adam (3)
date:   2016-05-11
categories: post
---
###  A quick intro


This post will outline the paper [*Finding Adam in random growing trees*](https://arxiv.org/abs/1411.3317) by Bubeck, Devroye, and Lugosi. The main question examined in this paper is simply stated and relatively unstudied:
given a tree, which has been generated under some attachment model, find the first vertex. "First" here meaning oldest.
Think about the spread of a rumor, or disease. In these situations, the resulting distribution is known, but the starting point is not.

![apple](\assets\apple.png)


#### Detour here if you don't know attachment models

In a tree generated under a **uniform attachment model** (UA model), each new node added in the tree connects uniformly at random to exactly one existing node. Below is an example of a random graph generated under a uniform attachment model.

![uniform](\assets\UA_model.png)

In a tree generated under a **preferential attachment model** (PA model), each new node added in the tree connects to exactly one existing node with probability proportional to its degree. Think of it like the rich get richer. Below is an example of a random graph generated under a preferential attachment model.

![preferential](\assets\PA_model.png)


### What does this paper prove?

Given a tree $$T$$ on $$n$$ vertices and an error bound $$\epsilon \in (0,1)$$, a **root-finding algorithm** outputs a set $$H(T,\epsilon)$$ of size $$K=K(\epsilon)$$ vertices such that as $$n \rightarrow \infty^+$$, with probability at least $$1-\epsilon$$, the first vertex is in $$H(T,\epsilon)$$.

Now the insight as to why root-finding algorithms are interesting: **the size of the vertex set output by a root-finding algorithm does not depend on the size of the tree.** The size of the set output only depends on the probability that the first vertex is in that set, but the tree can be huge and it doesn't matter.

 *Finding Adam* highlights proofs of the following:

1. The existence of root-finding algorithms for trees generated from a uniform or preferential attachment model.

2. A root-finding algorithm for trees generated from the UA model, where the size of the set found by the algorithm is sub-polynomial in $$1/ \epsilon$$. Bounds for the best value of $$K$$ are almost tight for trees grown under the UA model.

3. An impossibility result showing that for a tree grown under the PA model, root-finding algorithms output a set of size at least polynomial in $$1 / \epsilon$$.


### Existence of root-finding algorithms

First, note that it's not obvious that root-finding algorithms even exist. The authors point out that one heuristic which would not work in this situation is to output the set of vertices from the tree which have large degree. This seems like a reasonable heuristic, as the older the vertex is, the more likely it is to have more edges (especially under the uniform attachment model). However, in order for such a set to contain the first vertex with constant probability, it must be of size at least logarithmic in the number of vertices in the tree. For a tree generated under the UA model, a simple expectation calculation on the degree of the first vertex after $$n$$ vertices are in the tree and knowledge of concentration inequalities should convince you of this.

The authors construct a simple root-finding algorithm, which given a tree $$T$$, generated under the UA or PA model, and target accuracy $$\epsilon$$, produces a set of vertices $$H(T,\epsilon)$$ of size $$K$$.

**Theorem 1a** *For a tree with $$n$$ vertices generated under the uniform attachment model, the simple root-finding algorithm produces $$H(T,\epsilon)$$ such that for $$K \geq 2.5 \frac{ \log(1/ \epsilon)}{\epsilon}$$,*

$$
\begin{align*}
\liminf\limits_{n \rightarrow \infty^+}\mathbb{P}( \text{vertex 1 is in }H(T,\epsilon)) \geq 1-\frac{4 \epsilon}{1-\epsilon}.
\end{align*}
$$

**Theorem 1b** *For a tree with $$n$$ vertices generated under the preferential attachment model, the simple root-finding algorithm produces $$H(T,\epsilon)$$ such that for $$K \geq C \frac{\log^2 (1 / \epsilon)}{\epsilon^4}$$ for some constant $$C>0$$,*

$$
\begin{align*}
\liminf\limits_{n \rightarrow \infty^+}\mathbb{P}( \text{vertex 1 is in }H(T,\epsilon)) \geq 1-\epsilon.
\end{align*}
$$


#### A simple root-finding algorithm

Let $$(T,u)$$ denote the tree $$T$$ with first vertex $$u$$, and let $$T_{v \downarrow}$$ denote the subtree starting at $$v$$.
Define the function $$\psi_T: V(T) \rightarrow \mathbb{N}$$ such that

$$
\begin{align*}
\psi_T(u)=\max\limits_{v \in V(T) \setminus \{u\}} |(T,u)_{v \downarrow}|.
\end{align*}
$$

In other words, $$\psi$$ inputs a vertex $$u$$, views $$u$$ as the first vertex of the tree, then returns the size of the largest subtree starting at some child of $$u$$. An example is given for a tree below.

![algorithm](\assets\root_find_alg.png)

Here, $$\psi_T(u)= \max\{1,2,1,3,1,1,6,2,1,3,1,1\}=6$$

Then let $$H_{\psi}$$ be the mapping which returns the $$K$$ set with the smallest $$\psi$$ values. This procedure satisfies Theorems 1a and 1b, but the proofs are omitted in this post (check [the paper](https://arxiv.org/abs/1411.3317) if you want to see them).


### Doing better under the UA model

The simple root-finding algorithm outputs a set of size $$O(1/ \epsilon \log (1 / \epsilon))$$ for a tree grown under the UA model. Next, the paper explains an algorithm which outputs a set of size subpolynomial in $$1 / \epsilon$$.

**Theorem 2** *For a tree $$T$$ with $$n$$ vertices generated under the UA model, there exist universal constants $$a,b>0$$ such that if $$K \geq a \exp \left ( b \frac{\log(1/ \epsilon)}{\log \log (1 / \epsilon)}\right )$$, then*

$$
\begin{align*}
\liminf\limits_{n \rightarrow \infty^+} \mathbb{P} (\text{vertex 1 is in }H(T,\epsilon)) \geq 1- \epsilon.
\end{align*}
$$

The authors note that the function $$\psi$$ defined in the simple root-finding algorithm can be viewed as a relaxation of a [likelihood function](https://en.wikipedia.org/wiki/Likelihood_function). So they define a tighter relaxation of a likelihood function to improve the result under the UA model. Let $$(T,u)$$ denote the tree $$T$$ with first vertex $$u$$, and let $$T_{v \downarrow}$$ denote the subtree starting at $$v$$.
Define the function $$\phi_T: V(T) \rightarrow \mathbb{N}$$ such that

$$
\begin{align*}
\phi_T(u)=\prod\limits_{v \in V(T) \setminus \{u\}} |(T,u)_{v \downarrow}|.
\end{align*}
$$

Let $$H_{\phi}$$ be a mapping which returns the $$K$$ vertices in $$T$$ with the smallest $$\phi$$ values.

The values returned by $$\phi$$ make sense intuitively. A leaf will have $$\phi$$ value $$n-1$$, and a vertex near the center of the tree will have large $$\phi$$ value. Using the same example tree $$T$$ given earlier for the simple root finding algorithm: $$\phi_T(u)=1*2*1*3*1*1*6*2*1*3*1*1=216.$$

This procedure satisfies Theorem 2, but the proofs are omitted in this post (Again, check [the paper](https://arxiv.org/abs/1411.3317) to read it).


### Can't do much better under the PA model

In the section above, the set output has size subpolynomial in $$1 / \epsilon$$. For a tree generated under the PA model, the set output has size at least polynomial in $$1 / \epsilon$$.


**Theorem 3** *For a tree $$T$$ with $$n$$ vertices generated under the PA model, there exists $$c>0$$ such that for $$\epsilon \in (0,1)$$, any procedure that satisfies*

$$
\begin{align*}
\liminf\limits_{n \rightarrow \infty^+} \mathbb{P} (\text{vertex 1 is in }H(T,\epsilon)) \geq 1- \epsilon
\end{align*}
$$

*in the preferential attachment model must have $$K \geq c/ \epsilon$$.*

Basically, a tree grown under the preferential attachment model is more likely to have its first vertex be isomorphic to a bunch of leaves. So the first vertex is indistinguishable in some set of leaves

#### Outline proof of Theorem 3

Earlier in the paper, it's shown that the probability of error for the optimal procedure is nondecreasing in $$n$$, which means that finding the first vertex doesn't get easier as the tree grows. Thus, it suffices to show that the optimal procedure has probability of error $$\geq \epsilon$$ for some finite $$n$$. We'll show $$\exists n_0$$ for which with probability $$\geq 2 \epsilon$$, the first vertex is isomorphic to at least $$2 c / \epsilon$$ vertices in the tree. In this setting, any algorithm which outputs less than $$c / \epsilon$$ vertices has probability of error at least $$\epsilon$$.

The probability that the first vertex is a leaf is $$\Theta(1/\sqrt n)$$. Let $$n_0=1/\epsilon^2$$, and the probability that the first vertex is a leaf is $$\Theta(\epsilon)$$. Given that the first vertex is a leaf, the probability that vertex 2 is connected to $$\Theta(\sqrt n)=\Theta(1/\epsilon)$$ leaves is $$\Theta(1)$$. All of these leaves would be isomorphic to the first vertex.




### Previous work on similar problems

The authors state that they have not found any evidence of previous work that has been done on root-finding algorithms. However, variants of this problem have been studied by others. In [Looking for vertex one](http://arxiv.org/pdf/1408.6821v2.pdf) Frieze and Pegden give an algorithm which finds the first vertex of a tree generated under the PA model and runs, with high probability, in sub-polynomial time. Their approach uses only information about the neighborhoods of single vertices.

Another interesting pre-cursor was in a series of papers by [Bubeck et al.](https://arxiv.org/abs/1409.7685), [Curien et al.](http://arxiv.org/abs/1406.1758), and another from [Bubeck et al.](http://arxiv.org/abs/1401.4849). These papers proved that trees are heavily by their structure after some finite number of steps. This gives evidence towards the existence of root-finding algorithms, as trees which look different late in their growth, looked different earlier in their lives.
