---
layout: post
title:  Triangle Removal Lemma
date:   2016-04-01
categories: post
---

### Why do people care about triangles

Suffice it to say for now that people care about things being triangle free. Some applications include:

--

--

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

Furthermore, $$(A,B)$$ is said to be **$$\epsilon$$-pseudo-random** if for all pairs $$(A',B')$$, where $$A' \subset A$$ and $$B'\subset B$$, $$|d(A,B)-d(A',B')| \leq \epsilon$$. Basically, the edge density in a pair of subsets is pretty much uniform between the pair. The picture below illustrates a graph that looks to be close to pseudo-random and a graph that is definitely not pseudo-random.
The subset pair which is $$\epsilon$$-pseduo-random doesn't have an area where most of its edges lie.

IMAGE OF NONPSEUDORANDOM AND PSEUDORANDOM here

Next, a partition on $$V$$ into sets $$V_1,\cdots, V_k$$ is said to be **$$\epsilon$$-regular** if the following two conditions hold:
-- for all $$i,j \in [k]$$, $$||V_i|-|V_j|| \leq 1$$. MAYBE THIS CONDITION IS ONLY FOR THE REGULARITY LEMMA

-- all except $$\epsilon k^2$$ pairs from the partition $$V_i,V_j$$, for $$i<j$$,  are $$\epsilon$$-pseudo-random

So, considering a partition on the vertices which is as close as can be to a $$k$$ equi-partition, most pairs in this partition have close to uniform edge density between them.

### Formal statement

**The Triangle Removal Lemma** For every $$\epsilon>0$$ there exists $$\delta>0$$ such that for any graph $$G$$ on $$n$$ vertices with at most $$\delta n^3$$ triangles, there exists a set of at most $$\epsilon n^2$$ edges, which when removed results in a triangle-free graph.

#### Proof

Let $$V_1, \cdots, V_k$$ be an $\frac{\epsilon}{4}$-regular partition on $$V$$. Edges which satisfy one of 3 conditions, to be enumerated soon, will be removed. Then it's argued that after these edges are removed the graph is triangle-free, and not too many edges have been removed.

Remove edge $$(u,v)$$ from $$G$$ if:

1. $$(u,v) \in V_i \times V_j$$ where $$(V_i,V_j)$$ is not an $$\frac{\epsilon}{4}$$-pseudo-random pair. Remember our definition for $$\epsilon$$-regular partitions allowed a few of the pairs to not have its edges uniformly distributed throughout the partition. So all edges between such pairs are removed.

2. $$(u,v) \in V_i \times V_j$$ where $$d(V_i,V_j) < \frac{\epsilon}{2}$$. This condition states that we remove all edges between pairs in the partition which didn't have many edges between them to begin with.

3. $$v \in V_i$$ where $$|V_i| \leq \frac{\epsilon}{4k}n$$. Any partitions that are small are removed. Thus obviously any edges with adjacencies in this partition are removed.

At most, $$\frac{\epsilon}{4} k^2$$ pairs from the partition were not $$\frac{\epsilon}{4}$$-pseudo-random. Denote the set of such pairs by $$I$$. As the partition is close to an equi-partition, for all $$i \in [k]$$, $$|V_i| \eq \lfloor \frac{n}{k}\rfloor +1$$. Thus from condition 1, we remove at most $$\sum\limits_{(i,j) \in I} |V_i||V_j| \leq \frac{\epsilon}{4} k^2 \cdot \frac{n^2}{k^2} = \frac{\epsilon}{4}n^2$$.
