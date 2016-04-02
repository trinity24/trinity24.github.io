---
layout: post
title:  The Sprague-Grundy Theorem
date:   2016-03-09
categories: post
---

### Before you start

<img src="/assets/nim-small.png" alt="nim" style="float: left;margin: 10px;">


If you forget how to play the game [nim](https://en.wikipedia.org/wiki/Nim), or forget what its winning strategy is, check out my post [Nim - A surprisingly important game]({% post_url 2016-03-09-games-intro %}). In that same post, there's also a bunch of definitions that will help refresh your memory on some properties of combinatorial games, if you need it.


Are you cool with how nim works and remember what combinatorial games are? Good.

### Background

The overall goal of this post is to prove that every impartial game is equivalent to a game of nim. While this result is often called "the Sprague-Grundy theorem", the theorem doesn't actually say anything about this conclusion.

I'll define some functions and definitions relevant for the Sprague-Grundy theorem. While none of this material will be particularly difficult, it may be new to you if you haven't studied combinatorial games or graph theory before. After proving the theorem, I'll explain why a game's equivalence to nim immediately follows.

#### Mex

Let's start by defining a function on sets of nonnegative integers called the **minimum excludent (mex)**. Let $$N$$ be a set of numbers, and

$$
\begin{align*}
  \text{mex}(N) &= \min \{ x \in \mathbb{Z}_{\geq 0}: x \not \in N \} \\
    &=\text{the smallest nonnegative integer that is not an element in }N.
\end{align*}
$$

Here are a few examples to help illustrate how the function acts:

$$
\begin{align*}
  &\text{mex}(\{0,1,3,7\}) = 2 \\
  &\text{mex}(\{3,0,1,8,4,66,2\}) = 5\\
  &\text{mex}(\emptyset) =0
\end{align*}
$$

#### Games as graphs

There are multiple ways of setting up an impartial game to explain the Sprague-Grundy theorem, but I like graphs, so I'm going to make a graph.

A game can be represented as a graph when the vertex set is the set of positions in the game, and there exists a directed edge between vertices $$x$$ and $$y$$ if a player can move from position $$x$$ to $$y$$. In normal play, the loser of a game is the person who ends at a vertex which has no out edges. So given a game $$X=(V,f)$$ there is a position set $$V$$ and function $$f$$, where for each $$v \in V$$, $$f(v)$$ is the possible positions to move to from $$v$$. $$f(v)$$ is the set of **followers** of $$v$$. The image below may help illustrate how some positions in a game can be represented as a graph.

![TTTgraph2](\assets\TTTgraph2.png)


On a game $$X=(V,f)$$, the **Sprague-Grundy function** is defined as $$g : V \rightarrow \mathbb{Z}_{\geq 0}$$, where

$$
\begin{align*}
 g(v)=\text{min}\{j \geq 0 : j \neq g(x) \text{ for } x \in f(v) \} = \text{mex}\{ g(x): \text{ for } x \in f(v)\}.
 \end{align*}
$$

So the Sprague-Grundy function inputs a position $$v$$ and looks at the set of Sprague-Grundy values of $$v$$'s followers. The function returns the smallest nonnegative integer which is not in the set of Sprague-Grundy values of $$v$$'s followers.


#### Combining games

Looking at a big game where there are tons of positions available is difficult. To overcome this, the big game can be broken into a bunch of smaller games. Analyzing the smaller games, and then combining them back together, is much easier.

Denote the $$k$$ smaller games as

$$
\begin{align*}
G_1=(V_1,f_1), G_2=(V_2,f_2), \cdots, G_{k}=(V_{k},f_{k}).
\end{align*}
$$

The big game is called the **disjuctive sum** or **combined game** of the $$k$$ smaller games. Let the big game be denoted as $$G$$, and define it as:

$$
\begin{align*}
G&=G_1+G_2+ \cdots + G_k=(V,F),\\
& \text{ where, } V= V_1 \times V_2 \times \cdots \times V_k \text{ and } f=f_1 \times f_2 \times \cdots \times f_k.
\end{align*}
$$

(The notation above is traditional for graph theory, but just think of it like an ordered $$k$$-tuple if it's unfamiliar to you.) So on a player's turn, they pick one of the smaller games, $$G_i$$, and move in $$V_i$$ according to $$f_i$$.

In the combined game, $$u=(u_1, \cdots, u_k) \in V$$ is a follower of $$v = (v_1, \cdots, v_k) \in V$$ exactly when there is some $$i^* \in [k]$$ such that $$f_{i^*}(v_{^*i})=u_{i^*}$$ and for all $$i \in [k]$$ such that $$i \neq i^*$$, $$v_i=u_i$$. A vertex is a follower in the combined game if it represents a move that could be made in only one of the smaller games.

#### Equivalent positions

As stated in the beginning of this post, the whole objective here is to prove that two games are equivalent. So let's define the notion of equivalent positions in games. Let $$x$$ and $$y$$ be two positions, not necessarily in the same game. In [my post on nim]({% post_url 2016-03-09-games-intro %}), it's stated that positions in impartial games are either N or P positions. Let this be referred to as the **outcome** of a position. $$x$$ and $$y$$ are said to be **equivalent** if for any position $$z$$ in any game, the combined positions $$x+z$$ and $$y+z$$ have the same outcome.

Intuitively, this means that playing a game from position $$x$$, always has the same outcome as playing a game from position $$y$$. The outcome of a determined game is only dependent on its starting position. Thus fixed games $$G$$, with starting position $$x$$, and $$H$$, with starting position $$y$$, are equivalent if and only if $$x$$ and $$y$$ are equivalent.

### The Sprague-Grundy theorem

Using the same notation as above, denote the $$k$$ smaller games as

 $$
\begin{align*}
 G_1=(V_1,f_1), G_2=(V_2,f_2), \cdots, G_{k}=(V_{k},f_{k}),
\end{align*}
 $$

where game $$G_i$$ has Sprague-Grundy function $$g_i$$. Furthermore, let $$G$$ be the combined game on the $$k$$ smaller games, and define function $$g : V \rightarrow \mathbb{Z}_{\geq 0}$$ such that

$$
\begin{align*}
g(v_1, v_2, \cdots, v_k) = g_{1}(v_1) \oplus g_{2}(v_2) \oplus \cdots \oplus g_{k}(v_{k}).
\end{align*}
$$

The proof of the Sprague-Grundy theorem will show that $$g$$ is the Sprague-Grundy function for the combined game. This was the result that was independently proven by Roland Sprague and Patrick Grundy in the mid-late 1930s. Grundy's proof was published in Cambridge University's Mathematical Society's magazine, *Eureka* in 1939, but Sprague's proof was published earlier in 1935.

**Theorem** Every impartial game is equivalent to a game of nim played on a certain pile size.

Remember that the Sprague-Grundy function returns the mex of a set. To prove the mex of a set is equal to some value $$\omega$$, it must be shown that $$\omega$$ is not in the set, and any nonnegative integer less than $$\omega$$ is in the set. For our purposes, let $$\omega=g_{1}(v_1) \oplus g_{2}(v_2) \oplus \cdots \oplus g_{k}(v_{k})$$. For arbitrary $$(v_1,v_2, \cdots, v_{k}) \in V$$,

1. no follower of $$(v_1,v_2, \cdots, v_{k})$$ has a Sprague-Grundy value of $$\omega$$

2. for every nonnegative integer $$\gamma < \omega$$, there exists a follower of $$(v_1,v_2, \cdots, v_{k})$$ which has a Sprague-Grundy value of $$\gamma$$

#### Proof

**Proof for 1.**

Assume for sake of contradiction that there was some follower, call it $$x$$, of $$(v_1,v_2, \cdots, v_{k})$$ which had a Sprague-Grundy value of $$\omega$$. Checking back at the definition for a follower in the combined game, if $$x$$ is a follower from $$(v_1,v_2, \cdots, v_{k})$$, then $$x$$ differs from $$(v_1,v_2, \cdots, v_{k})$$ in exactly one position in the $$k$$-tuple. Denote it's different position at index $$j$$ with value $$v_j'$$, so $$x=(v_1,\cdots, v_{j}^{'}, \cdots, v_{k})$$.

By our assumptions of the existence of the follower and the definition of $$\omega$$:

$$
\begin{align*}
g(x)=g( v_1,\cdots, v^{'}_{j}, \cdots, v_{k})=&g_{1}(v_1) \oplus \cdots \oplus g_{j}(v^{'}_{j}) \oplus  \cdots \oplus g_{k}(v_{k})\\
g(x)= \omega = &g_{1}(v_1) \oplus \cdots \oplus g_{j}(v_{j}) \oplus \cdots \oplus g_{k}(v_{k})\\
\Longrightarrow \quad
g_{1}(v_1) \oplus \cdots \oplus g_{j}(v_{j}) \oplus \cdots \oplus g_{k}(v_{k}) = &g_{1}(v_1) \oplus \cdots \oplus g_{j}(v^{'}_{j}) \oplus  \cdots \oplus g_{k}(v_{k})\\
\Longrightarrow \quad
g_j(v_j) =& g_{j}(v^{'}_{j})
\end{align*}
$$

$$v_j'$$ was a follower of $$v_j$$ in the smaller game $$G_j$$. Thus $$g_j(v_j) = g_{j}(v^{'}_{j})$$ is a contradiction because by the definition of the minimum excludent, a position cannot have the same Sprague-Grundy value as one of its followers.

**Proof for 2.**

Let nonnegative integer $$\gamma < \omega$$ be arbitrary and fixed. Consider the binary representations of $$\gamma$$ and $$\omega$$. As $$\gamma<\omega$$, let $$k$$ be the leftmost bit so $$\omega$$ has a 1 at the $$k^{th}$$ bit and $$\gamma$$ has a 0 at the $$k^{th}$$ bit. Since $$\omega=g_{1}(v_1) \oplus g_{2}(v_2) \oplus \cdots \oplus g_{k}(v_{k})$$, there is some $$g_j(v_j)$$ which has a 1 at its $$k^{th}$$ bit.

Note that $$\gamma \oplus \omega$$ has a 1 in its $$k^{th}$$ bit, and has 0s in all bits to the left of the $$k^{th}$$ bit. Thus $$\gamma \oplus \omega \oplus g_j(v_j)$$ has a 0 in the $$k^{th}$$ bit and all bits to the left of the $$k^{th}$$ bit, so $$\gamma \oplus \omega \oplus g_j(v_j)< g_j(v_j)$$. Zoom into the small game $$G_j$$ and see that by the definition of $$g_j$$, there exists some follower of $$v_j$$, call it $$v_j'$$, which has $$g_j(v_j') =\gamma \oplus \omega \oplus g_j(v_j) $$. Expanding our view back out to the combined game, the move from $$(v_1, \cdots, v_j, \cdots, v_k)$$ to  $$(v_1, \cdots, v_j', \cdots, v_k)$$ is allowed in the game. Lastly, check the Sprague-Grundy value of this follower:

$$
\begin{align*}
g(v_1, \cdots, v_j', \cdots, v_k) &= g_1(v_1) \oplus \cdots g_j(v_j') \oplus \cdots g_k(v_k)\\
 &= \gamma \oplus \omega \oplus g_1(v_1) \oplus \cdots g_j(v_j) \oplus \cdots g_k(v_k)\\
 &= \gamma \oplus \omega \oplus \omega = \gamma
\end{align*}
$$

So there exists a follower of $$(v_1,v_2, \cdots, v_{k})$$ which has a Sprague-Grundy value of $$\gamma$$.


### Wait. Why does this matter

There's no mention of nim or equivalence in the proof at all. Sprague and Grundy never actually stated the result of equivalence to nim, but it follows immediately from their proof. It was a few other guys, including [Conway](https://en.wikipedia.org/wiki/John_Horton_Conway), who made this connection.

I'll summarize the facts needed from this post and [my post on nim]({% post_url 2016-03-09-games-intro %}) to see how every impartial game is equivalent to a game of nim played on a certain pile size.

1. A single nim pile of size $$n$$ has Sprague-Grundy value  $$n$$.

2. A position is a P-position if and only if its Sprague-Grundy value is 0.

3. The Sprague-Grundy value of the combined game on a set of positions is the nim-sum of the positions' Sprague-Grundy values.

Let position $$x$$ in a game have Sprague-Grundy value $$n$$, and denote $$*n$$ as a game of nim on a single pile of size $$n$$. By fact 1, the Sprague-Grundy values of $$x$$ and $$*n$$ are the same. Then by fact 3, for any position $$z$$, the Sprague-Grundy values of $$x+z$$ and $$*n+z$$ are the same. Thus $$x+z$$ and $$*n+z$$ always have the same outcome by fact 2, which means that they are equivalent. So a starting position of a game is equivalent to nim on a single pile of size equal to the Sprague-Grundy value of a starting position of the game. One common way to say this is that a game $$G$$ with starting position $$x$$ is equivalent to the **nimber** $$n$$, where $$n$$ is the Sprague-Grundy value of $$x$$.

Let's conclude with noting that using the Sprague-Grundy theorem can be used to analyze a game which consists of a bunch of games. The Sprague-Grundy theorem proves that the Sprague-Grundy function for a combined game is the nim-sum of the Sprague-Grundy values of the component games, where the component games are equivalent to nim on a single pile of size equal to the component game's Sprague-Grundy value. For instance, suppose you challenge a friend to simultaneously play nim on piles of size 3, 8, and 13, the game  [21](https://en.wikipedia.org/wiki/Nim#The_subtraction_game_S.281.2C_2.2C_._._..2C_k.29), and [sprouts](https://en.wikipedia.org/wiki/Sprouts_(game)) on 9 initial dots. Now you have the tools to decide whether or not you want to be the first or second player to beat your friend.

---
