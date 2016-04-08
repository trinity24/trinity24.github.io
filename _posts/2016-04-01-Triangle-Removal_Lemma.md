---
layout: post
title:  Triangle Removal Lemma
date:   2016-04-01
categories: post
---

### Why do people care about triangles

Suffice it to say for now that people care about things being triangle free. Some applications include:

-- Roth's lemma

-- Point line incidence in paper

--

The triangle removal lemma shows that in any graph with some triangles in it (but not too many), we can remove not too many edges to make the graph triangle free. Thus for the reasons listed above, and many many more, the Triangle Removal Lemma is a very useful tool in many areas of combinatorics.

The triangle removal lemma was due to Szemeredi in kjerlkerw. He sklkfjhjfd.

### Background and definitions

If you're very familiar with the Szemerdi's regularity lemma, which I will undoubtedly write a post on in the future, you can probably skip this section.

From now on I'll standard graph theoretic notation, but will introduce all non-basic definitions. Assume $$G$$ is a graph, with vertex set $$V$$ and edge set $$E$$.

The triangle removal lemma and regularity lemma both rely on the fact that most graphs "look random".

First, let $$A,B \subset V$$ where $$A$$ and $$B$$ are disjoint. The **density** of the pair $$(A,B)$$ is defined as

 $$d(A,B)=\frac{|E(A,B)|}{|A||B|}$$

 Think of density as a measurement in $$[0,1]$$ for how many edges are going between two disjoint sets of vertices. All disjoint pairs of vertices in a complete graph have density 1, and most of the pairs of vertices in a sparse graph will have density close to 0.

Furthermore, $$(A,B)$$ is said to be **$$\epsilon$$-pseudo-random** if for all pairs $$(A',B')$$, where $$A' \subset A$$ and $$B'\subset B$$, $$|d(A,B)-d(A',B')| \leq \epsilon$$. Basically, the edge density in a pair of subsets is pretty much uniform between the pair. The figure below illustrates a graph that obviously satisfies this definition for pseudo-random, $$K_{4,4}$$, and a graph that is definitely not pseudo-random.
The subset pair which is $$\epsilon$$-pseduo-random doesn't have an area where most of its edges lie.

![random](\assets\pseudorandom.png)


Next, a partition on $$V$$ into sets $$V_1,\cdots, V_k$$ is said to be **$$\epsilon$$-regular** if the following two conditions hold:
-- for all $$i,j \in [k]$$, $$||V_i|-|V_j|| \leq 1$$.

-- all except $$\epsilon k^2$$ pairs from the partition $$V_i,V_j$$, for $$i<j$$,  are $$\epsilon$$-pseudo-random

So, considering a partition on the vertices which is as close as can be to a $$k$$ equi-partition, most pairs in this partition have close to uniform edge density between them.

### Formal statement

**The Triangle Removal Lemma** For every $$\epsilon>0$$ there exists $$\delta>0$$ such that for any graph $$G$$ on $$n$$ vertices with at most $$\delta n^3$$ triangles, there exists a set of at most $$\epsilon n^2$$ edges, which when removed results in a triangle-free graph.

#### Proof

Let $$V_1, \cdots, V_k$$ be an $$\frac{\epsilon}{4}$$-regular partition on $$V$$. Edges which satisfy one of 3 conditions, to be enumerated soon, will be removed. Then it's argued that after these edges are removed the graph is triangle-free, and not too many edges have been removed.

Remove edge $$(u,v)$$ from $$G$$ if:

1. $$(u,v) \in V_i \times V_j$$ where $$(V_i,V_j)$$ is not an $$\frac{\epsilon}{4}$$-pseudo-random pair. Remember our definition for $$\epsilon$$-regular partitions allowed a few of the pairs to not have its edges uniformly distributed throughout the partition. So all edges between such pairs are removed.

2. $$(u,v) \in V_i \times V_j$$ where $$d(V_i,V_j) < \frac{\epsilon}{2}$$. This condition states that we remove all edges between pairs in the partition which didn't have many edges between them to begin with.

3. $$v \in V_i $$ where $$ \mid V_i \mid \leq \frac{\epsilon}{4k}n$$. Any partitions that are small are removed. Thus obviously any edges with adjacencies in this partition are removed.

At most, $$\frac{\epsilon}{4} k^2$$ pairs from the partition were not $$\frac{\epsilon}{4}$$-pseudo-random. Denote the set of such pairs by $$I$$. As the partition is close to an equi-partition, for all $$i \in [ k ]$$, $$\mid V_i \mid \leq \lfloor \frac{n}{k}\rfloor +1$$.
Thus from condition 1, we remove at most $$\sum\limits_{(i,j) \in I} \mid V_i\mid\cdot \mid V_j\mid \leq \frac{\epsilon}{4} k^2 \cdot \frac{n^2}{k^2} = \frac{\epsilon}{4}n^2$$.

The number of edges in a simple graph on $$n$$ vertices is $$<n^2$$. Thus when we remove edges between pairs of partitions that have low density, specifically density $$<\frac{\epsilon}{2}$$, we remove $$<n^2 \frac{\epsilon}{2}$$ edges.

By the second condition in the definition of $$\epsilon-$$regular, there is at most 1 small partition. If a partition has $$<\frac{\epsilon}{4k}n$$ vertices, then it contributes at most $$<\frac{\epsilon}{4k}n^2$$ edges. Thus at most $$k$$ partitions could be as small as specified, which would imply a total of $$<k \cdot \frac{\epsilon}{4k}n^2= \frac{\epsilon}{4}n^2$$ edges are removed when the vertices from those partitions are deleted. So in total we see that our 3 conditions for edge removal deleted only at most $$\epsilon \cdot n^2$$ edges.

Now that we have removed "not too many edges", it remains to show that there are at least $$\delta \cdot n^3$$ triangles left in the graph, where $$\delta$$ is some constant yet to be determined. Consider a triangle that remains in the graph, and label the vertices of the triangle $$a,b,c$$. WLOG suppose that $$a \in V_1$$, $$b \in V_2$$, $$ c \in V_3$$. As these three edges were not removed, $$(V_1,V_2)$$, $$(V_2,V_3)$$, and $$(V_1,V_3)$$ are $$\frac{\epsilon}{4}$$-regular pairs with density $$\geq \frac{\epsilon}{2}$$. Lastly, $$ \mid V_i \mid >\frac{\epsilon}{4k}n$$ for $$i=1,2,3$$. Specifically, we'll use the facts that:

-- for any subset $$W_1 \subset V_1$$ such that $$\mid W_1 \mid > \frac{\epsilon}{4} \cdot \frac{n}{k}$$.

--

For $$a \in V_1$$, let $$W_2,W_3$$ be subsets of $$V_2$$ and $$V_3$$ respectively which are adjacent to $$a$$. As $$(V_2,V_3)$$ is now $$\frac{\epsilon}{4}$$ regular,

$$
\begin{align*}
\mid e(W_2,W_3)\mid \geq \frac{\epsilon}{4} |W_2||W_3| \geq \frac{\epsilon}{4} \cdot  \left (frac{\epsilon \cdot n}{4 \cdot k} \right)^2 = \frac{\epsilon^3 \cdot n^2}{64k^2}
\end{align*}
$$

We see that every edge between $$W_2$$ and $$W_3$$ forms a unique triangle. This was for an arbitrary $$a \in V_1$$, so summing over all vertices in $$V_1$$, the number of triangles is at least $$\frac{\epsilon^3 \cdot n^2}{64k^2} \cdot \frac{\epsilon \cdot n}{4 \cdot k} = \delta n^2$$.
